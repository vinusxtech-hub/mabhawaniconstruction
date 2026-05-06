"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function updateSettings(formData: FormData) {
  const id = formData.get("id") as string;
  const companyName = formData.get("companyName") as string;
  const phoneNumber = formData.get("phoneNumber") as string;
  const email = formData.get("email") as string;
  const logoUrl = formData.get("logoUrl") as string;

  if (!id) throw new Error("Settings ID not found");

  await prisma.siteSettings.update({
    where: { id },
    data: {
      companyName,
      phoneNumber,
      email,
      logoUrl: logoUrl || null,
    },
  });

  revalidatePath("/");
  revalidatePath("/admin/settings");
}
