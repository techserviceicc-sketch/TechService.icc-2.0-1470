import { useState } from "react";
import { Play } from "lucide-react";
import { Reveal } from "./reveal";
import {
  TRABALHOS,
  PRODUTOS,
  ANTES_DEPOIS,
  ANTES_DEPOIS_UNICO,
  MOTOR_V8_RESTAURACAO,
  TESTES_DE_MAR,
  type PortfolioItem,
} from "../data/portfolio";

type Tab = "trabalhos" | "produtos" | "testes";

function Gallery({ items }: { items: PortfolioItem[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <Reveal key={item.src} delay={i * 80}>
          <div className="group overflow-hidden rounded-md border border-[#232830] bg-[#12161d]">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-lg font-medium">{item.title}</h3>
              {item.description && (
                <p className="mt-1 text-sm leading-relaxed text-[#9aa0aa]">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

function BeforeAfterCards() {
  return (
    <div className="mb-10 grid gap-6 sm:grid-cols-2">
      {ANTES_DEPOIS.map((item, i) => (
        <Reveal key={item.title} delay={i * 80}>
          <div className="overflow-hidden rounded-md border border-[#232830] bg-[#12161d]">
            <div className="grid grid-cols-2">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.before.src}
                  alt={item.before.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <span className="absolute left-2 top-2 rounded-sm bg-[#0b0e13]/80 px-2.5 py-1 text-[10px] font-semibold tracking-widest text-[#f5f3ee]">
                  ANTES
                </span>
              </div>
              <div className="relative aspect-square overflow-hidden border-l border-[#232830]">
                <img
                  src={item.after.src}
                  alt={item.after.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <span className="absolute left-2 top-2 rounded-sm bg-[#c9a24a] px-2.5 py-1 text-[10px] font-semibold tracking-widest text-[#0b0e13]">
                  DEPOIS
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-display text-lg font-medium">{item.title}</h3>
              {item.description && (
                <p className="mt-1 text-sm leading-relaxed text-[#9aa0aa]">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

function EngineRestoration() {
  return (
    <div className="mb-10">
      <Reveal className="mb-6">
        <p className="text-xs font-semibold tracking-widest text-[#c9a24a]">
          RESTAURAÇÃO COMPLETA — MOTOR V8 VOLVO PENTA
        </p>
      </Reveal>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {MOTOR_V8_RESTAURACAO.map((item, i) => (
          <Reveal key={item.src} delay={i * 80}>
            <div className="group h-full overflow-hidden rounded-md border border-[#232830] bg-[#12161d]">
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h4 className="font-display text-base font-medium text-[#c9a24a]">
                  {item.title}
                </h4>
                {item.description && (
                  <p className="mt-1 text-xs leading-relaxed text-[#9aa0aa]">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function SeaTrials() {
  const [playing, setPlaying] = useState<string | null>(null);

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {TESTES_DE_MAR.map((video, i) => (
        <Reveal key={video.src} delay={i * 80}>
          <div className="group overflow-hidden rounded-md border border-[#232830] bg-[#12161d]">
            <div className="relative aspect-[9/16] max-h-[420px] overflow-hidden bg-black">
              {playing === video.src ? (
                <video
                  src={video.src}
                  poster={video.poster}
                  controls
                  autoPlay
                  playsInline
                  className="h-full w-full object-cover"
                />
              ) : (
                <button
                  onClick={() => setPlaying(video.src)}
                  className="relative h-full w-full"
                  aria-label={`Reproduzir vídeo: ${video.title}`}
                >
                  <img
                    src={video.poster}
                    alt={video.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/35">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#c9a24a] text-[#0b0e13] shadow-lg transition-transform group-hover:scale-110">
                      <Play className="h-6 w-6" fill="currentColor" />
                    </span>
                  </span>
                </button>
              )}
            </div>
            <div className="p-6">
              <h3 className="font-display text-lg font-medium">{video.title}</h3>
              {video.description && (
                <p className="mt-1 text-sm leading-relaxed text-[#9aa0aa]">
                  {video.description}
                </p>
              )}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

const TABS: { id: Tab; label: string }[] = [
  { id: "trabalhos", label: "NOSSOS TRABALHOS" },
  { id: "produtos", label: "NOSSOS PRODUTOS" },
  { id: "testes", label: "TESTES DE MAR" },
];

export function PortfolioSection() {
  const [tab, setTab] = useState<Tab>("trabalhos");

  return (
    <section id="portfolio" className="border-b border-[#232830] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-14 max-w-2xl">
          <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-[#c9a24a]">
            PORTFÓLIO
          </p>
          <h2 className="font-display text-3xl font-medium sm:text-4xl">
            Nossos trabalhos, produtos e testes de mar
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#9aa0aa]">
            Uma amostra dos serviços realizados, das soluções que oferecemos
            e dos testes de mar após cada manutenção. Novas fotos e vídeos
            são adicionados periodicamente.
          </p>
        </Reveal>

        <Reveal className="mb-10 flex flex-wrap gap-3">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`rounded-sm px-6 py-2.5 text-xs font-semibold tracking-widest transition-colors ${
                tab === t.id
                  ? "bg-[#c9a24a] text-[#0b0e13]"
                  : "border border-[#3a4048] text-[#9aa0aa] hover:border-[#c9a24a] hover:text-[#c9a24a]"
              }`}
            >
              {t.label}
            </button>
          ))}
        </Reveal>

        {tab === "trabalhos" && (
          <>
            <BeforeAfterCards />
            <EngineRestoration />
            <Gallery items={[...ANTES_DEPOIS_UNICO, ...TRABALHOS]} />
          </>
        )}
        {tab === "produtos" && <Gallery items={PRODUTOS} />}
        {tab === "testes" && <SeaTrials />}
      </div>
    </section>
  );
}
