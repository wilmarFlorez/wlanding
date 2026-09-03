import { content, type Locale, whatsappUrl } from "@/components/landing/data";

export function WhatsAppButton({ locale }: { locale: Locale }) {
  return (
    <a
      className="whatsapp-button"
       href={whatsappUrl(locale)}
      target="_blank"
      rel="noreferrer"
       aria-label={content[locale].whatsapp.label}
    >
      <svg aria-hidden="true" viewBox="0 0 32 32">
        <path d="M16 3a12.8 12.8 0 0 0-10.92 19.5L3.4 28.6l6.28-1.65A12.8 12.8 0 1 0 16 3Zm0 23.24a10.4 10.4 0 0 1-5.3-1.45l-.38-.23-3.72.98 1-3.62-.25-.4A10.4 10.4 0 1 1 16 26.24Zm5.7-7.8c-.3-.15-1.78-.88-2.05-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.18.2-.35.23-.65.08a8.48 8.48 0 0 1-2.49-1.54 9.35 9.35 0 0 1-1.73-2.15c-.18-.3 0-.46.13-.6.13-.12.3-.32.45-.48.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.68-1.63-.92-2.23-.24-.58-.49-.5-.68-.5h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.13 3.25 5.15 4.56.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.57-.08 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.12-.28-.2-.58-.35Z" />
      </svg>
      <span>WhatsApp</span>
    </a>
  );
}
