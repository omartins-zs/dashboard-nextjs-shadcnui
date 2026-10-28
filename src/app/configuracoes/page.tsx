"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle2, Settings2, ShieldCheck, UserCheck } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DEMO_USERS, SessionUser } from "@/lib/auth";

export default function ConfiguracoesPage() {
  const [currentUser, setCurrentUser] = useState<SessionUser>({
    id: DEMO_USERS[0].id,
    name: DEMO_USERS[0].name,
    username: DEMO_USERS[0].username,
    email: DEMO_USERS[0].email,
    role: DEMO_USERS[0].role,
    avatar: DEMO_USERS[0].avatar,
    permissions: DEMO_USERS[0].permissions,
  });

  useEffect(() => {
    async function fetchSession() {
      try {
        const res = await fetch("/api/auth/session", { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          if (data?.user) {
            setCurrentUser(data.user);
          }
        }
      } catch {
        // Fallback padrão
      }
    }
    fetchSession();
  }, []);

  return (
    <main className="sm:ml-14 p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl flex items-center gap-2">
            <Settings2 className="h-5 w-5 text-primary" />
            Configurações do Sistema e Sessão Ativa
          </CardTitle>
          <CardDescription>
            Informações do perfil autenticado e parâmetros de ambiente da aplicação
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="rounded-lg border p-4 bg-muted/30 space-y-2">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-base">
                  Usuário Autenticado: {currentUser.name}
                </h3>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-0.5 text-xs font-medium text-emerald-700">
                <CheckCircle2 className="h-3.5 w-3.5" />
                {currentUser.role}
              </span>
            </div>

            <p className="text-sm text-muted-foreground">
              E-mail: <span className="font-mono text-foreground">{currentUser.email}</span>{" "}
              | Usuário: <span className="font-mono text-foreground">@{currentUser.username}</span>
            </p>
            <p className="text-sm text-muted-foreground">
              Permissões: {currentUser.permissions}
            </p>

            <div className="pt-2">
              <Button asChild variant="outline" size="sm">
                <Link href="/login">
                  <UserCheck className="mr-2 h-4 w-4" />
                  Alternar Usuário na Tela de Login
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
