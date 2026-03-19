import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { ClientSidebar } from './ClientSidebar';
import { ClientHeader } from './ClientHeader';
import { ScrollBox } from '../ui/ScrollBox';

export function ClientLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  return (
    <div className="flex h-screen bg-[#F1F5F9] overflow-hidden">
      {/* Mobile backdrop overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar — fixed on all screens, always visible on lg+ */}
      <ClientSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main content — lg: always offset by sidebar width */}
      <div className="flex flex-col flex-1 min-w-0 lg:ml-[240px]">
        <ClientHeader onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <ScrollBox variant="main" className="flex-1">
          <Outlet />
        </ScrollBox>
      </div>
    </div>
  );
}