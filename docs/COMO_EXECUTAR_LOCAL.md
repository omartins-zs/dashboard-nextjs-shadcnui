# Como Executar Localmente — Dashboard Next.js Shadcn UI

Guia para rodar **sem Docker**, utilizando **Node.js / NPM** e **Laragon** ou **XAMPP**.

> **Não quer instalar Node.js ou configurar ambiente local?** Use [COMO_EXECUTAR_DOCKER.md](COMO_EXECUTAR_DOCKER.md) — basta Docker Desktop, em qualquer Windows, Mac ou Linux.

---

## Requisitos

Para rodar localmente, o essencial é **Node.js** + **NPM** compatíveis — todas as dependências da aplicação (Next.js 14, React 18, Shadcn UI, Tailwind CSS e Recharts) entram no projeto com `npm install`.

| Ferramenta | Obrigatório? | Versão mínima |
| --- | --- | --- |
| **Node.js** | Sim | 18+ |
| **NPM** | Sim | 9+ |
| **MySQL** | Opcional | 8.0+ |

### Ambiente de referência (máquina de desenvolvimento)

Stack usada na elaboração deste projeto — **não é requisito fixo**, só referência do que já foi testado:

| Ferramenta | Versão |
| --- | --- |
| **Laragon** | **6.0.0** |
| PHP (via Laragon) | 8.4.6 |
| Composer | 2.8.12 |
| Laravel (no projeto) | 13.15.0 |
| **Node.js** | **22.14.0+** |
| **NPM** | **11.4.2+** |

Para conferir no seu computador:

```bash
node -v
npm -v
```

---

## 1) Preparar ambiente

### 1.1 Clonar ou acessar o projeto

```bash
cd c:/Projetos/dashboard-nextjs-shadcnui
```

### 1.2 Copiar variáveis de ambiente

```bash
cp .env.example .env
```

No PowerShell:

```powershell
Copy-Item .env.example .env
```

### 1.3 Ativar o ambiente local

Deixe o bloco `LOCAL` ativo e o bloco `DOCKER` comentado no `.env`:

```env
# LOCAL
APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_URL=http://localhost:3000
PORT=3000
HOSTNAME=0.0.0.0

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3307
DB_DATABASE=dashboard_nextjs
DB_USERNAME=root
DB_PASSWORD=

# DOCKER
# APP_URL=http://localhost:8080
# NEXT_PUBLIC_APP_URL=http://localhost:8080
# PORT=3000
# HOSTNAME=0.0.0.0
#
# DB_CONNECTION=mysql
# DB_HOST=mysql
# DB_PORT=3306
# DB_DATABASE=dashboard_nextjs
# DB_USERNAME=dashboard_user
# DB_PASSWORD=dashboard_secret
```

### 1.4 Criar o banco de dados

Crie o banco pelo HeidiSQL, PHPMyAdmin ou execute:

```sql
CREATE DATABASE dashboard_nextjs
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;
```

> No ambiente local, utilizar MySQL na porta **3307**, usuário `root` e senha vazia.

---

## 2) Instalar dependências

```bash
npm install
```

---

## 3) Inicialização e build

Para validar a tipagem e compilar o bundle de produção:

```bash
npm run build
```

---

## 4) Rodar aplicação

Para iniciar em modo de desenvolvimento com Fast Refresh:

```bash
npm run dev
```

Aplicação:

http://localhost:3000

Para iniciar o servidor otimizado de produção (após `npm run build`):

```bash
npm run start
```

---

## 5) Filas e workers

O projeto não exige worker de filas em segundo plano.

---

## 6) Acessos

| Recurso | URL |
| --- | --- |
| Página inicial (Dashboard) | http://localhost:3000 |
| Login | http://localhost:3000/login |
| Gestão de Pedidos | http://localhost:3000/pedidos |
| Catálogo de Produtos | http://localhost:3000/produtos |
| Carteira de Clientes | http://localhost:3000/clientes |
| Configurações | http://localhost:3000/configuracoes |

### Credenciais de teste

```txt
Administrador
URL de login: http://localhost:3000/login
E-mail: admin@dashboard.com
Senha: Password@123
```

```txt
Gerente Comercial
URL de login: http://localhost:3000/login
E-mail: gerente@dashboard.com
Senha: Password@123
```

```txt
Analista de Vendas
URL de login: http://localhost:3000/login
E-mail: vendedor@dashboard.com
Senha: Password@123
```

---

## 7) Comandos úteis

```bash
npm run dev
npm run build
npm run start
npm run lint
```

---

## 8) Problemas comuns

### Porta 3000 já está em uso

Altere a variável `PORT` no `.env` ou encerre o processo que ocupa a porta `3000`.

### Alterações do `.env` não foram aplicadas

Reinicie o servidor de desenvolvimento (`Ctrl + C` e execute `npm run dev` novamente).

### Dependências ou cache do Next.js corrompidos

```bash
rm -rf .next node_modules
npm install
npm run dev
```

---

## Próximo passo

Para ambiente containerizado, consulte [COMO_EXECUTAR_DOCKER.md](COMO_EXECUTAR_DOCKER.md).
