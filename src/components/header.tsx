import { cn } from "~/lib/utils";

export function Header({
  title,
  description,
  small = false,
}: {
  title: string;
  description?: string;
  small?: boolean;
}) {
  return (
    <div className={cn("space-y-2", small ? "text-left" : "text-center")}>
      <h1 className={"font-heading text-3xl font-bold sm:text-3xl"}>{title}</h1>
      {description && <p className={cn("font-medium opacity-50", small ? "text-md" : "text-lg")}>{description}</p>}
    </div>
  );
}
