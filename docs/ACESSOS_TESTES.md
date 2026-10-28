# 🔐 Acessos e Dados de Teste

Utilize as credenciais abaixo para testar as diferentes visões e permissões do sistema. Todos os usuários e registros foram gerados automaticamente via *Seeders* (`src/lib/auth.ts` e `src/lib/mock-data.ts`).

## 1. Acesso ao Sistema (Usuários de Teste)

| Perfil | E-mail / Usuário | Senha | Permissão / Detalhes |
| --- | --- | --- | --- |
| Administrador | `admin@dashboard.com` | `Password@123` | Acesso total ao dashboard, relatórios financeiros, pedidos, produtos, clientes e configurações do sistema. |
| Gerente Comercial | `gerente@dashboard.com` | `Password@123` | Acesso ao monitoramento de KPIs comerciais, gestão de pedidos, catálogo de produtos e carteira de clientes. |
| Analista de Vendas | `vendedor@dashboard.com` | `Password@123` | Consulta de pedidos do dia, acompanhamento de metas mensais e visualização de novos clientes. |

## 2. URLs Principais

| Ambiente | Aplicação (Home) | Login / Painel |
| --- | --- | --- |
| **Docker** | `http://localhost:8080` | `http://localhost:8080/login` |
| **Local** (`npm run dev`) | `http://localhost:3000` | `http://localhost:3000/login` |

## 3. Vitrine Pública / Páginas para Clientes

| Item | Link (Exemplo Docker) |
| --- | --- |
| Dashboard Principal (KPIs e Gráficos) | `http://localhost:8080/` |
| Tela de Login e Seleção de Perfis | `http://localhost:8080/login` |
| Gestão de Pedidos | `http://localhost:8080/pedidos` |
| Catálogo de Produtos e Planos | `http://localhost:8080/produtos` |
| Carteira de Clientes | `http://localhost:8080/clientes` |
| Configurações e Sessão Ativa | `http://localhost:8080/configuracoes` |
| Healthcheck da Aplicação (JSON) | `http://localhost:8080/api/health` |

## 4. Validação do Acesso

Validação da saúde da aplicação no ambiente de desenvolvimento:

| Verificação | Resultado Esperado |
| --- | --- |
| Containers (`mysql`, `app`, `nginx`, `phpmyadmin`) | Saudáveis / Rodando |
| Tela de login principal | HTTP `200` |
| Login com usuário de teste gerado pelo seeder | Redirecionamento para Dashboard/Painel |

## 5. Carregar Dados de Teste

Caso o ambiente precise ser reiniciado ou reconstruído do zero com todos os dados e credenciais iniciais da plataforma, basta rodar os comandos abaixo.

**Com Docker:**
```bash
docker compose down -v
docker compose up -d --build
```

**Rodando Localmente (Sem Docker):**
```bash
npm install
npm run dev
```

---

### 📝 Observações:
- O sistema já é alimentado com registros retroativos e informações simuladas vinculadas a esses usuários para facilitar a visualização, filtragem nas telas de pedidos/produtos/clientes e validação dos fluxos.
- Use estas credenciais **apenas** em ambiente local ou Docker de desenvolvimento.
