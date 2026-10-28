<div align="center">

<h1 align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width="36" height="36" alt="Next.js" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="36" height="36" alt="React" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="36" height="36" alt="TypeScript" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" width="36" height="36" alt="Tailwind CSS" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" width="36" height="36" alt="Docker" />
  <br />
  Dashboard Next.js & Shadcn UI
</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14.2.6-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js 14.2.6" />
  <img src="https://img.shields.io/badge/React-18.0+-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 18" />
  <img src="https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript 5" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4.1-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Shadcn_UI-Radix-09090B?style=for-the-badge&logo=shadcnui&logoColor=white" alt="Shadcn UI" />
  <img src="https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker Ready" />
</p>

</div>

---

## 📝 Descrição

Painel administrativo moderno, responsivo e de alta performance desenvolvido com **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Shadcn UI** e **Recharts**. O sistema oferece visualização de indicadores-chave de desempenho (KPIs), gráfico comparativo de vendas (Desktop vs Mobile), gestão de pedidos, catálogo de produtos, carteira de clientes e fluxo completo de autenticação com múltiplos perfis de acesso.

<cite>Plataforma web de gestão comercial e visualização analítica de métricas de vendas, pedidos, produtos e clientes em tempo real.</cite>

---

## 🚦 Status do Projeto

<h4 align="center"> ✅ Dashboard Next.js & Shadcn UI 🚀 Concluído ⚙️ </h4>

---

## 🏗️ Arquitetura do Projeto

- **Tipo:** 🧱 **Monólito Fullstack (Next.js App Router)**
- **Explicação:** A aplicação unifica em um único projeto a camada de interface reativa (**React Server & Client Components**), rotas de API internas (`/api/auth/*` e `/api/health`), **Edge Middleware** (`src/middleware.ts`) para gestão de sessão e orquestração containerizada com **Docker Compose**, **Nginx** (proxy reverso otimizado), **MySQL 8.0** e **PHPMyAdmin**.

---

## 🔥 Pré-requisitos

- **Node.js 20.0+** (compatível com **Node.js 18.17+**)
- **NPM 10.0+** (ou **9.0+**)
- **TypeScript 5.0+**
- **MySQL 8.0+** (opcional para ambiente híbrido local/containerizado)
- **Docker 24.0+** e **Docker Compose v2+** (opcional para execução em containers)

---

## 🚀 Tecnologias Utilizadas

- **Linguagem:** TypeScript `5.x` / JavaScript (ESNext)
- **Framework Principal:** Next.js `14.2.6` (App Router & Standalone Output)
- **Biblioteca de UI:** React `18.x` & React DOM `18.x`
- **Estilização:** Tailwind CSS `3.4.1`, `tailwindcss-animate`, `clsx` e `tailwind-merge`
- **Componentes Acessíveis (Shadcn UI / Radix UI):**
  - `@radix-ui/react-avatar` (`^1.1.0`)
  - `@radix-ui/react-dialog` (`^1.1.1` — Sheet / Drawer Mobile)
  - `@radix-ui/react-dropdown-menu` (`^2.1.1`)
  - `@radix-ui/react-slot` (`^1.1.0`)
  - `@radix-ui/react-tooltip` (`^1.1.2`)
  - `class-variance-authority` (`^0.7.0`)
- **Visualização de Dados (Gráficos):** Recharts `2.12.7`
- **Ícones Vetoriais:** Lucide React `0.436.0`
- **Infraestrutura & DevOps:** Docker (Multi-stage `node:20-alpine`), Nginx `1.27-alpine`, MySQL `8.0` e PHPMyAdmin
- **Padrões Adotados:** Component-Driven Development, Design System com Variantes (CVA), App Router Server/Client Split e Ambiente Híbrido (`.env` Local/Docker)

---

## 🔨 Funcionalidades

