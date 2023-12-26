import { BackButton } from "~/components/back-button";
import { Header } from "~/components/header";
import { PageItem } from "~/components/page-item";
import getCourse from "~/lib/helpers/get-course";
import getCourseContentList from "~/lib/helpers/get-course-content-list";
import getCourseList from "~/lib/helpers/get-course-list";

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  const courses = await getCourseList();

  return Object.keys(courses).map(courseId => ({ courseId }));
}

export default async function CoursePage({ params }: { params: { courseId: string } }) {
  const course = await getCourse(params.courseId);
  const pages = await getCourseContentList(params.courseId);

  return (
    <div className={"space-y-8"}>
      <div className={"space-y-2"}>
        <BackButton href={"/"}>Back to directory</BackButton>
        <Header title={course.title} description={course.description} small />
      </div>
      <div className={"space-y-2"}>
        {pages.map(pageId => (
          <PageItem key={pageId} href={`/course/${params.courseId}/${pageId}`} title={pageId} />
        ))}
      </div>
    </div>
  );
}
