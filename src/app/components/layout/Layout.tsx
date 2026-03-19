import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { ScrollBox } from '../ui/ScrollBox';

export function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  return (
    <div className="flex h-screen bg-[#F1F5F9] overflow-hidden">
      {/* Sidebar */}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main content — pushed by sidebar */}
      <div
        className={`flex flex-col flex-1 min-w-0 transition-all duration-200 ${
          sidebarOpen ? 'ml-[240px]' : 'ml-0'
        }`}
      >
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <ScrollBox variant="main" className="flex-1">
          <Outlet />
        </ScrollBox>
      </div>
    </div>
  );
}