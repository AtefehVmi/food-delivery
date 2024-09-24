import Rectangle from "../assets/svgs/Rectangle.svg";
import Rectangle2 from "../assets/svgs/Rectangle2.svg";

function SearchBar() {
  return (
    <div className="w-[539px] h-[70px] flex relative">
      <div className="h-[70px] w-[510px] flex absolute">
        <img src={Rectangle2} alt="search bar" className="z-0" />
        <span className="font-product-sans absolute top-[25px] left-[48px] z-10 font-normal leading-normal text-[16px] text-secondary">
          Search...
        </span>
      </div>
      <div className="flex w-[161px] h-[70px] flex-shrink-0 absolute left-[378px]">
        <img src={Rectangle} alt="search bar button" />
        <span className="font-product-sans absolute top-[25px] left-[56px] z-10 font-normal leading-normal text-[16px] text-mainBackground">
          Search
        </span>
      </div>
    </div>
  );
}

export default SearchBar;
