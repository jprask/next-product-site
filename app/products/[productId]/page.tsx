import { db } from '@/infra/db';
import { ProductRepository } from '@/src/utils/products/repository';

const productRepository = ProductRepository({ db });

const productDetail = async ({ params }: { params: { productId: string } }) => {
  const product = await productRepository.getById(parseInt(params.productId));

  if (!product) {
    return <p>Product not Found</p>;
  }

  return (
    <div className='flex min-h-screen flex-col p-24'>
      <h1 className='text-2xl font-semibold'>Product Description</h1>
      <h3 className={`mb-3 text-xl `}>{product.name}</h3>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Price: {product.price}</p>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Description: {product.description}</p>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Category: {product.category}</p>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Rating: {product.rating}</p>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Reviews: {product.numReviews}</p>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Stock: {product.countInStock}</p>
    </div>
  );
};

export default productDetail;
