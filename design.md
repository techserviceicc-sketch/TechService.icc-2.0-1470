# Design System — TechService

Clone visual/content style of reference site (https://techser-hj9uoj8-preview-4200.runable.site/), only changing the stats requested.

## Typography
- Display/headings: "Cormorant" (serif, elegant, wide tracking on labels)
- Body/UI: "Poppins" (sans-serif)
- Overline labels: small, uppercase, letter-spacing wide, gold color

## Colors
- Background: near-black navy `#0b0e13` / `#0d1117`
- Surface/card: `#12161d` slightly lighter panel
- Accent gold: `#c9a24a` (buttons, numbers, icons, borders on hover)
- Text primary: `#f5f3ee` (off white)
- Text muted: `#9aa0aa`
- Borders: subtle `#232830`

## Layout
- Full-bleed dark hero with large serif headline, overline label, CTA buttons (solid gold + outline)
- Stats bar: 4 columns, big serif gold numbers + small uppercase label underneath
- Services grid: cards with small tag ("RECOMENDADO", "RESPOSTA RÁPIDA", etc.), serif title, muted description
- "Why us" numbered list section (01–04) two-column grid
- CTA banner section before footer
- Footer: 4 columns (brand, serviços, empresa, contato) + bottom bar copyright

## Components
- Floating WhatsApp button: fixed bottom-right, circular, WhatsApp green (#25D366), icon, subtle bounce/pulse animation, opens `https://wa.me/5541997398179` in new tab, tooltip "Fale conosco no WhatsApp" on hover
- Header: fixed/sticky, transparent over hero turning solid on scroll, nav links + language switch (PT) + "SOLICITAR ORÇAMENTO" button

## Content (kept identical to reference, only stats changed)
- Company: TechService
- Stats (UPDATED per user request): 3+ Anos de Experiência · 500+ Embarcações Atendidas · 24/7 Assistência de Emergência · 100% Clientes Satisfeitos
- Services: Manutenção Preventiva, Manutenção Corretiva, Reparos de Motor, Reparos em Rabetas, Manutenção Geral, Assistência Náutica Especializada
- Why us: Técnicos Certificados, Resposta Rápida, Peças Originais, Transparência Total
- Contact: +55 (41) 99739-8179 · techservice.icc@gmail.com · Av. Agílio Leão de Macedo, 10 — Caiobá, Matinhos - PR, 83260-000, Brasil

## Motion
- Staggered fade/slide-up reveal on scroll for hero text, stats, cards
- Smooth scroll for anchor nav links
