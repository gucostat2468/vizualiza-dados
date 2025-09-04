import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const topProducts = [
  { id: 1, name: "iPhone 15 Pro", categoria: "Eletrônicos", vendas: 245, receita: 294000 },
  { id: 2, name: "Nike Air Max", categoria: "Esportes", vendas: 189, receita: 151200 },
  { id: 3, name: "MacBook Pro M3", categoria: "Eletrônicos", vendas: 156, receita: 624000 },
  { id: 4, name: "Samsung TV 55\"", categoria: "Eletrônicos", vendas: 134, receita: 267800 },
  { id: 5, name: "Sofá Premium", categoria: "Casa & Jardim", vendas: 98, receita: 196000 },
];

export function TopProducts() {
  return (
    <Card className="p-6 bg-dashboard-card border-border/50">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-foreground">Top Produtos</h3>
        <p className="text-sm text-muted-foreground">Produtos mais vendidos este mês</p>
      </div>
      <div className="space-y-4">
        {topProducts.map((product, index) => (
          <div key={product.id} className="flex items-center justify-between p-3 rounded-lg bg-background/5 hover:bg-background/10 transition-colors">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-semibold text-sm">
                {index + 1}
              </div>
              <div>
                <p className="font-medium text-foreground">{product.name}</p>
                <Badge variant="secondary" className="text-xs">
                  {product.categoria}
                </Badge>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-foreground">
                R$ {product.receita.toLocaleString()}
              </p>
              <p className="text-sm text-muted-foreground">
                {product.vendas} vendas
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}