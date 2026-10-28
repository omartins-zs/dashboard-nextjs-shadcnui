import { CircleDollarSign } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RECENT_SALES } from "@/lib/mock-data";

export function Sales() {
  return (
    <Card className="flex-1">
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
            Últimos clientes
          </CardTitle>
          <CircleDollarSign className="ml-auto w-4 h-4 text-muted-foreground" />
        </div>
        <CardDescription>
          Novos clientes e conversões nas últimas 24 horas
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-1">
        {RECENT_SALES.map((sale) => (
          <article
            key={sale.id}
            className="flex items-center justify-between gap-3 border-b last:border-b-0 py-2.5"
          >
            <div className="flex items-center gap-3 min-w-0">
              <Avatar className="w-9 h-9">
                <AvatarImage src={sale.avatar} alt={sale.name} />
                <AvatarFallback>{sale.initials}</AvatarFallback>
              </Avatar>
              <div className="min-w-0">
                <p className="text-sm sm:text-base font-semibold truncate">
                  {sale.name}
                </p>
                <span className="block text-[12px] sm:text-xs text-muted-foreground truncate">
                  {sale.email}
                </span>
              </div>
            </div>

            <div className="text-right shrink-0">
              <p className="text-sm font-semibold text-emerald-600">
                {sale.amount}
              </p>
              <span className="text-[11px] text-muted-foreground">
                {sale.plan}
              </span>
            </div>
          </article>
        ))}
      </CardContent>
    </Card>
  );
}
