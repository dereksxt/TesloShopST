import { CustomPagination } from '@/components/custom/CustomPagination';

import { CustomJumbotron } from '@/shop/components/CustomJumbotron';
import { ProductsGrid } from '@/shop/components/ProductsGrid';
import { useProducts } from '@/shop/hooks/useProducts';

export const HomePage = () => {
  const { data } = useProducts();

  return (
    <>
      <CustomJumbotron
        title="Hecho para moverte."
        subTitle="Básicos y accesorios con una idea sencilla: diseño limpio para acompañar cada trayecto. Teslo es mi proyecto personal, construido paso a paso."
      />

      <ProductsGrid products={data?.products || []} />

      <CustomPagination totalPages={data?.pages || 0} />
    </>
  );
};
