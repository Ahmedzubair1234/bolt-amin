import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { useTheme } from 'next-themes';
import { useState } from 'react';

export function RightSidebar() {
  const { theme, setTheme } = useTheme();
  const [language, setLanguage] = useState<'EN' | 'BN'>('EN');

  return (
    <div className="fixed right-0 top-0 z-40 h-screen w-16 bg-background">
      <div className="flex h-full flex-col items-center border-l py-4">
        <div className="flex flex-col gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <Icon
              name={theme === 'dark' ? 'sun' : 'moon'}
              className="h-5 w-5"
            />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === 'EN' ? 'BN' : 'EN')}
          >
            {language}
          </Button>
        </div>
      </div>
    </div>
  );
}