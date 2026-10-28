export interface CustomerSale {
  id: string;
  name: string;
  username: string;
  email: string;
  avatar: string;
  initials: string;
  amount: string;
  plan: string;
  timeAgo: string;
}

export interface OrderItem {
  id: string;
  customer: string;
  email: string;
  product: string;
  date: string;
  amount: string;
  status: "Pago" | "Pendente" | "Em separação" | "Cancelado";
  channel: "Desktop" | "Mobile";
}

export interface ProductItem {
  id: string;
  name: string;
  sku: string;
  category: string;
  price: string;
  stock: number;
  status: "Ativo" | "Estoque Baixo" | "Esgotado";
}

export interface CustomerRecord {
  id: string;
  name: string;
  email: string;
  company: string;
  totalOrders: number;
  totalSpent: string;
  lastOrder: string;
  status: "Ativo" | "Novo" | "VIP";
  avatar: string;
  initials: string;
}

export const RECENT_SALES: CustomerSale[] = [
  {
    id: "sale-01",
    name: "Gabriel Martins",
    username: "omartins-zs",
    email: "gabrielmatheus209@gmail.com",
    avatar: "https://github.com/omartins-zs.png",
    initials: "GM",
    amount: "+ R$ 1.850,00",
    plan: "Plano Enterprise",
    timeAgo: "Há 12 minutos",
  },
  {
    id: "sale-02",
    name: "Carolina Mendes",
    username: "cmendes",
    email: "carolina.mendes@empresa.com.br",
    avatar: "https://github.com/shadcn.png",
    initials: "CM",
    amount: "+ R$ 890,00",
    plan: "Licença Pro Anual",
    timeAgo: "Há 45 minutos",
  },
  {
    id: "sale-03",
    name: "Lucas Ferreira",
    username: "lferreira",
    email: "lucas.ferreira@techstore.io",
    avatar: "https://github.com/vercel.png",
    initials: "LF",
    amount: "+ R$ 420,00",
    plan: "Assinatura Business",
    timeAgo: "Há 2 horas",
  },
  {
    id: "sale-04",
    name: "Beatriz Rocha",
    username: "brocha",
    email: "beatriz.rocha@digitalhub.com",
    avatar: "https://github.com/omartins-zs.png",
    initials: "BR",
    amount: "+ R$ 1.290,00",
    plan: "Plano Enterprise",
    timeAgo: "Há 4 horas",
  },
  {
    id: "sale-05",
    name: "Rafael Costa",
    username: "rcosta",
    email: "rafael.costa@cloudlabs.dev",
    avatar: "https://github.com/shadcn.png",
    initials: "RC",
    amount: "+ R$ 640,00",
    plan: "Add-on Analytics",
    timeAgo: "Há 6 horas",
  },
];

