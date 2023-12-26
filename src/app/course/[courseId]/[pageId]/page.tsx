import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

import { BackButton } from "~/components/back-button";
import { ContentHeading } from "~/components/content-heading";
import { Header } from "~/components/header";
import { MemoizedReactMarkdown } from "~/components/markdown";
import { CodeBlock } from "~/components/ui/codeblock";
import getCourse from "~/lib/helpers/get-course";
import getCourseContent from "~/lib/helpers/get-course-content";
import getCourseContentList from "~/lib/helpers/get-course-content-list";
import getCourseList from "~/lib/helpers/get-course-list";
import highlightPlugin from "~/lib/highlight-plugin";

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  const courses = await getCourseList();

  const pages: { courseId: string; pageId: string }[] = [];

  for (const courseId in courses) {
    const content = await getCourseContentList(courseId);
    content.forEach(pageId => {
      pages.push({ courseId, pageId: process.env.IS_BUILD_STEP ? pageId : encodeURIComponent(pageId) });
    });
  }

  return pages;
}

export default async function ContentPage({ params }: { params: { courseId: string; pageId: string } }) {
  const course = await getCourse(params.courseId);
  const content = await getCourseContent(params.courseId, decodeURIComponent(params.pageId));

  return (
    <div className={"space-y-8"}>
      <div className={"space-y-2"}>
        <BackButton href={`/course/${params.courseId}`}>Back to {course.short_title}</BackButton>
        <Header title={decodeURIComponent(params.pageId)} small />
      </div>
      <div className={"space-y-2"}>
        <MemoizedReactMarkdown
          className="prose break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0"
          remarkPlugins={[remarkGfm, remarkMath, highlightPlugin]}
          rehypePlugins={[
            // @ts-ignore
            rehypeKatex,
          ]}
          components={{
            p({ children }) {
              return <p className="mb-2 mt-1 last:mb-0">{children}</p>;
            },
            img(props) {
              return (
                <div className={"not-prose flex justify-center"}>
                  <img
                    {...props}
                    alt={props.alt}
                    src={`/assets/${params.courseId}/${props.src}`}
                    className={"rounded-md border shadow-sm"}
                  />
                </div>
              );
            },
            code({ node, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");

              return (
                <CodeBlock
                  key={Math.random()}
                  language={(match && match[1]) || ""}
                  value={String(children).replace(/\n$/, "")}
                  {...props}
                />
              );
            },
            h1: ContentHeading,
            h2(props) {
              return <h3 {...props} />;
            },
            h3(props) {
              return <h4 {...props} />;
            },
            h4(props) {
              return <h5 {...props} />;
            },
            h5(props) {
              return <h6 {...props} />;
            },
            h6(props) {
              return <b {...props} />;
            },
          }}
        >
          {content}
        </MemoizedReactMarkdown>
      </div>
    </div>
  );
}
