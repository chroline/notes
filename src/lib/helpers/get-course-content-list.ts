import fs from "fs";

export default async function getCourseContentList(id: string) {
  const data = await fs.promises.readFile(`content/${id}/index.json`, "utf-8");
  return JSON.parse(data) as string[];
}