- 📊 **Dashboard de Indicadores (KPIs):** Cards de resumo com métricas de *Total de Vendas (90 dias)*, *Novos Clientes (30 dias)*, *Pedidos Hoje* e *Total de Pedidos (30 dias)*.
- 📈 **Gráfico Comparativo de Vendas (`ChartOverview`):** Gráfico de barras interativo com Recharts comparando vendas mensais entre canais **Desktop** e **Mobile**, com *tooltips* e legenda dinâmica.
- 👥 **Monitoramento de Últimos Clientes (`Sales`):** Listagem das conversões recentes das últimas 24 horas com avatar, e-mail, plano contratado e valor recebido.
- 🔐 **Autenticação e Controle de Sessão (`/login`):**
  - Login funcional com validação de credenciais e persistência em cookie (`dashboard_session`).
  - Seleção rápida de **3 perfis de demonstração** (*Administrador*, *Gerente Comercial* e *Analista de Vendas*) com 1 clique.
  - Menu do usuário autenticado no topo com troca rápida de perfil e botão de *Logout*.
- 🛍️ **Gestão de Pedidos (`/pedidos`):** Tabela completa com filtro instantâneo por status (*Pago*, *Em separação*, *Pendente*, *Cancelado*) e busca por código, cliente ou produto.
- 📦 **Catálogo de Produtos (`/produtos`):** Listagem de produtos e planos SaaS com busca por SKU, categoria, preço e controle visual de estoque (*Ativo*, *Estoque Baixo*, *Esgotado*).
- 📇 **Carteira de Clientes (`/clientes`):** Consulta de clientes com histórico de pedidos, faturamento acumulado, empresa e classificação de perfil (*VIP*, *Ativo*, *Novo*).
- ⚙️ **Configurações e Diagnóstico (`/configuracoes`):** Exibição detalhada do usuário logado, nível de permissão ativo e atalho para alternância de conta.
- 📱 **Navegação Responsiva (Desktop & Mobile):** Sidebar fixa com *tooltips* em telas maiores e menu lateral deslizante (*Sheet/Drawer*) para dispositivos móveis.

---

## 🎯 Sobre o Projeto

Sistema desenvolvido demonstrando boas práticas de desenvolvimento, arquitetura limpa e organização de código, com foco em escalabilidade e manutenção.

---

## 📸 Preview do Projeto

🚧 Preview não disponível no projeto.

---

## 📁 Documentação do Projeto

O repositório conta com documentação completa de execução e testes na pasta [`docs/`](./docs):

- 📘 **[`docs/COMO_EXECUTAR.md`](./docs/COMO_EXECUTAR.md):** Guia rápido de decisão entre ambiente Local e Docker, tabela de URLs e acessos demo.
- 📗 **[`docs/COMO_EXECUTAR_LOCAL.md`](./docs/COMO_EXECUTAR_LOCAL.md):** Passo a passo detalhado para execução local com Node.js/Laragon.
- 🐳 **[`docs/COMO_EXECUTAR_DOCKER.md`](./docs/COMO_EXECUTAR_DOCKER.md):** Guia completo da stack containerizada (`nginx`, `app`, `mysql`, `phpmyadmin`).
- 🔐 **[`docs/ACESSOS_TESTES.md`](./docs/ACESSOS_TESTES.md):** Credenciais de teste dos perfis *Administrador*, *Gerente Comercial* e *Analista de Vendas*, rotas e validação de saúde.

### 🔌 Rotas de API Internas

| Método | Endpoint | Descrição |
| :---: | :--- | :--- |
| `GET` | `/api/health` | Verificação de saúde (Healthcheck) do container e status do runtime |
| `POST` | `/api/auth/login` | Autenticação de usuário e emissão do cookie de sessão |
| `POST` | `/api/auth/logout` | Encerramento da sessão ativa |
| `GET` | `/api/auth/session` | Retorno dos dados do perfil autenticado |

---

## 💻 Comandos

### Execução Local (Node.js):

```bash
cp .env.example .env
npm install
npm run dev
```

Build de produção local:

```bash
npm run build
npm run start
```

### Execução com Docker:

