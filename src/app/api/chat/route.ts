import { NextRequest } from "next/server";

const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
const GROQ_MODEL = "llama-3.3-70b-versatile";

const SYSTEM_PROMPT = `You are the friendly AI assistant for Maa Bhawani Construction & Contractor, a trusted construction company in Madhya Pradesh & Rajasthan, India.

Company Info:
- Proprietor: Chainsingh Surawat, Co-Owner: Kuldeep Singh Surawat
- Phone: +91 8319213539, Hours: Mon-Sat 8AM-7PM
- Services: Residential & Commercial Construction, Home Renovation, Kota Stone & Marble Polishing, Tile Installation & Flooring, Wall/Column/Slab/Brick Work, Plastering & Finishing
- 15+ years experience, 250+ projects, 200+ happy clients, 50+ workers
- Free site visit, transparent pricing, no hidden charges

Behavior: Be warm and professional. Greet with Namaste. Keep answers concise (2-4 sentences). Suggest calling or WhatsApp for quotes. Redirect unrelated questions politely. Use emojis sparingly. Reply in user's language.`;

interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export async function POST(request: NextRequest) {
  try {
    const { messages } = (await request.json()) as { messages: ChatMessage[] };

    if (!messages || !Array.isArray(messages)) {
      return Response.json({ error: "Messages array is required" }, { status: 400 });
    }

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey || apiKey === "your-groq-api-key-here") {
      return Response.json({
        message: "Namaste! 🙏 Welcome to Maa Bhawani Construction. Please contact us at +91 8319213539 for any inquiries!",
      });
    }

    const groqMessages: ChatMessage[] = [
      { role: "system", content: SYSTEM_PROMPT },
      ...messages.slice(-10),
    ];

    const response = await fetch(GROQ_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages: groqMessages,
        temperature: 0.7,
        max_tokens: 512,
        stream: true,
      }),
    });

    if (!response.ok) {
      console.error("Groq API error:", response.status);
      return Response.json({ error: "Failed to get AI response" }, { status: 500 });
    }

    const encoder = new TextEncoder();
    const decoder = new TextDecoder();

    const stream = new ReadableStream({
      async start(controller) {
        const reader = response.body?.getReader();
        if (!reader) { controller.close(); return; }
        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            const chunk = decoder.decode(value, { stream: true });
            const lines = chunk.split("\n").filter((l) => l.trim() !== "");
            for (const line of lines) {
              if (line.startsWith("data: ")) {
                const data = line.slice(6);
                if (data === "[DONE]") {
                  controller.enqueue(encoder.encode("data: [DONE]\n\n"));
                  continue;
                }
                try {
                  const parsed = JSON.parse(data);
                  const content = parsed.choices?.[0]?.delta?.content;
                  if (content) {
                    controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content })}\n\n`));
                  }
                } catch { /* skip malformed chunks */ }
              }
            }
          }
        } catch (err) { console.error("Stream error:", err); }
        finally { controller.close(); }
      },
    });

    return new Response(stream, {
      headers: { "Content-Type": "text/event-stream", "Cache-Control": "no-cache", Connection: "keep-alive" },
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
