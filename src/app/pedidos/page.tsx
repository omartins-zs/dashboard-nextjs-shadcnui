"use client";

import { useState } from "react";
import { Search, ShoppingBag } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ORDERS_DATA, OrderItem } from "@/lib/mock-data";

const STATUS_STYLES: Record<OrderItem["status"], string> = {
  Pago: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Pendente: "bg-amber-50 text-amber-700 border-amber-200",
  "Em separação": "bg-blue-50 text-blue-700 border-blue-200",
  Cancelado: "bg-red-50 text-red-700 border-red-200",
};

export default function PedidosPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("Todos");

  const filteredOrders = ORDERS_DATA.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(search.toLowerCase()) ||
      order.customer.toLowerCase().includes(search.toLowerCase()) ||
      order.product.toLowerCase().includes(search.toLowerCase());
    const matchesStatus =
      statusFilter === "Todos" || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <main className="sm:ml-14 p-4 space-y-4">
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <CardTitle className="text-lg sm:text-xl flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-primary" />
                Gestão de Pedidos
              </CardTitle>
              <CardDescription>
                Acompanhe e filtre todos os pedidos realizados na plataforma
              </CardDescription>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {["Todos", "Pago", "Em separação", "Pendente", "Cancelado"].map(
                (status) => (
                  <Button
                    key={status}
                    size="sm"
                    variant={statusFilter === status ? "default" : "outline"}
                    onClick={() => setStatusFilter(status)}
                  >
                    {status}
                  </Button>
                )
              )}
            </div>
          </div>

          <div className="relative mt-3 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar por código, cliente ou produto..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
        </CardHeader>

        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs uppercase text-muted-foreground border-b">
                <tr>
                  <th className="py-3 px-2">Pedido</th>
                  <th className="py-3 px-2">Cliente</th>
                  <th className="py-3 px-2">Produto / Serviço</th>
                  <th className="py-3 px-2">Canal</th>
                  <th className="py-3 px-2">Data</th>
                  <th className="py-3 px-2">Valor</th>
                  <th className="py-3 px-2">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-muted/40">
                    <td className="py-3 px-2 font-mono font-semibold">
                      {order.id}
                    </td>
                    <td className="py-3 px-2">
                      <p className="font-medium">{order.customer}</p>
                      <span className="text-xs text-muted-foreground">
                        {order.email}
                      </span>
                    </td>
                    <td className="py-3 px-2">{order.product}</td>
                    <td className="py-3 px-2">{order.channel}</td>
                    <td className="py-3 px-2 text-muted-foreground">
                      {order.date}
                    </td>
                    <td className="py-3 px-2 font-semibold">{order.amount}</td>
                    <td className="py-3 px-2">
                      <span
                        className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${
                          STATUS_STYLES[order.status]
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
                {filteredOrders.length === 0 && (
                  <tr>
                    <td
                      colSpan={7}
                      className="py-6 text-center text-muted-foreground"
                    >
                      Nenhum pedido encontrado para os filtros aplicados.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
