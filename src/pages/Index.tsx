import { MetricCard } from "@/components/MetricCard";
import { SalesChart } from "@/components/SalesChart";
import { RevenueChart } from "@/components/RevenueChart";
import { TopProducts } from "@/components/TopProducts";
import { ThemeToggle } from "@/components/ThemeToggle";
import { BarChart3, DollarSign, ShoppingCart, TrendingUp, Users, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-dashboard-bg">
      {/* Header */}
      <header className="border-b border-border/50 bg-dashboard-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <Zap className="w-8 h-8 text-primary" />
                <div>
                  <h1 className="text-2xl font-bold text-foreground">Flex Studio</h1>
                  <p className="text-muted-foreground">Dashboard Analytics & Gerenciamento</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Último update</p>
                <p className="text-sm font-medium text-foreground">
                  {new Date().toLocaleDateString('pt-BR')}
                </p>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Receita Total"
            value="R$ 2.1M"
            change="+12.5%"
            isPositive={true}
            icon={<DollarSign className="w-6 h-6 text-primary" />}
          />
          <MetricCard
            title="Vendas Este Mês"
            value="1,847"
            change="+8.3%"
            isPositive={true}
            icon={<ShoppingCart className="w-6 h-6 text-primary" />}
          />
          <MetricCard
            title="Clientes Ativos"
            value="3,256"
            change="+15.2%"
            isPositive={true}
            icon={<Users className="w-6 h-6 text-primary" />}
          />
          <MetricCard
            title="Taxa de Conversão"
            value="3.8%"
            change="-2.1%"
            isPositive={false}
            icon={<TrendingUp className="w-6 h-6 text-primary" />}
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <SalesChart />
          <RevenueChart />
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <TopProducts />
          </div>
          <div className="space-y-6">
            <MetricCard
              title="Produtos em Estoque"
              value="12,847"
              change="+2.4%"
              isPositive={true}
              icon={<BarChart3 className="w-6 h-6 text-primary" />}
            />
            <div className="bg-dashboard-card p-6 rounded-lg border border-border/50">
              <h3 className="text-lg font-semibold text-foreground mb-4">Alertas</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-dashboard-warning/10 border border-dashboard-warning/20">
                  <div className="w-2 h-2 rounded-full bg-dashboard-warning"></div>
                  <p className="text-sm text-foreground">5 produtos com estoque baixo</p>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-dashboard-success/10 border border-dashboard-success/20">
                  <div className="w-2 h-2 rounded-full bg-dashboard-success"></div>
                  <p className="text-sm text-foreground">Meta mensal atingida</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
