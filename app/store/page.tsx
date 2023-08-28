import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import LeftMenu from "./components/LeftMenu";
import BlackBackground from "./components/BlackBackground";
import TitleLabel from "./components/TitleLabel";
import ProductContent from "./components/ProductContent";

export default async function Store() {
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
