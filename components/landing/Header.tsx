import Image from "next/image";
import { content, type Locale } from "@/components/landing/data";

export function Header({ locale }: { locale: Locale }) {
  const copy = content[locale].header;
  return (
    <header className="site-header">
      <div className="container header-content">
        <a className="wordmark" href="#inicio" aria-label={copy.homeLabel}>
          <Image src="/icon.svg" alt="" width={36} height={36} priority />
        </a>
        <nav className="header-nav" aria-label={copy.navLabel}>
          <a href="#experiencia">{copy.experience}</a>
          <a href="#proyectos">{copy.projects}</a>
          <a href="#capacidades">{copy.capabilities}</a>
          <a href="#contacto">{copy.contact}</a>
        </nav>
        <a className="language-link" href={copy.languageHref} aria-label={copy.languageLabel}>{copy.languageName}</a>
        <a className="button button-small" href="#contacto">
          {copy.contact}
        </a>
      </div>
    </header>
  );
}
