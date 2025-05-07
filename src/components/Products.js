import Link from "next/link";
import Image from "next/image";

const fetchData = async (url) => {
  const req = await fetch(url);
  const data = await req.json();

  return data;
};

async function Products() {
  const { products } = await fetchData(`https://dummyjson.com/product`);
  return (
    <div className="py-5 px-7 grid grid-cols-4 gap-5">
      {products.map((product) => {
        return (
          <div
            key={product.id}
            className="rounded-lg shadow-xl shadow-blue-200"
          >
            <Link href={`/product/${product.id}`}>
              <Image
                src={product.thumbnail}
                alt="Product"
                width={250}
                height={300}
              />
            </Link>
            <div className="bg-amber-100 p-4 rounded-b-lg">
              <h3 className="font-semibold line-clamp-1">{product.title}</h3>
              <p className="line-clamp-1">{product.description}</p>
              <h6>Rating: {Math.floor(product.rating)}⭐</h6>
              <h6>Price: {product.price}$</h6>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
