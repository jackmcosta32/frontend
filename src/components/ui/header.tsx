import { Github } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Header({ className, ...rest }: HeaderProps) {
  return (
    <header
      className={twMerge(
        "px-6 py-3 flex items-center justify-between border-b min-w-full",
        className
      )}
      {...rest}
    >
      <h1 className="text-xl font-bold">upload.ai</h1>

      <div className="flex gap-3 items-center">
        <span className="text-sm text-muted-foreground">
          Desenvolvido com 💜 no NLW da Rocketseat
        </span>

        <Separator orientation="vertical" className="h-6" />

        <Button variant="outline" className="gap-3">
          <Github className="w-4 h-4" />
          Github
        </Button>
      </div>
    </header>
  );
}
