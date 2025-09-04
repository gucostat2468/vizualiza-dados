import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
}

export function MetricCard({ title, value, change, isPositive, icon }: MetricCardProps) {
  return (
    <Card className="p-6 bg-dashboard-card border-border/50 hover:border-dashboard-accent/50 transition-all duration-300">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-3xl font-bold text-foreground">{value}</p>
          <div className="flex items-center space-x-1">
            {isPositive ? (
              <TrendingUp className="w-4 h-4 text-dashboard-success" />
            ) : (
              <TrendingDown className="w-4 h-4 text-dashboard-danger" />
            )}
            <span className={`text-sm font-medium ${
              isPositive ? "text-dashboard-success" : "text-dashboard-danger"
            }`}>
              {change}
            </span>
          </div>
        </div>
        <div className="p-3 rounded-lg bg-primary/10">
          {icon}
        </div>
      </div>
    </Card>
  );
}