export const ORDERS_DATA: OrderItem[] = [
  {
    id: "PED-9041",
    customer: "Gabriel Martins",
    email: "gabrielmatheus209@gmail.com",
    product: "Licença Enterprise SaaS (12 meses)",
    date: "28/10/2026 14:22",
    amount: "R$ 1.850,00",
    status: "Pago",
    channel: "Desktop",
  },
  {
    id: "PED-9040",
    customer: "Carolina Mendes",
    email: "carolina.mendes@empresa.com.br",
    product: "Pacote Analytics Pro + Suporte",
    date: "28/10/2026 13:50",
    amount: "R$ 890,00",
    status: "Pago",
    channel: "Mobile",
  },
  {
    id: "PED-9039",
    customer: "Lucas Ferreira",
    email: "lucas.ferreira@techstore.io",
    product: "Assinatura Business Mensal",
    date: "28/10/2026 11:15",
    amount: "R$ 420,00",
    status: "Em separação",
    channel: "Desktop",
  },
  {
    id: "PED-9038",
    customer: "Beatriz Rocha",
    email: "beatriz.rocha@digitalhub.com",
    product: "Setup Dedicado + Integração API",
    date: "28/10/2026 09:40",
    amount: "R$ 1.290,00",
    status: "Pago",
    channel: "Desktop",
  },
  {
    id: "PED-9037",
    customer: "Rafael Costa",
    email: "rafael.costa@cloudlabs.dev",
    product: "Módulo Relatórios Avançados",
    date: "27/10/2026 18:10",
    amount: "R$ 640,00",
    status: "Pendente",
    channel: "Mobile",
  },
  {
    id: "PED-9036",
    customer: "Fernanda Lima",
    email: "fernanda.lima@studiofx.com.br",
    product: "Plano Starter Equipe (5 usuários)",
    date: "27/10/2026 15:05",
    amount: "R$ 350,00",
    status: "Cancelado",
    channel: "Mobile",
  },
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "PRD-001",
    name: "Licença Enterprise SaaS",
    sku: "SAAS-ENT-2026",
    category: "Assinaturas",
    price: "R$ 1.850,00",
    stock: 95,
    status: "Ativo",
  },
  {
    id: "PRD-002",
    name: "Pacote Analytics Pro",
    sku: "ANL-PRO-2026",
    category: "Módulos",
    price: "R$ 890,00",
    stock: 42,
    status: "Ativo",
  },
  {
    id: "PRD-003",
    name: "Assinatura Business Mensal",
    sku: "SAAS-BUS-01",
    category: "Assinaturas",
    price: "R$ 420,00",
    stock: 120,
    status: "Ativo",
  },
  {
    id: "PRD-004",
    name: "Setup Dedicado + Integração API",
    sku: "SRV-API-SETUP",
    category: "Serviços",
    price: "R$ 1.290,00",
    stock: 8,
    status: "Estoque Baixo",
  },
  {
    id: "PRD-005",
    name: "Módulo Relatórios Avançados",
    sku: "MOD-REP-ADV",
    category: "Módulos",
    price: "R$ 640,00",
    stock: 64,
    status: "Ativo",
  },
  {
    id: "PRD-006",
    name: "Treinamento In-Company (Turma Fechada)",
    sku: "TRN-INC-2026",
    category: "Serviços",
    price: "R$ 2.400,00",
    stock: 0,
    status: "Esgotado",
  },
];

export const CUSTOMERS_DATA: CustomerRecord[] = [
  {
    id: "CLI-101",
    name: "Gabriel Martins",
    email: "gabrielmatheus209@gmail.com",
    company: "Martins Tech Solutions",
    totalOrders: 14,
    totalSpent: "R$ 12.450,00",
    lastOrder: "28/10/2026",
    status: "VIP",
    avatar: "https://github.com/omartins-zs.png",
    initials: "GM",
  },
  {
    id: "CLI-102",
    name: "Carolina Mendes",
    email: "carolina.mendes@empresa.com.br",
    company: "Mendes & Associados",
    totalOrders: 8,
    totalSpent: "R$ 6.320,00",
    lastOrder: "28/10/2026",
    status: "Ativo",
    avatar: "https://github.com/shadcn.png",
    initials: "CM",
  },
  {
    id: "CLI-103",
    name: "Lucas Ferreira",
    email: "lucas.ferreira@techstore.io",
    company: "TechStore Brasil",
    totalOrders: 5,
    totalSpent: "R$ 3.180,00",
    lastOrder: "28/10/2026",
    status: "Ativo",
    avatar: "https://github.com/vercel.png",
    initials: "LF",
  },
  {
    id: "CLI-104",
    name: "Beatriz Rocha",
    email: "beatriz.rocha@digitalhub.com",
    company: "Digital Hub Agency",
    totalOrders: 11,
    totalSpent: "R$ 9.870,00",
    lastOrder: "28/10/2026",
    status: "VIP",
    avatar: "https://github.com/omartins-zs.png",
    initials: "BR",
  },
  {
    id: "CLI-105",
    name: "Rafael Costa",
    email: "rafael.costa@cloudlabs.dev",
    company: "CloudLabs Dev",
    totalOrders: 2,
    totalSpent: "R$ 1.280,00",
    lastOrder: "27/10/2026",
    status: "Novo",
    avatar: "https://github.com/shadcn.png",
    initials: "RC",
  },
];
