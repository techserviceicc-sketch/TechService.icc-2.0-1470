import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "INÍCIO", href: "#inicio" },
  { label: "SERVIÇOS", href: "#servicos" },
  { label: "SOBRE", href: "#sobre" },
  { label: "FROTA & PARCEIROS", href: "#frota" },
  { label: "CONTATO", href: "#contato" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b0e13]/95 backdrop-blur border-b border-[#232830] py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#inicio" className="flex items-center gap-3">
          <img
            src="/images/logo-techservice.jpg"
            alt="TechService"
            className="h-11 w-11 rounded-full object-cover"
          />
          <span className="font-display text-2xl tracking-wide text-[#f5f3ee]">
            Tech<span className="text-[#c9a24a]">Service</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-medium tracking-widest text-[#9aa0aa] transition-colors hover:text-[#c9a24a]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <span className="text-xs font-semibold tracking-widest text-[#9aa0aa]">PT</span>
          <a
            href="#contato"
            className="rounded-sm border border-[#c9a24a] px-5 py-2.5 text-xs font-semibold tracking-widest text-[#c9a24a] transition-colors hover:bg-[#c9a24a] hover:text-[#0b0e13]"
          >
            SOLICITAR ORÇAMENTO
          </a>
        </div>

        <button
          className="text-[#f5f3ee] lg:hidden"
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="mx-6 mt-4 flex flex-col gap-4 rounded-md border border-[#232830] bg-[#12161d] p-6 lg:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-xs font-medium tracking-widest text-[#9aa0aa] hover:text-[#c9a24a]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-sm border border-[#c9a24a] px-5 py-2.5 text-center text-xs font-semibold tracking-widest text-[#c9a24a]"
          >
            SOLICITAR ORÇAMENTO
          </a>
        </div>
      )}
    </header>
  );
}
