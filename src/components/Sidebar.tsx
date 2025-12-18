import {
  LayoutDashboard,
  Calendar,
  Users,
  Music,
  DollarSign,
  UserCircle,
  Settings,
  ChevronLeft
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  icon: React.ElementType;
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { icon: LayoutDashboard, label: 'Dashboard', path: 'dashboard' },
  { icon: Calendar, label: 'Events', path: 'events' },
  { icon: Users, label: 'Fans', path: 'fans' },
  { icon: Music, label: 'Music', path: 'music' },
  { icon: DollarSign, label: 'Revenue', path: 'revenue' },
  { icon: UserCircle, label: 'Team', path: 'team' },
];

interface SidebarProps {
  activePath: string;
  onNavigate: (path: string) => void;
  collapsed?: boolean;
  onToggleCollapse?: () => void;
}

export default function Sidebar({ activePath, onNavigate, collapsed = false, onToggleCollapse }: SidebarProps) {
  return (
    <aside className={cn(
      "h-screen bg-sidebar border-r border-sidebar-border flex flex-col transition-all duration-300",
      collapsed ? "w-20" : "w-64"
    )}>
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border flex items-center justify-between">
        {!collapsed && (
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
              <Music className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg text-sidebar-foreground">BandCRM</span>
          </div>
        )}
        {collapsed && (
          <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto">
            <Music className="w-5 h-5 text-primary-foreground" />
          </div>
        )}
        {onToggleCollapse && !collapsed && (
          <button
            onClick={onToggleCollapse}
            className="p-1.5 rounded-lg hover:bg-sidebar-accent text-muted-foreground hover:text-sidebar-foreground transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.path}
            onClick={() => onNavigate(item.path)}
            className={cn(
              "nav-item w-full",
              activePath === item.path && "active"
            )}
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            {!collapsed && <span>{item.label}</span>}
          </button>
        ))}
      </nav>

      {/* Settings at bottom */}
      <div className="p-4 border-t border-sidebar-border">
        <button
          onClick={() => onNavigate('settings')}
          className={cn(
            "nav-item w-full",
            activePath === 'settings' && "active"
          )}
        >
          <Settings className="w-5 h-5 flex-shrink-0" />
          {!collapsed && <span>Settings</span>}
        </button>
      </div>
    </aside>
  );
}
