import Toaster from "@/components/Toaster";
import Image from "next/image";

const fetchData = async (url) => {
  const req = await fetch(url);
  const data = await req.json();

  return data;
};

async function Product({ params }) {
  const { id } = await params;
  const product = await fetchData(`https://dummyjson.com/product/` + id);

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-around shadow-cyan-800 shadow-2xl w-[100%] py-4 px-12">
        <Toaster />
        <div className="w-100">
          <h1 className="text-2xl font-semibold mb-1.5">{product.title}</h1>
          <h3 className="mb-1">{product.description}</h3>
          <h6 className="font-bold mb-1">Rating: {Math.floor(product.rating)}⭐</h6>
          <h6 className="font-bold mb-1">Price: {product.price}$</h6>
          <button className="py-1 px-4 border-2 bg-blue-700 font-semibold text-white rounded-xl hover:bg-violet-600 active:bg-violet-700">
            Buy
          </button>
        </div>
        <Image src={product.thumbnail} width={300} height={300} alt="Product" />
      </div>
    </div>
  );
}

export default Product;
