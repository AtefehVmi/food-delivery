import SocialMediaIconGroup from "./SocialMediaIconGroup";
import category from "../assets/svgs/category.svg";
import contactUs from "../assets/svgs/contactUs.svg";

import TextIcon from "./TextIcon";
import Logo from "./Logo";
import LoginMenu from "./LoginMenu";
import loginIcon from "../assets/svgs/loginIcon.svg";

import Icon from "./Icon";

function Header() {
  return (
    <div className="flex items-center w-[1260px] h-[84px] justify-between mx-[60px] mt-[36px]">
      <div className="flex items-center">
        <Logo />
        <div className="flex gap-[26px] ml-[47px]">
          <TextIcon image={category}>Categorys</TextIcon>
          <TextIcon image={contactUs}>Contact Us</TextIcon>
        </div>

        <SocialMediaIconGroup />
      </div>
      <div className="flex items-center gap-[40px]">
        <Icon image={loginIcon} />
        <LoginMenu />
      </div>
    </div>
  );
}

export default Header;
