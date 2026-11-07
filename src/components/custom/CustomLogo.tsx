import { Link } from 'react-router';

interface Props {
  subtitle?: string;
  inverse?: boolean;
}

export const CustomLogo = ({
  subtitle = 'Colección 01',
  inverse = false,
}: Props) => {
  return (
    <Link to="/" className="group inline-flex items-center gap-3 whitespace-nowrap">
      <span
        className={`grid size-9 place-items-center font-montserrat text-lg font-bold transition-colors group-hover:bg-primary group-hover:text-primary-foreground ${
          inverse
            ? 'bg-background text-foreground'
            : 'bg-foreground text-background'
        }`}
      >
        T
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-montserrat text-lg font-bold tracking-[0.2em] ${
            inverse ? 'text-background' : 'text-foreground'
          }`}
        >
          TESLO
        </span>
        <span
          className={`mt-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] ${
            inverse ? 'text-background/55' : 'text-muted-foreground'
          }`}
        >
          Shop · {subtitle}
        </span>
      </span>
    </Link>
  );
};
