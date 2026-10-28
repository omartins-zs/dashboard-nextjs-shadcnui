import { NextResponse } from "next/server";
import {
  authenticateUser,
  encodeSession,
  SESSION_COOKIE_NAME,
} from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = typeof body?.email === "string" ? body.email : "";
    const password = typeof body?.password === "string" ? body.password : "";

    if (!email.trim() || !password) {
      return NextResponse.json(
        {
          ok: false,
          message: "Informe o e-mail (ou usuário) e a senha para continuar.",
        },
        { status: 400 }
      );
    }

    const user = authenticateUser(email, password);

    if (!user) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "Credenciais inválidas. Verifique o e-mail e a senha ou utilize um dos acessos de demonstração.",
        },
        { status: 401 }
      );
    }

    const token = encodeSession(user);
    const response = NextResponse.json({
      ok: true,
      user,
      redirectTo: "/",
    });

    response.cookies.set({
      name: SESSION_COOKIE_NAME,
      value: token,
      httpOnly: false,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 dias
    });

    return response;
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: "Erro ao processar a autenticação. Tente novamente.",
      },
      { status: 500 }
    );
  }
}
