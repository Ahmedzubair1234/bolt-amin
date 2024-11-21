import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import { Icon } from '@/components/ui/icon';

export function Header() {
  const isOpen = new Date().getHours() >= 8 && new Date().getHours() < 20;

  return (
    <header className="fixed top-0 left-64 right-16 z-30 h-14 border-b bg-background">
      <div className="flex h-full items-center justify-between px-4">
        <div className="flex items-center">
          <Icon name="activity" className="h-6 w-6 text-purple-600" />
        </div>
        
        <div className="text-lg font-semibold">Amin Diagnostics</div>
        
        <div className="flex items-center gap-4">
          <Badge variant={isOpen ? "success" : "destructive"}>
            {isOpen ? "Open Today" : "Closed"}
          </Badge>
          <div className="text-sm text-muted-foreground">
            {format(new Date(), 'EEEE, MMM dd, yyyy')}
          </div>
        </div>
      </div>
    </header>
  );
}