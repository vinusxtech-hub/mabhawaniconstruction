"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function updateProject(formData: FormData) {
  const id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const category = formData.get("category") as string;
  const description = formData.get("description") as string;
  const status = formData.get("status") as string;
  const beforeImage = formData.get("beforeImage") as string;
  const afterImage = formData.get("afterImage") as string;

  if (!id || !title || !category || !description || !status || !beforeImage || !afterImage) {
    throw new Error("Missing required fields");
  }

  await prisma.project.update({
    where: { id },
    data: {
      title,
      category,
      description,
      status,
      beforeImage,
      afterImage,
    },
  });

  revalidatePath("/admin");
  revalidatePath("/work");
  redirect("/admin");
}
