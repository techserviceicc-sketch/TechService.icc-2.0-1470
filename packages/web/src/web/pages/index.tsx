import {
  Anchor,
  Award,
  Clock,
  Cog,
  Gauge,
  LifeBuoy,
  ShieldCheck,
  Ship,
  Wrench,
} from "lucide-react";
import { SiteHeader } from "../components/site-header";
import { WhatsAppButton } from "../components/whatsapp-button";
import { Reveal } from "../components/reveal";

const STATS = [
  { value: "3+", label: "ANOS DE EXPERIÊNCIA" },
  { value: "500+", label: "EMBARCAÇÕES ATENDIDAS" },
  { value: "24/7", label: "ASSISTÊNCIA DE EMERGÊNCIA" },
  { value: "100%", label: "CLIENTES SATISFEITOS" },
];

const SERVICES = [
  {
    tag: "RECOMENDADO",
    icon: ShieldCheck,
    title: "Manutenção Preventiva",
    description:
      "Inspeções programadas e cuidados periódicos que evitam falhas, prolongam a vida útil dos sistemas e garantem navegação segura.",
  },
  {
    tag: "RESPOSTA RÁPIDA",
    icon: Wrench,
    title: "Manutenção Corretiva",
    description:
      "Diagnóstico preciso e reparo de falhas identificadas, restabelecendo o pleno funcionamento da embarcação com agilidade.",
  },
  {
    tag: "ESPECIALIDADE",
    icon: Cog,
    title: "Reparos de Motor",
    description:
      "Serviço especializado em motores marítimos — retífica, revisão, troca de componentes e otimização de performance.",
  },
  {
    tag: "ESPECIALIDADE",
    icon: Gauge,
    title: "Reparos em Rabetas",
    description:
      "Manutenção e reparo de rabetas (outdrives), incluindo vedações, juntas, hélices e alinhamento do conjunto propulsor.",
  },
  {
    tag: "COMPLETO",
    icon: Ship,
    title: "Manutenção Geral",
    description:
      "Cuidado abrangente da embarcação — elétrica, hidráulica, ar-condicionado, sistemas de bordo e casco.",
  },
  {
    tag: "24/7",
    icon: LifeBuoy,
    title: "Assistência Náutica Especializada",
    description:
      "Suporte técnico especializado no escopo da embarcação, incluindo atendimento de emergência e assistência em marina ou em rota.",
  },
];

const WHY_US = [
  {
    number: "01",
    title: "Técnicos Certificados",
    description:
      "Equipe especializada com certificação em motores marítimos e sistemas náuticos das principais marcas.",
  },
  {
    number: "02",
    title: "Resposta Rápida",
    description:
      "Atendimento de emergência e prazos de execução otimizados para minimizar o tempo da embarcação fora d'água.",
  },
  {
    number: "03",
    title: "Peças Originais",
    description:
      "Utilizamos apenas peças e componentes originais ou homologados pelos fabricantes.",
  },
  {
    number: "04",
    title: "Transparência Total",
    description:
      "Diagnóstico detalhado, orçamento claro e acompanhamento em cada etapa do serviço.",
  },
];

const FOOTER_SERVICES = [
  "Manutenção Preventiva",
  "Manutenção Corretiva",
  "Reparos de Motor",
  "Reparos em Rabetas",
  "Manutenção Geral",
  "Assistência Náutica Especializada",
];

