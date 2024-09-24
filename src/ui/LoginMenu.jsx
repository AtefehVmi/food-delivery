import Rectangle from "../assets/svgs/Rectangle.svg";

function LoginMenu() {
  return (
    <div className="flex w-[171px] h-[70px] relative">
      <img src={Rectangle} alt="button login" className="z-0" />
      <span className="font-product-sans top-[25px] left-[56px] text-[16px] z-10 text-mainBackground absolute leading-normal font-normal">
        Account
      </span>
    </div>
  );
}

export default LoginMenu;
