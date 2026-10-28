"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import {
  AlertCircle,
  CheckCircle2,
  Eye,
  EyeOff,
  KeyRound,
  Lock,
  Mail,
  Package,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { DEMO_USERS, DemoUser } from "@/lib/auth";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("admin@dashboard.com");
  const [password, setPassword] = useState("Password@123");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSuccess(null);
    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok || !data?.ok) {
        setError(
          data?.message ||
            "Não foi possível autenticar. Verifique suas credenciais."
        );
        setIsLoading(false);
        return;
      }

      if (typeof window !== "undefined" && data.user) {
        window.localStorage.setItem(
          "dashboard_user",
          JSON.stringify(data.user)
        );
      }

      setSuccess(`Bem-vindo(a), ${data.user.name}! Redirecionando...`);
      router.push(data.redirectTo || "/");
      router.refresh();
    } catch {
      setError(
        "Falha de comunicação com o servidor de autenticação. Tente novamente."
      );
      setIsLoading(false);
    }
  }

  function handleSelectDemoUser(user: DemoUser) {
    setEmail(user.email);
    setPassword(user.password);
    setError(null);
    setSuccess(null);
  }

  return (
    <main className="min-h-screen w-full bg-muted/40 flex flex-col justify-center items-center p-4 sm:p-6">
      <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <Card className="lg:col-span-7 shadow-sm border-border">
          <CardHeader className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Package className="h-5 w-5" />
              </div>
              <div>
                <CardTitle className="text-xl sm:text-2xl font-bold">
                  Acessar Painel
                </CardTitle>
                <CardDescription>
                  Entre com suas credenciais para gerenciar vendas, pedidos e clientes
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div
                  role="alert"
                  className="flex items-start gap-2 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700"
                >
                  <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                  <span>{error}</span>
                </div>
              )}

              {success && (
                <div
                  role="status"
                  className="flex items-start gap-2 rounded-md border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-700"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
                  <span>{success}</span>
                </div>
              )}

              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-foreground flex items-center gap-1.5"
                >
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  E-mail ou Usuário
                </label>
                <Input
                  id="email"
                  name="email"
                  type="text"
                  autoComplete="username"
                  placeholder="admin@dashboard.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-foreground flex items-center gap-1.5"
                >
                  <Lock className="h-4 w-4 text-muted-foreground" />
                  Senha
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    aria-label={
                      showPassword ? "Ocultar senha" : "Mostrar senha"
                    }
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? "Autenticando..." : "Entrar no Dashboard"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="lg:col-span-5 shadow-sm border-border bg-card flex flex-col justify-between">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <KeyRound className="h-4 w-4 text-primary" />
              <CardTitle className="text-base font-semibold">
                Credenciais de Demonstração
              </CardTitle>
            </div>
            <CardDescription className="text-xs">
              Clique em um perfil abaixo para preencher automaticamente os dados de acesso:
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-2.5">
            {DEMO_USERS.map((demo) => {
              const isSelected = email.toLowerCase() === demo.email.toLowerCase();
              return (
                <button
                  key={demo.id}
                  type="button"
                  onClick={() => handleSelectDemoUser(demo)}
                  className={`w-full text-left rounded-lg border p-3 transition-colors ${
                    isSelected
                      ? "border-primary bg-primary/5"
                      : "border-border hover:bg-muted/60"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wide text-primary flex items-center gap-1">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      {demo.role}
                    </span>
                    <span className="text-[11px] font-mono text-muted-foreground">
                      {demo.password}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-foreground mt-1">
                    {demo.name}
                  </p>
                  <p className="text-xs text-muted-foreground font-mono">
                    {demo.email}
                  </p>
                </button>
              );
            })}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
