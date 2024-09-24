import CategoryItem from "./CategoryItem";
import pizza from "../assets/svgs/pizza.svg";
import burger from "../assets/svgs/burger.svg";
import sandwich from "../assets/svgs/sandwich.svg";
import chicken from "../assets/svgs/chicken.svg";
import pasta from "../assets/svgs/pasta.svg";
import dessert from "../assets/svgs/dessert.svg";

function Category() {
  return (
    <div className="absolute top-[328px] left-[60px] w-[670px] h-[179px] flex flex-col">
      <div className="text-secondary w-[112px] not-italic font-bold leading-normal text-[14px] font-product-sans mb-[12px] ml-[10px]">
        Popular Category
      </div>

      <div className="h-[150px] w-[670px] flex flex-row flex-shrink-0 gap-[14px]">
        <CategoryItem image={pizza}>Pizza</CategoryItem>
        <CategoryItem image={burger}>Burger</CategoryItem>
        <CategoryItem image={sandwich}>Sandwich</CategoryItem>
        <CategoryItem image={chicken}>Chicken</CategoryItem>
        <CategoryItem image={pasta}>Pasta</CategoryItem>
        <CategoryItem image={dessert}>Dessert</CategoryItem>
      </div>
    </div>
  );
}

export default Category;
