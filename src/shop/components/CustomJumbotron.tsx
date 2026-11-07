import { ArrowDownRight } from 'lucide-react';

interface Props {
  title: string;
  subTitle?: string;
}

export const CustomJumbotron = ({ title, subTitle }: Props) => {
  const defaultSubTitle =
    'Básicos y accesorios con una idea sencilla: diseño limpio para acompañar cada trayecto.';

  return (
    <section className="relative isolate overflow-hidden border-b border-border bg-[#ebe8e1] px-4 lg:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 -top-36 size-[430px] rounded-full border border-foreground/5"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-24 size-[300px] rounded-full border border-foreground/5"
      />
      <div className="container mx-auto grid min-h-[410px] max-w-7xl items-center gap-12 py-14 md:grid-cols-[1.2fr_0.8fr] md:py-16">
        <div className="relative z-10 max-w-2xl">
          <p className="store-eyebrow mb-6 flex items-center gap-3 text-muted-foreground">
            <span className="h-px w-8 bg-primary" />
            Teslo Goods <span className="text-primary">/</span> Estudio 01
          </p>
          <h1 className="mb-6 max-w-xl font-montserrat text-4xl font-medium leading-[1.06] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="max-w-lg text-base leading-7 text-muted-foreground sm:text-lg">
            {subTitle || defaultSubTitle}
          </p>
          <a
            href="#productos"
            className="mt-8 inline-flex items-center gap-3 border-b border-foreground pb-2 text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors hover:border-primary hover:text-primary"
          >
            Explorar colección <ArrowDownRight className="size-4" />
          </a>
        </div>

        <div className="relative hidden justify-self-end md:flex">
          <div className="relative flex aspect-[0.88] w-[270px] flex-col justify-between overflow-hidden bg-foreground p-7 text-background shadow-2xl shadow-foreground/10 lg:w-[320px]">
            <div className="absolute -right-14 top-20 size-48 rotate-45 border border-background/10" />
            <div className="absolute -right-4 top-32 size-28 rotate-45 border border-primary/80" />
            <div className="relative flex items-center justify-between border-b border-background/20 pb-4 text-[9px] font-semibold uppercase tracking-[0.2em]">
              <span>Objeto de estudio</span>
              <span className="text-primary">N.º 001</span>
            </div>
            <div className="relative py-8">
              <span className="font-montserrat text-[132px] font-light leading-none tracking-[-0.12em] text-background lg:text-[158px]">
                T<span className="text-primary">.</span>
              </span>
            </div>
            <div className="relative flex items-end justify-between border-t border-background/20 pt-4">
              <p className="text-[9px] font-medium uppercase leading-5 tracking-[0.18em] text-background/65">
                Diseño simple.
                <br />
                Movimiento constante.
              </p>
              <span className="font-montserrat text-2xl font-light text-primary">01</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