```bash
cp .env.example .env
docker compose up -d --build
```

> ⚠️ Estes são comandos básicos. Verifique no projeto arquivos como:
> README.md, COMO_EXECUTAR.md ou docs/ para instruções completas.

---

## 🧱 Estrutura do Projeto

```text
dashboard-nextjs-shadcnui/
├── docker/
│   ├── nginx/
│   │   └── default.conf          # Proxy reverso Nginx otimizado (gzip, cache estático e DNS dinâmico)
│   └── scripts/
│       └── start-app.sh          # Script de bootstrap e aquecimento de rotas (cold start zero)
├── docs/
│   ├── ACESSOS_TESTES.md         # Credenciais e perfis de teste
│   ├── COMO_EXECUTAR.md          # Índice geral de execução
│   ├── COMO_EXECUTAR_DOCKER.md   # Guia de execução via Docker Compose
│   └── COMO_EXECUTAR_LOCAL.md    # Guia de execução local
├── public/                       # Assets estáticos públicos
├── src/
│   ├── app/
│   │   ├── api/                  # Rotas de API (autenticação e healthcheck)
│   │   ├── clientes/             # Página de Carteira de Clientes
│   │   ├── configuracoes/        # Página de Configurações e Sessão
│   │   ├── login/                # Página de Login com perfis de demonstração
│   │   ├── pedidos/              # Página de Gestão de Pedidos
│   │   ├── produtos/             # Página de Catálogo de Produtos
│   │   ├── globals.css           # Variáveis de tema e diretivas Tailwind CSS
│   │   ├── layout.tsx            # Root Layout com fonte Inter e Sidebar
│   │   └── page.tsx              # Dashboard principal (KPIs, Gráfico e Últimos Clientes)
│   ├── components/
│   │   ├── chart/                # Componente ChartOverview (Recharts)
│   │   ├── sales/                # Componente Sales (Últimos clientes)
│   │   └── ui/                   # Componentes base do Shadcn UI e Sidebar
│   ├── lib/
│   │   ├── auth.ts               # Usuários de teste (Seeders) e gestão de sessão
│   │   ├── mock-data.ts          # Dados estruturados de vendas, pedidos, produtos e clientes
│   │   └── utils.ts              # Utilitário cn() (clsx + tailwind-merge)
│   └── middleware.ts             # Middleware de sessão e cabeçalhos de segurança
├── .dockerignore                 # Exclusões de contexto do Docker
├── .env.example                  # Template de variáveis de ambiente (blocos LOCAL e DOCKER)
├── Dockerfile                    # Build multi-stage Node 20 Alpine (Standalone)
├── docker-compose.yml            # Orquestração dos serviços app, nginx, mysql e phpmyadmin
├── next.config.mjs               # Configuração do Next.js (output standalone)
├── package.json                  # Dependências e scripts NPM
└── tailwind.config.ts            # Configuração do Design System no Tailwind CSS
```

---

## 📝 Melhorias Futuras

- [ ] Persistência dos pedidos e produtos diretamente no container MySQL via Prisma ORM ou Drizzle
- [ ] Exportação de relatórios de vendas em formato CSV e PDF
- [ ] Alternância de tema Claro/Escuro (*Dark Mode*) persistida nas preferências do usuário
- [ ] Filtros de intervalo de datas customizado nos gráficos do Dashboard

---

## 🖋️ Dicas

- **Ordenação automática de classes Tailwind CSS:** Adicione o plugin `prettier-plugin-tailwindcss` no arquivo `.prettierrc` na raiz do projeto (`{ "plugins": ["prettier-plugin-tailwindcss"] }`) conforme documentado em [`Anotacao.txt`](./Anotacao.txt).
- **Teste de responsividade Mobile:** Utilize o modo responsivo do DevTools ou a extensão *Mobile Simulator* para validar o menu gaveta (*Sheet*) em telas menores que `640px`.

---

## 📄 Finalização

<div align="center">

Feito com ❤️ por Gabriel Martins 🚀

</div>
