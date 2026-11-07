import { useRef, type KeyboardEvent } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link, useParams, useSearchParams } from 'react-router';
import { cn } from '@/lib/utils';
import { CustomLogo } from '@/components/custom/CustomLogo';

import { useAuthStore } from '@/auth/store/auth.store';

export const CustomHeader = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { authStatus, isAdmin, logout } = useAuthStore();

  const { gender } = useParams();

  const inputRef = useRef<HTMLInputElement>(null);
  const query = searchParams.get('query') || '';

  const handleSearch = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') return;
    const query = inputRef.current?.value;

    const newSearchParams = new URLSearchParams();

    if (!query) {
      newSearchParams.delete('query');
    } else {
      newSearchParams.set('query', inputRef.current!.value);
    }

    setSearchParams(newSearchParams);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/95 backdrop-blur">
      <div className="bg-foreground text-background">
        <div className="container mx-auto flex h-7 items-center justify-between px-4 text-[9px] font-medium uppercase tracking-[0.18em] lg:px-8">
          <span>TESLO GOODS <span className="px-1 text-primary">/</span> Colección 01</span>
          <span className="hidden sm:inline">Diseñado para moverse a tu manera</span>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-[76px] items-center justify-between gap-6">
          {/* Logo */}
          <CustomLogo />

          <nav className="hidden items-center gap-7 md:flex">
            <Link
              to="/"
              className={cn(
                'border-b py-2 text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors hover:text-primary',
                !gender ? 'border-primary text-foreground' : 'border-transparent text-muted-foreground'
              )}
            >
              Colección
            </Link>
            <Link
              to="/gender/men"
              className={cn(
                'border-b py-2 text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors hover:text-primary',
                gender === 'men' ? 'border-primary text-foreground' : 'border-transparent text-muted-foreground'
              )}
            >
              Hombre
            </Link>
            <Link
              to="/gender/women"
              className={cn(
                'border-b py-2 text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors hover:text-primary',
                gender === 'women' ? 'border-primary text-foreground' : 'border-transparent text-muted-foreground'
              )}
            >
              Mujer
            </Link>
            <Link
              to="/gender/kid"
              className={cn(
                'border-b py-2 text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors hover:text-primary',
                gender === 'kid' ? 'border-primary text-foreground' : 'border-transparent text-muted-foreground'
              )}
            >
              Junior
            </Link>
          </nav>

          {/* Search and Cart */}
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden md:flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  ref={inputRef}
                  placeholder="Buscar productos..."
                  className="h-9 w-52 rounded-none border-transparent bg-secondary pl-9 text-xs focus-visible:border-primary focus-visible:bg-background"
                  onKeyDown={handleSearch}
                  defaultValue={query}
                />
              </div>
            </div>

            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="h-5 w-5" />
            </Button>

            {authStatus === 'not-authenticated' ? (
              <Link to="/auth/login">
                <Button variant="default" size="sm" className="ml-1 rounded-none px-4 text-[10px] font-semibold uppercase tracking-[0.14em]">
                  Entrar
                </Button>
              </Link>
            ) : (
              <Button
                onClick={logout}
                variant="outline"
                size="sm"
                className="ml-1 rounded-none px-3 text-[10px] font-semibold uppercase tracking-[0.12em]"
              >
                Cerrar sesión
              </Button>
            )}

            {isAdmin() && (
              <Link to="/admin">
                <Button
                  variant="destructive"
                  size="sm"
                  className="ml-1 rounded-none px-3 text-[10px] font-semibold uppercase tracking-[0.12em]"
                  type="button"
                >
                  Admin
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
