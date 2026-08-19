import { Metadata } from 'next';
import products from '@/app/products/products.json';

export async function generateStaticParams() {
  // Build static params from product IDs
  return products.map((product) => ({ id: product.id }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div className="container mx-auto p-8">Product not found</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-lg text-gray-600 mb-2">{product.description}</p>
      <p className="text-xl font-mono text-blue-600 mt-4">
        Price: ¥{product.price.toLocaleString()}
      </p>
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = params;
  const product = products.find((p) => p.id === id);
  return {
    title: product?.name ?? 'Product',
    description: product?.description ?? '',
  };
}