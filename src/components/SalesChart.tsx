import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const salesData = [
  { categoria: "Eletrônicos", total_vendas: 125000 },
  { categoria: "Roupas", total_vendas: 98000 },
  { categoria: "Casa & Jardim", total_vendas: 87000 },
  { categoria: "Esportes", total_vendas: 76000 },
  { categoria: "Livros", total_vendas: 54000 },
  { categoria: "Beleza", total_vendas: 45000 },
  { categoria: "Brinquedos", total_vendas: 32000 },
];

export function SalesChart() {
  return (
    <Card className="p-6 bg-dashboard-card border-border/50">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-foreground">Vendas por Categoria</h3>
        <p className="text-sm text-muted-foreground">Dados de vendas desde Janeiro 2024</p>
      </div>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={salesData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="categoria" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickFormatter={(value) => `R$ ${(value / 1000).toFixed(0)}k`}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: "hsl(var(--dashboard-card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
                color: "hsl(var(--foreground))"
              }}
              formatter={(value: number) => [`R$ ${value.toLocaleString()}`, "Vendas"]}
            />
            <Bar 
              dataKey="total_vendas" 
              fill="hsl(var(--primary))"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}