import Products from "@/components/Products";
import { Suspense } from "react";
import Loading from "./Loading";

async function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Home page</h1>
      <Suspense fallback={<Loading />}>
        <Products />
      </Suspense>
    </div>
  );
}

export default Home;
