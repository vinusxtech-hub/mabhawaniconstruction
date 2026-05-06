"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createProject(formData: FormData) {
  const title = formData.get("title") as string;
  const category = formData.get("category") as string;
  const description = formData.get("description") as string;
  const status = formData.get("status") as string;
  const beforeImage = formData.get("beforeImage") as string;
  const afterImage = formData.get("afterImage") as string;

  if (!title || !category || !description || !status || !beforeImage || !afterImage) {
    throw new Error("Missing required fields");
  }

  await prisma.project.create({
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

export async function deleteProject(formData: FormData) {
  const id = formData.get("id") as string;
  
  if (!id) throw new Error("Missing ID");

  await prisma.project.delete({
    where: { id },
  });

  revalidatePath("/admin");
  revalidatePath("/work");
}
