import { buttonVariants } from "@/components/ui/button";
import {
  DesktopIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

export function Footer(props: {
  builtBy: string;
  builtByLink: string;
  githubLink: string;
  desktopLink: string;
  linkedinLink: string;
}) {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Criado por {""}
            <a
              href="https://www.fiveacts.com.br/"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
                Five Acts
            </a>
            .
          </p>
        </div>

        <div className="flex items-center space-x-1">
          {(
            [
              { href: props.linkedinLink, icon: LinkedInLogoIcon },
              { href: props.githubLink, icon: GitHubLogoIcon },
              { href: props.desktopLink, icon: DesktopIcon },
            ] as const
          ).map((link, index) => (
            <Link
              href={link.href}
              className={buttonVariants({ variant: "ghost", size: "icon" })}
              key={index}
            >
              <link.icon className="h-6 w-6" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
