import Brands from "./filterCategories/Brands";
import Categories from "./filterCategories/Categories";
import Price from "./filterCategories/Price";

const LeftProductComponents = () => {
  return (
    <>
      <div className="bg-white02 p-[48px] rounded-lg h-fit">
        <Categories />
        <hr className="w-full text-black100" />
        <Brands />
        <hr className="w-full text-black100" />
        <Price />
      </div>
    </>
  );
};

export default LeftProductComponents;
