import { twMerge } from "tailwind-merge";
import { Header } from "@/components/ui/header";

export interface BaseLayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

export function BaseLayout({ children, className, ...rest }: BaseLayoutProps) {
  return (
    <div className={twMerge("min-h-screen flex flex-col", className)} {...rest}>
      <Header />

      <main className="flex-1 p-6 flex gap-6">{children}</main>
    </div>
  );
}
