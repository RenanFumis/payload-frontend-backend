import { Footer } from "@/components/footer";
import { LandingPageHeader } from "@/components/landing-page-header";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingPageHeader
        items={[
          { title: "Home", href: "/" },
          { title: "Painel", href: "/#painel" },
          { title: "Porta da Empresa", href: "/#portal-da-empresa" },
        ]}
      />
      <main className="flex-1">{props.children}</main>
      <Footer
        builtBy="Stack Auth"
        builtByLink="https://stack-auth.com/"
        githubLink="https://github.com/RenanFumis"
        desktopLink="https://www.fiveacts.com.br/"
        linkedinLink="https://www.linkedin.com/company/fiveacts/posts/?feedView=all"
      />
    </div>
  );
}
