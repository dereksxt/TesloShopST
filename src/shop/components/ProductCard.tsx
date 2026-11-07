import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import type { Size } from '@/interfaces/product.interface';
import { currencyFormatter } from '@/lib/currency-formatter';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  sizes: Size[];
}

export const ProductCard = ({
  name,
  price,
  image,
  category,
  sizes,
}: ProductCardProps) => {
  const audience =
    {
      men: 'Hombre',
      women: 'Mujer',
      kid: 'Junior',
      unisex: 'Unisex',
    }[category] || category;

  return (
    <Card className="group cursor-pointer overflow-hidden rounded-none border-border/80 bg-card shadow-none product-card-hover">
      <CardContent className="p-0">
        <div className="relative aspect-[0.92] overflow-hidden bg-[#e9e6e0]">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.035]"
          />
          <span className="absolute left-4 top-4 bg-background/90 px-2.5 py-1.5 text-[8px] font-semibold uppercase tracking-[0.18em] text-foreground backdrop-blur-sm">
            Teslo Goods
          </span>
          <div className="image-overlay" />
        </div>

        <div className="space-y-4 px-4 pb-5 pt-5 sm:px-5">
          <div className="space-y-2">
            <p className="store-eyebrow text-muted-foreground">{audience} <span className="text-primary">/</span> {sizes.join(' · ')}</p>
            <h3 className="font-montserrat text-base font-medium leading-snug tracking-tight sm:text-lg">
              {name}
            </h3>
          </div>

          <div className="flex items-center justify-between border-t border-border pt-4">
            <p className="font-montserrat text-lg font-semibold tracking-tight">
              {currencyFormatter(price)}
            </p>
            <Button
              size="sm"
              variant="outline"
              className="h-8 rounded-none border-foreground/20 px-3 text-[9px] font-semibold uppercase tracking-[0.12em] opacity-100 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground sm:opacity-0 sm:group-hover:opacity-100"
            >
              Añadir
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
