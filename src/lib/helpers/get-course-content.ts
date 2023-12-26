import fs from "fs";

export default async function getCourseContent(courseId: string, pageId: string) {
  const data = await fs.promises.readFile(`content/${courseId}/${pageId}.md`, "utf-8");
  return data as string;
}
