import { hottestProducts, recommendedProducts } from "../data/products";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import ProductSection from "./components/products/ProductSection";
export default async function Store() {
  return (
    <main className="w-screen grid grid-cols-8 px-10 md:px-20">
      <Header />
      <div className="row-start-2 row-end-2 col-span-8 h-fit tracking-wide">
        <h1 className="text-gray-main">
          Hello Marcin,
          <span className="font-bold">
            What food <br />
            salad do you want today?
          </span>
        </h1>
      </div>
      <SearchBox className="row-start-3 row-end-3 col-span-8 mt-11" />
      <ProductSection
        className="col-span-8 mt-11"
        title="Recommended staff"
        products={recommendedProducts}
      />
      <ProductSection
        className="col-span-8 mt-11"
        title="Hottest"
        products={hottestProducts}
      />
    </main>
  );
}
