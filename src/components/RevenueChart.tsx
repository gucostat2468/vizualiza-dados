import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const revenueData = [
  { mes: "Jan", receita: 98000, meta: 100000 },
  { mes: "Fev", receita: 112000, meta: 105000 },
  { mes: "Mar", receita: 125000, meta: 110000 },
  { mes: "Abr", receita: 108000, meta: 115000 },
  { mes: "Mai", receita: 142000, meta: 120000 },
  { mes: "Jun", receita: 156000, meta: 125000 },
  { mes: "Jul", receita: 178000, meta: 130000 },
  { mes: "Ago", receita: 165000, meta: 135000 },
  { mes: "Set", receita: 189000, meta: 140000 },
  { mes: "Out", receita: 203000, meta: 145000 },
  { mes: "Nov", receita: 218000, meta: 150000 },
  { mes: "Dez", receita: 234000, meta: 155000 },
];

export function RevenueChart() {
  return (
    <Card className="p-6 bg-dashboard-card border-border/50">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-foreground">Receita Mensal</h3>
        <p className="text-sm text-muted-foreground">Comparação receita vs meta 2024</p>
      </div>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={revenueData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="mes" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
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
              formatter={(value: number, name: string) => [
                `R$ ${value.toLocaleString()}`, 
                name === "receita" ? "Receita" : "Meta"
              ]}
            />
            <Line 
              type="monotone" 
              dataKey="receita" 
              stroke="hsl(var(--primary))" 
              strokeWidth={3}
              dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="meta" 
              stroke="hsl(var(--dashboard-success))" 
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ fill: "hsl(var(--dashboard-success))", strokeWidth: 2, r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}