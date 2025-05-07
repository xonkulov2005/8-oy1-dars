import Products from "@/components/Products";
import { Suspense } from "react";
import Loading from "./Loading";

async function Home() {
  return (
    <div className="pt-4">
      <Suspense fallback={<Loading />}>
        <Products />
      </Suspense>
    </div>
  );
}

export default Home;
