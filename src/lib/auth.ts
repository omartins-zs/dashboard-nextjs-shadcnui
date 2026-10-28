export interface DemoUser {
  id: string;
  name: string;
  username: string;
  email: string;
  password: string;
  role: "Administrador" | "Gerente Comercial" | "Analista de Vendas";
  avatar: string;
  permissions: string;
}

export interface SessionUser {
  id: string;
  name: string;
  username: string;
  email: string;
  role: DemoUser["role"];
  avatar: string;
  permissions: string;
}

export const SESSION_COOKIE_NAME = "dashboard_session";

export const DEMO_USERS: DemoUser[] = [
  {
    id: "usr-admin-01",
    name: "Gabriel Martins",
    username: "omartins-zs",
    email: "admin@dashboard.com",
    password: "Password@123",
    role: "Administrador",
    avatar: "https://github.com/omartins-zs.png",
    permissions:
      "Acesso total ao dashboard, relatórios financeiros, pedidos, produtos, clientes e configurações do sistema.",
  },
  {
    id: "usr-manager-02",
    name: "Carolina Mendes",
    username: "cmendes",
    email: "gerente@dashboard.com",
    password: "Password@123",
    role: "Gerente Comercial",
    avatar: "https://github.com/shadcn.png",
    permissions:
      "Acesso ao monitoramento de KPIs comerciais, gestão de pedidos, catálogo de produtos e carteira de clientes.",
  },
  {
    id: "usr-sales-03",
    name: "Lucas Ferreira",
    username: "lferreira",
    email: "vendedor@dashboard.com",
    password: "Password@123",
    role: "Analista de Vendas",
    avatar: "https://github.com/vercel.png",
    permissions:
      "Consulta de pedidos do dia, acompanhamento de metas mensais e visualização de novos clientes.",
  },
];

export function authenticateUser(
  emailOrUsername: string,
  password: string
): SessionUser | null {
  const normalized = emailOrUsername.trim().toLowerCase();
  const user = DEMO_USERS.find(
    (u) =>
      (u.email.toLowerCase() === normalized ||
        u.username.toLowerCase() === normalized) &&
      u.password === password
  );

  if (!user) {
    return null;
  }

  return {
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
    role: user.role,
    avatar: user.avatar,
    permissions: user.permissions,
  };
}

export function encodeSession(user: SessionUser): string {
  const payload = JSON.stringify({
    ...user,
    issuedAt: Date.now(),
  });
  return encodeURIComponent(payload);
}

export function decodeSession(token?: string | null): SessionUser | null {
  if (!token) return null;
  try {
    const json = decodeURIComponent(token);
    const parsed = JSON.parse(json);
    if (!parsed || typeof parsed.email !== "string" || typeof parsed.id !== "string") {
      return null;
    }
    return {
      id: parsed.id,
      name: parsed.name,
      username: parsed.username,
      email: parsed.email,
      role: parsed.role,
      avatar: parsed.avatar,
      permissions: parsed.permissions,
    };
  } catch {
    return null;
  }
}
