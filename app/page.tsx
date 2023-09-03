import BlackBackground from "./store/components/BlackBackground";
import Header from "./store/components/Header";
import LeftMenu from "./store/components/LeftMenu";
import ProductContent from "./store/components/ProductContent";
import SearchBox from "./store/components/SearchBox";
import TitleLabel from "./store/components/TitleLabel";

export default async function Home() {
  return (
    <main className="w-screen grid grid-cols-8  md:px-20 2xl:px-96 pb-14">
      <LeftMenu />
      <BlackBackground />
      <Header />
      <TitleLabel />
      <SearchBox className="row-start-3 row-end-3 col-span-8 mt-11" />
      <ProductContent />
    </main>
  );
}
