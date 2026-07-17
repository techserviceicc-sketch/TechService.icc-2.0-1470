// Dados do portfólio (trabalhos realizados, produtos e testes de mar).
// Para adicionar novas fotos/vídeos no futuro, basta incluir um novo objeto
// no array correspondente com os campos indicados abaixo.

export type PortfolioItem = {
  src: string;
  alt: string;
  title: string;
  description?: string;
};

// Pares de "antes e depois" — before.src / after.src
export type BeforeAfterItem = {
  title: string;
  description?: string;
  before: { src: string; alt: string };
  after: { src: string; alt: string };
};

export type SeaTrialVideo = {
  src: string; // caminho do vídeo em /public/videos/testes-mar
  poster: string; // imagem de capa (thumbnail) em /public/videos/testes-mar
  title: string;
  description?: string;
};

export const TRABALHOS: PortfolioItem[] = [
  {
    src: "/images/portfolio/trabalho-reparo-casco-1.jpg",
    alt: "Reparo interno de casco com tratamento anticorrosivo",
    title: "Reparo de Casco",
    description: "Tratamento e reforço estrutural em compartimento interno.",
  },
  {
    src: "/images/portfolio/trabalho-reparo-casco-2.jpg",
    alt: "Manutenção estrutural em compartimento de embarcação",
    title: "Manutenção Estrutural",
    description: "Diagnóstico e correção de desgaste em porão da embarcação.",
  },
  {
    src: "/images/portfolio/equipe-manutencao-motor.jpg",
    alt: "Equipe TechService realizando manutenção em motor de popa",
    title: "Manutenção de Motor",
    description: "Nossa equipe em campo, realizando revisão de motor de popa.",
  },
  {
    src: "/images/portfolio/manutencao-helice.jpg",
    alt: "Manutenção e revisão de hélice de embarcação",
    title: "Revisão de Hélice",
    description: "Inspeção, balanceamento e ajuste do conjunto propulsor.",
  },
  {
    src: "/images/portfolio/entrega-dono-embarcacao.jpg",
    alt: "Entrega da embarcação ao cliente após manutenção, com o dono da embarcação",
    title: "Entrega ao Cliente",
    description:
      "Nossa equipe com o dono da embarcação após a conclusão do serviço.",
  },
];

// Etapas da restauração completa de um motor V8 Volvo Penta — ordem
// cronológica do serviço. Para novas restaurações, crie um novo array
// seguindo este mesmo padrão de etapas.
export const MOTOR_V8_RESTAURACAO: PortfolioItem[] = [
  {
    src: "/images/portfolio/motor-v8-1-remocao.jpg",
    alt: "Remoção do motor V8 Volvo Penta da embarcação",
    title: "1. Remoção do Motor",
    description: "Remoção do motor V8 Volvo Penta da embarcação.",
  },
  {
    src: "/images/portfolio/motor-v8-2-desmontagem.jpg",
    alt: "Desmontagem completa do motor V8 Volvo Penta",
    title: "2. Desmontagem",
    description: "Desmontagem completa de todos os componentes do motor.",
  },
  {
    src: "/images/portfolio/motor-v8-3-isolamento.jpg",
    alt: "Isolamento das peças do motor V8 Volvo Penta para pintura",
    title: "3. Isolamento",
    description: "Isolamento e preparação das peças para pintura.",
  },
  {
    src: "/images/portfolio/motor-v8-4-pintura.jpg",
    alt: "Pintura do motor V8 Volvo Penta",
    title: "4. Pintura",
    description: "Pintura completa do bloco e componentes do motor.",
  },
  {
    src: "/images/portfolio/motor-v8-5-montagem-finalizacao.jpg",
    alt: "Montagem e finalização do motor V8 Volvo Penta restaurado",
    title: "5. Montagem e Finalização",
    description: "Remontagem completa e finalização — Motor V8 Volvo Penta.",
  },
];

