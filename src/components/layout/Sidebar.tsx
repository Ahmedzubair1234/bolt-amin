import { Icon } from '@/components/ui/icon';
import { cn } from '@/lib/utils';
import { NAVIGATION_ITEMS } from '@/lib/constants';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={cn(
        'fixed left-0 top-0 z-40 h-screen bg-background transition-all duration-300',
        isCollapsed ? 'w-16' : 'w-64'
      )}
    >
      <div className="flex h-full flex-col border-r">
        <div className="flex h-14 items-center border-b px-4">
          {!isCollapsed && (
            <Icon name="activity" className="h-6 w-6 text-purple-600" />
          )}
          <Button
            variant="ghost"
            size="icon"
            className="ml-auto"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <Icon
              name={isCollapsed ? 'chevron-right' : 'chevron-left'}
              className="h-4 w-4"
            />
          </Button>
        </div>
        <nav className="flex-1 space-y-1 p-2">
          {NAVIGATION_ITEMS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
            >
              <Icon name={item.icon} className="mr-2 h-4 w-4" />
              {!isCollapsed && <span>{item.name}</span>}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}