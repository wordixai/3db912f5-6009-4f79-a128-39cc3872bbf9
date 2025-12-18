import { DollarSign, TrendingUp, ShoppingBag, Headphones, Package } from 'lucide-react';
import StatCard from '@/components/StatCard';
import { revenueData, merchItems } from '@/data/mockData';
import { cn } from '@/lib/utils';

export default function RevenuePage() {
  const totalRevenue = revenueData.reduce((sum, r) => sum + r.streaming + r.merchandise + r.tickets, 0);
  const totalStreaming = revenueData.reduce((sum, r) => sum + r.streaming, 0);
  const totalMerch = revenueData.reduce((sum, r) => sum + r.merchandise, 0);
  const totalTickets = revenueData.reduce((sum, r) => sum + r.tickets, 0);

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-foreground">Revenue</h2>
        <p className="text-muted-foreground">Track your earnings across all channels</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Revenue"
          value={'$' + (totalRevenue / 1000).toFixed(0) + 'K'}
          change="+23%"
          changeType="positive"
          icon={DollarSign}
        />
        <StatCard
          title="Streaming Revenue"
          value={'$' + (totalStreaming / 1000).toFixed(0) + 'K'}
          change="+15%"
          changeType="positive"
          icon={Headphones}
          iconColor="text-warning"
        />
        <StatCard
          title="Merchandise Sales"
          value={'$' + (totalMerch / 1000).toFixed(0) + 'K'}
          change="+28%"
          changeType="positive"
          icon={ShoppingBag}
          iconColor="text-success"
        />
        <StatCard
          title="Ticket Sales"
          value={'$' + (totalTickets / 1000).toFixed(0) + 'K'}
          change="+35%"
          changeType="positive"
          icon={TrendingUp}
          iconColor="text-primary"
        />
      </div>

      {/* Revenue Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chart */}
        <div className="rounded-xl border border-border bg-card p-6">
          <h3 className="text-lg font-semibold text-foreground mb-6">Revenue Breakdown</h3>

          <div className="space-y-6">
            {/* Streaming */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-warning" />
                  <span className="text-sm text-muted-foreground">Streaming</span>
                </div>
                <span className="text-sm font-medium text-foreground">
                  ${totalStreaming.toLocaleString()} ({((totalStreaming / totalRevenue) * 100).toFixed(0)}%)
                </span>
              </div>
              <div className="progress-bar">
                <div
                  className="h-full rounded-full bg-warning"
                  style={{ width: `${(totalStreaming / totalRevenue) * 100}%` }}
                />
              </div>
            </div>

            {/* Merchandise */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-success" />
                  <span className="text-sm text-muted-foreground">Merchandise</span>
                </div>
                <span className="text-sm font-medium text-foreground">
                  ${totalMerch.toLocaleString()} ({((totalMerch / totalRevenue) * 100).toFixed(0)}%)
                </span>
              </div>
              <div className="progress-bar">
                <div
                  className="h-full rounded-full bg-success"
                  style={{ width: `${(totalMerch / totalRevenue) * 100}%` }}
                />
              </div>
            </div>

            {/* Tickets */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="text-sm text-muted-foreground">Ticket Sales</span>
                </div>
                <span className="text-sm font-medium text-foreground">
                  ${totalTickets.toLocaleString()} ({((totalTickets / totalRevenue) * 100).toFixed(0)}%)
                </span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${(totalTickets / totalRevenue) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Monthly Trend */}
          <div className="mt-8 pt-6 border-t border-border">
            <h4 className="text-sm font-medium text-foreground mb-4">Monthly Trend</h4>
            <div className="h-32 flex items-end justify-between gap-2">
              {revenueData.map((data, index) => {
                const total = data.streaming + data.merchandise + data.tickets;
                const maxValue = 250000;
                return (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div
                      className="w-full rounded-t-sm bg-gradient-primary"
                      style={{ height: `${(total / maxValue) * 100}%` }}
                    />
                    <span className="text-xs text-muted-foreground">{data.month}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Merch Items */}
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-foreground">Top Merchandise</h3>
            <button className="text-sm text-primary hover:text-primary/80 transition-colors">
              View all
            </button>
          </div>

          <div className="space-y-4">
            {merchItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground truncate">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.category}</p>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="text-sm text-success">${item.price}</span>
                    <span className="text-sm text-muted-foreground">{item.sold} sold</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-foreground">${(item.price * item.sold).toLocaleString()}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Package className={cn(
                      "w-4 h-4",
                      item.stock < 200 ? "text-warning" : "text-success"
                    )} />
                    <span className={cn(
                      "text-sm",
                      item.stock < 200 ? "text-warning" : "text-muted-foreground"
                    )}>
                      {item.stock} left
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