export const PRODUTOS: PortfolioItem[] = [
  {
    src: "/images/portfolio/produto-el-shaddai-filtro.jpg",
    alt: "Filtro e desidratador de combustível El Shaddai 400",
    title: "El Shaddai 400",
    description: "Filtro e desidratador de combustível para embarcações.",
  },
  {
    src: "/images/portfolio/produto-al-chaddai-aditivo.jpg",
    alt: "Aditivo otimizador de combustível Al Chaddai",
    title: "Al Chaddai",
    description: "Solução em diesel — otimizador de combustível 1L.",
  },
  {
    src: "/images/portfolio/produto-al-chaddai-motor.jpg",
    alt: "Aplicação do aditivo Al Chaddai no motor da embarcação",
    title: "Al Chaddai — Aplicação",
    description: "Aditivo aplicado diretamente no sistema de combustível.",
  },
  {
    src: "/images/portfolio/produto-pecas-volvo-penta.jpg",
    alt: "Peças e componentes originais Volvo Penta",
    title: "Peças Originais Volvo Penta",
    description: "Componentes originais e homologados para motores marítimos.",
  },
];

// Pares de antes e depois — para adicionar um novo, inclua um objeto com
// before.src e after.src apontando para as duas fotos do mesmo serviço.
export const ANTES_DEPOIS: BeforeAfterItem[] = [
  {
    title: "Suporte do Motor",
    description: "Remoção de corrosão e restauração completa do suporte.",
    before: {
      src: "/images/portfolio/antes-suporte-motor.jpg",
      alt: "Suporte do motor antes da manutenção, com corrosão",
    },
    after: {
      src: "/images/portfolio/depois-suporte-motor.jpg",
      alt: "Suporte do motor depois da manutenção, restaurado",
    },
  },
  {
    title: "Terminal de Bateria",
    description: "Limpeza, tratamento e proteção contra oxidação.",
    before: {
      src: "/images/portfolio/antes-terminal-bateria.jpg",
      alt: "Terminal de bateria antes da manutenção, oxidado",
    },
    after: {
      src: "/images/portfolio/depois-terminal-bateria.jpg",
      alt: "Terminal de bateria depois da manutenção, limpo",
    },
  },
];

// Imagem única que já traz o antes/depois combinado (ex: casco).
export const ANTES_DEPOIS_UNICO: PortfolioItem[] = [
  {
    src: "/images/portfolio/antes-depois-casco.jpg",
    alt: "Antes e depois do reparo no casco de fibra",
    title: "Reparo de Casco em Fibra",
    description: "Resultado do reparo estrutural e acabamento do casco.",
  },
];

// Vídeos de teste de mar (barco navegando na água).
export const TESTES_DE_MAR: SeaTrialVideo[] = [
  {
    src: "/videos/testes-mar/teste-mar-1.mp4",
    poster: "/videos/testes-mar/teste-mar-1-poster.jpg",
    title: "Barba Negra — Teste de Mar",
    description:
      "Embarcação Barba Negra em total funcionamento após manutenção.",
  },
  {
    src: "/videos/testes-mar/teste-mar-2.mp4",
    poster: "/videos/testes-mar/teste-mar-2-poster.jpg",
    title: "Teste de Mar — Ao Entardecer",
  },
  {
    src: "/videos/testes-mar/teste-mar-3.mp4",
    poster: "/videos/testes-mar/teste-mar-3-poster.jpg",
    title: "Teste de Mar — Alto Mar",
  },
  {
    src: "/videos/testes-mar/teste-mar-4.mp4",
    poster: "/videos/testes-mar/teste-mar-4-poster.jpg",
    title: "Teste de Mar — Pôr do Sol",
  },
  {
    src: "/videos/testes-mar/teste-mar-5.mp4",
    poster: "/videos/testes-mar/teste-mar-5-poster.jpg",
    title: "Teste de Mar — Travessia",
  },
  {
    src: "/videos/testes-mar/teste-mar-6.mp4",
    poster: "/videos/testes-mar/teste-mar-6-poster.jpg",
    title: "Teste de Mar — Rio/Canal",
  },
];
