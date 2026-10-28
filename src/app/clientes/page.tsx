"use client";

import { useState } from "react";
import { Search, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CUSTOMERS_DATA } from "@/lib/mock-data";

export default function ClientesPage() {
  const [search, setSearch] = useState("");

  const filteredCustomers = CUSTOMERS_DATA.filter(
    (customer) =>
      customer.name.toLowerCase().includes(search.toLowerCase()) ||
      customer.email.toLowerCase().includes(search.toLowerCase()) ||
      customer.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="sm:ml-14 p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            Carteira de Clientes
          </CardTitle>
          <CardDescription>
            Visualize os clientes cadastrados, volume de pedidos e faturamento acumulado
          </CardDescription>

          <div className="relative mt-3 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar cliente por nome, e-mail ou empresa..."
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
                  <th className="py-3 px-2">Cliente</th>
                  <th className="py-3 px-2">Empresa</th>
                  <th className="py-3 px-2">Pedidos</th>
                  <th className="py-3 px-2">Total Investido</th>
                  <th className="py-3 px-2">Última Compra</th>
                  <th className="py-3 px-2">Perfil</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {filteredCustomers.map((customer) => (
                  <tr key={customer.id} className="hover:bg-muted/40">
                    <td className="py-3 px-2">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage
                            src={customer.avatar}
                            alt={customer.name}
                          />
                          <AvatarFallback>{customer.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{customer.name}</p>
                          <span className="text-xs text-muted-foreground">
                            {customer.email}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-2">{customer.company}</td>
                    <td className="py-3 px-2">{customer.totalOrders}</td>
                    <td className="py-3 px-2 font-semibold">
                      {customer.totalSpent}
                    </td>
                    <td className="py-3 px-2 text-muted-foreground">
                      {customer.lastOrder}
                    </td>
                    <td className="py-3 px-2">
                      <span className="inline-flex items-center rounded-full border border-border bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                        {customer.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
