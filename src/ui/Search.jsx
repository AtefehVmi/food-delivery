import Icon from "./Icon";
import location from "../assets/svgs/location.svg";
import SearchBar from "./SearchBar";

function Search() {
  return (
    <div className="w-[539px] h-[108px] flex-shrink-0 flex flex-col justify-between absolute top-[180px] left-[62px]">
      <div className="flex gap-[10px] items-center justify-start ml-[12px]">
        <div className="flex gap-[6px]">
          <Icon image={location} />
          <span className="font-product-sans leading-normal text-[16px] font-normal text-primary">
            My Location
          </span>
        </div>
        <div className="w-[1px] h-[18px] bg-secondary1"></div>
        <span className="font-product-sans leading-normal text-[16px] font-normal text-primary">
          New Tork,<span className="text-accent"> Left Side Blue Door</span>
        </span>
      </div>

      <SearchBar />
    </div>
  );
}

export default Search;
