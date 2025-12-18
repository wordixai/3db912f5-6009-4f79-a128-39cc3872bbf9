import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import DashboardPage from '@/pages/DashboardPage';
import EventsPage from '@/pages/EventsPage';
import FansPage from '@/pages/FansPage';
import MusicPage from '@/pages/MusicPage';
import RevenuePage from '@/pages/RevenuePage';
import TeamPage from '@/pages/TeamPage';
import { useTheme } from '@/hooks/useTheme';

type Page = 'dashboard' | 'events' | 'fans' | 'music' | 'revenue' | 'team' | 'settings';

const pageTitles: Record<Page, string> = {
  dashboard: 'Dashboard',
  events: 'Events',
  fans: 'Fans',
  music: 'Music Catalog',
  revenue: 'Revenue',
  team: 'Team',
  settings: 'Settings'
};

const Index = () => {
  const [activePage, setActivePage] = useState<Page>('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <DashboardPage />;
      case 'events':
        return <EventsPage />;
      case 'fans':
        return <FansPage />;
      case 'music':
        return <MusicPage />;
      case 'revenue':
        return <RevenuePage />;
      case 'team':
        return <TeamPage />;
      case 'settings':
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold text-foreground mb-2">Settings</h2>
            <p className="text-muted-foreground">Settings page coming soon...</p>
          </div>
        );
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar
          activePath={activePage}
          onNavigate={(path) => setActivePage(path as Page)}
          collapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
      </div>

      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full">
            <Sidebar
              activePath={activePage}
              onNavigate={(path) => {
                setActivePage(path as Page);
                setMobileMenuOpen(false);
              }}
            />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header
          title={pageTitles[activePage]}
          onMenuClick={() => setMobileMenuOpen(true)}
          theme={theme}
          onToggleTheme={toggleTheme}
        />
        <main className="flex-1 overflow-auto">
          {renderPage()}
        </main>
      </div>
    </div>
  );
};

export default Index;
