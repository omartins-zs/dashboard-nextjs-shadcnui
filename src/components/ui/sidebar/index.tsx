"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Home,
  LogOut,
  Package,
  PanelBottom,
  Settings2,
  ShoppingBag,
  UserCheck,
  Users,
} from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DEMO_USERS, SessionUser } from "@/lib/auth";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/", label: "Início", icon: Home },
  { href: "/pedidos", label: "Pedidos", icon: ShoppingBag },
  { href: "/produtos", label: "Produtos", icon: Package },
  { href: "/clientes", label: "Clientes", icon: Users },
  { href: "/configuracoes", label: "Configurações", icon: Settings2 },
];

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<SessionUser>({
    id: DEMO_USERS[0].id,
    name: DEMO_USERS[0].name,
    username: DEMO_USERS[0].username,
    email: DEMO_USERS[0].email,
    role: DEMO_USERS[0].role,
    avatar: DEMO_USERS[0].avatar,
    permissions: DEMO_USERS[0].permissions,
  });

  useEffect(() => {
    if (pathname === "/login") return;

    async function loadSession() {
      try {
        const res = await fetch("/api/auth/session", { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          if (data?.user) {
            setUser(data.user);
            return;
          }
        }
      } catch {
        // Fallback para armazenamento local se disponível
      }

      if (typeof window !== "undefined") {
        const stored = window.localStorage.getItem("dashboard_user");
        if (stored) {
          try {
            const parsed = JSON.parse(stored);
            if (parsed?.email) {
              setUser(parsed);
            }
          } catch {
            // Ignora JSON inválido
          }
        }
      }
    }

    loadSession();
  }, [pathname]);

  if (pathname === "/login") {
    return null;
  }

  async function handleLogout() {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } catch {
      // Prossegue com limpeza local mesmo se offline
    }
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("dashboard_user");
    }
    router.push("/login");
    router.refresh();
  }

  const initials = user.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-20 hidden w-14 border-r bg-background sm:flex flex-col">
        <nav className="flex flex-col items-center gap-4 px-2 py-5">
          <TooltipProvider delayDuration={100}>
            <Link
              href="/"
              className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary text-primary-foreground rounded-full"
            >
              <Package className="h-4 w-4" />
              <span className="sr-only">Dashboard Avatar</span>
            </Link>

            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Tooltip key={item.href}>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors",
                        isActive
                          ? "bg-accent text-accent-foreground font-medium"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="sr-only">{item.label}</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">{item.label}</TooltipContent>
                </Tooltip>
              );
            })}
          </TooltipProvider>
        </nav>

        <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-5">
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-red-50 hover:text-red-600"
                >
                  <LogOut className="h-5 w-5 text-red-500" />
                  <span className="sr-only">Sair</span>
                </button>
              </TooltipTrigger>
              <TooltipContent side="right">Sair</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>

      <div className="flex flex-col sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center justify-between px-4 border-b bg-background gap-4 sm:px-6">
          <div className="flex items-center gap-3">
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="outline" className="sm:hidden">
                  <PanelBottom className="w-5 h-5" />
                  <span className="sr-only">Abrir / fechar menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent side="left" className="sm:max-w-xs">
                <SheetHeader className="sr-only">
                  <SheetTitle>Menu de Navegação</SheetTitle>
                  <SheetDescription>
                    Acesse as seções do painel administrativo
                  </SheetDescription>
                </SheetHeader>
                <nav className="grid gap-5 text-base font-medium mt-2">
                  <Link
                    href="/"
                    className="flex h-10 w-10 bg-primary rounded-full text-lg items-center justify-center text-primary-foreground gap-2"
                    prefetch={false}
                  >
                    <Package className="h-5 w-5 transition-all" />
                    <span className="sr-only">Logo do Projeto</span>
                  </Link>

                  {NAV_ITEMS.map((item) => {
                    const Icon = item.icon;
                    const isActive =
                      item.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(item.href);

                    return (
                      <SheetClose asChild key={item.href}>
                        <Link
                          href={item.href}
                          className={cn(
                            "flex items-center gap-4 px-2.5 py-1.5 rounded-md transition-colors",
                            isActive
                              ? "bg-accent text-foreground font-semibold"
                              : "text-muted-foreground hover:text-foreground"
                          )}
                          prefetch={false}
                        >
                          <Icon className="h-5 w-5 transition-all" />
                          {item.label}
                        </Link>
                      </SheetClose>
                    );
                  })}

                  <button
                    type="button"
                    onClick={handleLogout}
                    className="flex items-center gap-4 px-2.5 py-1.5 text-red-600 hover:text-red-700 text-left"
                  >
                    <LogOut className="h-5 w-5" />
                    Sair da conta
                  </button>
                </nav>
              </SheetContent>
            </Sheet>

            <span className="text-sm sm:text-base font-semibold text-foreground">
              Painel Administrativo
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex flex-col items-end text-right">
              <span className="text-xs font-semibold text-foreground leading-none">
                {user.name}
              </span>
              <span className="text-[11px] text-muted-foreground mt-0.5">
                {user.role}
              </span>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-9 w-9 rounded-full"
                >
                  <Avatar className="h-8 w-8 border">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{initials}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {user.name}
                    </p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/configuracoes" className="cursor-pointer">
                    <Settings2 className="mr-2 h-4 w-4" />
                    <span>Configurações</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/login" className="cursor-pointer">
                    <UserCheck className="mr-2 h-4 w-4" />
                    <span>Trocar perfil de teste</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={handleLogout}
                  className="text-red-600 focus:text-red-600 cursor-pointer"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Sair</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
      </div>
    </div>
  );
}
