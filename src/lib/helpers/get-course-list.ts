import * as fs from "fs";

import Course from "~/lib/types/Course";

export default async function getCourseList() {
  const data = await fs.promises.readFile("content/index.json", "utf-8");
  return JSON.parse(data) as Record<string, Course>;
}
