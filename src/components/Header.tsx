import { Bell, Search, Menu, Sun, Moon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  title: string;
  onMenuClick?: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export default function Header({ title, onMenuClick, theme, onToggleTheme }: HeaderProps) {
  return (
    <header className="h-16 border-b border-border flex items-center justify-between px-6 bg-background/50 backdrop-blur-sm sticky top-0 z-10">
      <div className="flex items-center gap-4">
        {onMenuClick &&
        <Button variant="ghost" size="icon" onClick={onMenuClick} className="lg:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        }
        <h1 className='text-foreground text-2xl font-semibold'>{title}</h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search..."
            className="w-64 pl-10 bg-muted border-border input-glow" />

        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={onToggleTheme}
          className="relative">

          {theme === 'dark' ?
          <Sun className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" /> :

          <Moon className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
          }
        </Button>

        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-5 h-5 text-muted-foreground" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
        </Button>

        <div className="w-9 h-9 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-semibold">
          JD
        </div>
      </div>
    </header>);

}