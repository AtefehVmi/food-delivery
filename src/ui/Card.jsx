import borderRectangle from "../assets/svgs/borderRectangle.svg";
import linearGradient from "../assets/svgs/linearGradient.svg";
import restaurantImage from "../assets/svgs/restaurantImage.svg";
import burgerKingLogo from "../assets/svgs/burgerKingLogo.svg";

function Card() {
  return (
    <div className="relative w-[298px] h-[184px] flex-shrink-0  flex flex-col items-center">
      <img src={borderRectangle} alt="border" className="absolute z-0" />
      <img
        src={restaurantImage}
        alt="restaurant image"
        className="absolute z-10"
      />
      <img src={linearGradient} alt="gradiant" className="absolute z-20" />
      <img
        src={burgerKingLogo}
        alt="burger king logo"
        className="absolute z-30 top-[110px] left-[34px]"
      />
      <span className="absolute z-30 font-product-sans font-bold text-[18px] leading-normal text-gray w-[99px] h-[22px] top-[115px] left-[92px] ">
        King Burger
      </span>
      <span className="absolute z-30 font-product-sans font-normal text-[14px] leading-normal text-gray w-[59px] h-[17px] top-[141px] left-[92px] ">
        Rate 8/10
      </span>
    </div>
  );
}

export default Card;
