import { CourseItem } from "~/components/course-item";
import { Header } from "~/components/header";
import getCourseList from "~/lib/helpers/get-course-list";

export default async function Home() {
  const courses = await getCourseList();

  return (
    <div className={"space-y-8"}>
      <Header
        title={"Notes by Cole Gawin"}
        description={"A public repository of notes I've taken across different courses."}
      />
      <div>
        {Object.entries(courses).map(([id, course]) => (
          <CourseItem key={id} id={id} title={course.title} description={course.description} />
        ))}
      </div>
    </div>
  );
}
