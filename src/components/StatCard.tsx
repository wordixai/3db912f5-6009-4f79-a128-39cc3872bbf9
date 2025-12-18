import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon: LucideIcon;
  iconColor?: string;
}

export default function StatCard({
  title,
  value,
  change,
  changeType = 'neutral',
  icon: Icon,
  iconColor = 'text-primary'
}: StatCardProps) {
  return (
    <div className="stat-card">
      <div className="flex items-start justify-between mb-4">
        <div className={cn(
          "p-3 rounded-xl bg-primary/10",
          iconColor
        )}>
          <Icon className="w-5 h-5" />
        </div>
        {change && (
          <span className={cn(
            "text-sm font-medium px-2 py-1 rounded-full",
            changeType === 'positive' && "badge-success",
            changeType === 'negative' && "badge-warning",
            changeType === 'neutral' && "badge-muted"
          )}>
            {change}
          </span>
        )}
      </div>
      <p className="text-muted-foreground text-sm mb-1">{title}</p>
      <p className="text-3xl font-bold text-foreground">{value}</p>
    </div>
  );
}