function Index() {
  return (
    <div className="min-h-screen bg-[#0b0e13] text-[#f5f3ee]">
      <SiteHeader />
      <WhatsAppButton />

      {/* HERO */}
      <section
        id="inicio"
        className="relative flex min-h-screen items-center overflow-hidden border-b border-[#232830] pt-32"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-marina.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0e13] via-[#0b0e13]/85 to-[#0b0e13]/40" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(circle at 20% 20%, rgba(201,162,74,0.15), transparent 45%), radial-gradient(circle at 80% 60%, rgba(201,162,74,0.08), transparent 50%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 pb-24">
          <Reveal>
            <p className="mb-6 flex items-center gap-3 text-xs font-semibold tracking-[0.3em] text-[#c9a24a]">
              <span className="h-px w-10 bg-[#c9a24a]" />
              SERVIÇO TÉCNICO ESPECIALIZADO
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display max-w-3xl text-5xl font-medium leading-tight sm:text-6xl lg:text-7xl">
              Excelência técnica a serviço da sua embarcação
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#9aa0aa]">
              Manutenção preventiva, corretiva e assistência náutica
              especializada para embarcações e yachts. Precisão,
              confiabilidade e experiência em cada intervenção.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contato"
                className="rounded-sm bg-[#c9a24a] px-7 py-3.5 text-xs font-semibold tracking-widest text-[#0b0e13] transition-transform hover:scale-[1.03]"
              >
                SOLICITAR ORÇAMENTO
              </a>
              <a
                href="#servicos"
                className="rounded-sm border border-[#3a4048] px-7 py-3.5 text-xs font-semibold tracking-widest text-[#f5f3ee] transition-colors hover:border-[#c9a24a] hover:text-[#c9a24a]"
              >
                NOSSOS SERVIÇOS
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-[#232830] bg-[#0d1117]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-16 sm:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100} className="text-center sm:text-left">
              <p className="font-display text-4xl font-semibold text-[#c9a24a] sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-[11px] font-medium tracking-widest text-[#9aa0aa]">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicos" className="border-b border-[#232830] py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-16 max-w-2xl">
            <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-[#c9a24a]">
              O QUE FAZEMOS
            </p>
            <h2 className="font-display text-3xl font-medium sm:text-4xl">
              Serviço técnico completo, do casco ao motor
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#9aa0aa]">
              Uma equipe especializada, ferramentas de precisão e protocolos
              rigorosos para manter sua embarcação sempre pronta para
              navegar.
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.title} delay={i * 80}>
                  <div className="group h-full rounded-md border border-[#232830] bg-[#12161d] p-8 transition-colors hover:border-[#c9a24a]/60">
                    <Icon className="mb-6 h-8 w-8 text-[#c9a24a]" strokeWidth={1.5} />
                    <p className="mb-3 text-[10px] font-semibold tracking-widest text-[#c9a24a]">
                      {service.tag}
                    </p>
                    <h3 className="font-display text-xl font-medium">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#9aa0aa]">
                      {service.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="sobre" className="border-b border-[#232830] py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-16 max-w-2xl">
            <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-[#c9a24a]">
              POR QUE A TECHSERVICE
            </p>
            <h2 className="font-display text-3xl font-medium sm:text-4xl">
              Padrão de qualidade náutica premium
            </h2>
          </Reveal>

          <div className="grid gap-x-16 gap-y-12 sm:grid-cols-2">
            {WHY_US.map((item, i) => (
              <Reveal key={item.number} delay={i * 100} className="flex gap-6">
                <span className="font-display text-3xl font-medium text-[#c9a24a]/50">
                  {item.number}
                </span>
                <div>
                  <h3 className="font-display text-xl font-medium">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#9aa0aa]">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FLEET & PARTNERS (id anchor) */}
      <section id="frota" className="border-b border-[#232830] bg-[#0d1117] py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-14 overflow-hidden rounded-md border border-[#232830]">
            <img
              src="/images/hero-marina.jpg"
              alt="Marina com embarcações e yachts ao entardecer"
              className="h-72 w-full object-cover sm:h-96"
            />
          </Reveal>
          <Reveal className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-[#c9a24a]">
              FROTA & PARCEIROS
            </p>
            <h2 className="font-display text-3xl font-medium sm:text-4xl">
              Atendimento especializado, onde sua embarcação estiver
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#9aa0aa]">
              Trabalhamos em parceria com marinas, estaleiros e proprietários
              para manter toda a frota em pleno funcionamento, com
              atendimento em marina ou em rota.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {[Anchor, Award, Clock].map((Icon, i) => (
              <Reveal
                key={i}
                delay={i * 100}
                className="flex flex-col items-center rounded-md border border-[#232830] bg-[#12161d] p-8 text-center"
              >
                <Icon className="mb-4 h-8 w-8 text-[#c9a24a]" strokeWidth={1.5} />
                <p className="text-sm text-[#9aa0aa]">
                  {i === 0 && "Suporte em marinas e estaleiros parceiros"}
                  {i === 1 && "Reconhecidos pela qualidade técnica e confiabilidade"}
                  {i === 2 && "Disponibilidade para atendimento de emergência"}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b border-[#232830] py-28 text-center">
        <Reveal className="mx-auto max-w-2xl px-6">
          <h2 className="font-display text-3xl font-medium sm:text-4xl">
            Sua embarcação merece o melhor cuidado técnico
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#9aa0aa]">
            Fale com nossa equipe e solicite um orçamento sem compromisso.
          </p>
          <a
            href="https://wa.me/5541997398179"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-sm bg-[#c9a24a] px-8 py-3.5 text-xs font-semibold tracking-widest text-[#0b0e13] transition-transform hover:scale-[1.03]"
          >
            FALAR COM UM ESPECIALISTA
          </a>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer id="contato" className="bg-[#0d1117] py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/images/logo-techservice.jpg"
                alt="TechService"
                className="h-11 w-11 rounded-full object-cover"
              />
              <p className="font-display text-2xl">
                Tech<span className="text-[#c9a24a]">Service</span>
              </p>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[#9aa0aa]">
              Serviço técnico especializado para embarcações e yachts.
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold tracking-widest text-[#f5f3ee]">
              SERVIÇOS
            </p>
            <ul className="space-y-2">
              {FOOTER_SERVICES.map((s) => (
                <li key={s} className="text-sm text-[#9aa0aa]">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold tracking-widest text-[#f5f3ee]">
              EMPRESA
            </p>
            <ul className="space-y-2 text-sm text-[#9aa0aa]">
              <li>Sobre</li>
              <li>Frota & Parceiros</li>
              <li>Contato</li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold tracking-widest text-[#f5f3ee]">
              CONTATO
            </p>
            <ul className="space-y-2 text-sm text-[#9aa0aa]">
              <li>
                <a
                  href="https://wa.me/5541997398179"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c9a24a]"
                >
                  +55 (41) 99739-8179
                </a>
              </li>
              <li>
                <a href="mailto:techservice.icc@gmail.com" className="hover:text-[#c9a24a]">
                  techservice.icc@gmail.com
                </a>
              </li>
              <li>
                Av. Agílio Leão de Macedo, 10 — Caiobá, Matinhos - PR,
                83260-000, Brasil
              </li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-7xl border-t border-[#232830] px-6 pt-8 text-center text-xs text-[#9aa0aa]">
          © 2026 TechService. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}

export default Index;
