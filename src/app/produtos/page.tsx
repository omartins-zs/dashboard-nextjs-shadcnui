"use client";

import { useState } from "react";
import { Package, Search } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PRODUCTS_DATA, ProductItem } from "@/lib/mock-data";

const PRODUCT_BADGE: Record<ProductItem["status"], string> = {
  Ativo: "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Estoque Baixo": "bg-amber-50 text-amber-700 border-amber-200",
  Esgotado: "bg-red-50 text-red-700 border-red-200",
};

export default function ProdutosPage() {
  const [search, setSearch] = useState("");

  const filteredProducts = PRODUCTS_DATA.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.sku.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="sm:ml-14 p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl flex items-center gap-2">
            <Package className="h-5 w-5 text-primary" />
            Catálogo de Produtos e Planos
          </CardTitle>
          <CardDescription>
            Controle de disponibilidade, preços e SKUs ativos no sistema
          </CardDescription>

          <div className="relative mt-3 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar por nome, SKU ou categoria..."
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
                  <th className="py-3 px-2">Código</th>
                  <th className="py-3 px-2">Produto</th>
                  <th className="py-3 px-2">SKU</th>
                  <th className="py-3 px-2">Categoria</th>
                  <th className="py-3 px-2">Preço</th>
                  <th className="py-3 px-2">Licenças / Estoque</th>
                  <th className="py-3 px-2">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-muted/40">
                    <td className="py-3 px-2 font-mono font-semibold">
                      {product.id}
                    </td>
                    <td className="py-3 px-2 font-medium">{product.name}</td>
                    <td className="py-3 px-2 font-mono text-xs text-muted-foreground">
                      {product.sku}
                    </td>
                    <td className="py-3 px-2">{product.category}</td>
                    <td className="py-3 px-2 font-semibold">{product.price}</td>
                    <td className="py-3 px-2">{product.stock}</td>
                    <td className="py-3 px-2">
                      <span
                        className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${
                          PRODUCT_BADGE[product.status]
                        }`}
                      >
                        {product.status}
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
