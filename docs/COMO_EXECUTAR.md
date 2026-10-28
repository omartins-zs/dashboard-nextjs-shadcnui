# Como Executar — Dashboard Next.js Shadcn UI

Escolha **um** guia conforme seu ambiente:

| Guia | Quando usar | Requisitos no PC |
| --- | --- | --- |
| **[COMO_EXECUTAR_DOCKER.md](COMO_EXECUTAR_DOCKER.md)** | Executar em qualquer máquina com containers | Docker Desktop |
| **[COMO_EXECUTAR_LOCAL.md](COMO_EXECUTAR_LOCAL.md)** | Desenvolver localmente com Node.js ou Laragon | Node.js, NPM e MySQL (opcional) |
| **[ACESSOS_TESTES.md](ACESSOS_TESTES.md)** | Logins, URLs e fluxos de teste | Navegador Web |

---

## Início rápido

### Local — Node.js / Laragon

Ative o bloco `LOCAL` no `.env` e execute:

```bash
cp .env.example .env
npm install
npm run dev
```

Para gerar o build de produção localmente:

```bash
npm run build
npm run start
```

Aplicação:

http://localhost:3000

### Docker

Ative o bloco `DOCKER` no `.env` e execute:

```bash
cp .env.example .env
docker compose up -d --build
```

Aplicação:

http://localhost:8080

---

## Logins demo

| Perfil | E-mail | Senha |
| --- | --- | --- |
| Administrador | `admin@dashboard.com` | `Password@123` |
| Gerente Comercial | `gerente@dashboard.com` | `Password@123` |
| Analista de Vendas | `vendedor@dashboard.com` | `Password@123` |

---

## URLs principais

| Área | Local | Docker |
| --- | --- | --- |
| Página inicial (Dashboard) | http://localhost:3000 | http://localhost:8080 |
| Login | http://localhost:3000/login | http://localhost:8080/login |
| Gestão de Pedidos | http://localhost:3000/pedidos | http://localhost:8080/pedidos |
| Catálogo de Produtos | http://localhost:3000/produtos | http://localhost:8080/produtos |
| Carteira de Clientes | http://localhost:3000/clientes | http://localhost:8080/clientes |
| Configurações | http://localhost:3000/configuracoes | http://localhost:8080/configuracoes |
| Healthcheck API | http://localhost:3000/api/health | http://localhost:8080/api/health |
| PHPMyAdmin | — | http://localhost:8085 |

---

## Outros documentos

- [COMO_EXECUTAR_LOCAL.md](COMO_EXECUTAR_LOCAL.md) — Guia detalhado para execução local
- [COMO_EXECUTAR_DOCKER.md](COMO_EXECUTAR_DOCKER.md) — Guia detalhado para execução com Docker
- [ACESSOS_TESTES.md](ACESSOS_TESTES.md) — Credenciais e fluxos de teste
