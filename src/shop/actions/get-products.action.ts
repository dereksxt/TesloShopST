import { tesloApi } from '@/api/tesloApi';
import { products as mockProducts } from '@/mocks/products.mock';
import type { Size } from '@/interfaces/product.interface';
import type { ProductsResponse } from '@/interfaces/products.response';

interface Options {
  limit?: number | string;
  offset?: number | string;
  sizes?: string;
  gender?: string;
  minPrice?: number;
  maxPrice?: number;
  query?: string;
}

export const getProductsAction = async (
  options: Options
): Promise<ProductsResponse> => {
  const { limit, offset, gender, sizes, minPrice, maxPrice, query } = options;

  try {
    const { data } = await tesloApi.get<ProductsResponse>('/products', {
      params: {
        limit,
        offset,
        gender,
        sizes,
        minPrice,
        maxPrice,
        q: query,
      },
    });

    const productsWithImageUrls = data.products.map((product) => ({
      ...product,
      images: product.images.map((image) =>
        image.startsWith('http')
          ? image
          : `${import.meta.env.VITE_API_URL}/files/product/${image}`
      ),
    }));

    return {
      ...data,
      products: productsWithImageUrls,
    };
  } catch {
    const products: ProductsResponse['products'] = mockProducts.map((product) => {
      const sizes = product.sizes.filter(
        (size): size is Size => size !== 'Único'
      );

      return {
        id: product.id,
        title: product.name,
        price: product.price,
        description: product.description,
        slug: product.id,
        stock: 10,
        sizes: sizes.length ? sizes : (['M'] as Size[]),
        gender: 'unisex',
        tags: [product.category, ...product.colors],
        images: [product.image],
        user: {
          id: 'demo',
          email: 'demo@tesloshop.local',
          fullName: 'Teslo Shop',
          isActive: true,
          roles: ['user'],
        },
      };
    });

    return {
      count: products.length,
      pages: 1,
      products,
    };
  }
};
