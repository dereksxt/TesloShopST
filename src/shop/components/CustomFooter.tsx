import { Link } from 'react-router';
import { CustomLogo } from '@/components/custom/CustomLogo';

export const CustomFooter = () => {
  return (
    <footer className="mt-16 bg-foreground px-4 text-background lg:px-8">
      <div className="container mx-auto max-w-7xl py-12 sm:py-16">
        <div className="grid gap-10 border-b border-background/15 pb-10 md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-md">
            <CustomLogo inverse subtitle="Goods" />
            <p className="mt-6 max-w-sm text-sm leading-6 text-background/65">
              Una colección inspirada por la movilidad, el diseño limpio y los
              trayectos cotidianos.
            </p>
          </div>

          <div>
            <p className="store-eyebrow mb-4 text-background/45">Explora la tienda</p>
            <nav className="flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium uppercase tracking-[0.13em]">
              <Link className="transition-colors hover:text-primary" to="/">
                Colección
              </Link>
              <Link
                className="transition-colors hover:text-primary"
                to="/gender/men"
              >
                Hombre
              </Link>
              <Link
                className="transition-colors hover:text-primary"
                to="/gender/women"
              >
                Mujer
              </Link>
              <Link
                className="transition-colors hover:text-primary"
                to="/gender/kid"
              >
                Junior
              </Link>
            </nav>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-5 text-[9px] font-medium uppercase tracking-[0.16em] text-background/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Teslo Shop</p>
        </div>
      </div>
    </footer>
  );
};
