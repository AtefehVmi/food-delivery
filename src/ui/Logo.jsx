import Icon from "./Icon";

import logoIcon1 from "../assets/svgs/logoIcon1.svg";
import logoIcon2 from "../assets/svgs/logoIcon2.svg";

function Logo() {
  return (
    <div className="w-[218px] h-[84px] flex flex-shrink-0 gap-[6px]">
      <Icon image={logoIcon1} />
      <Icon image={logoIcon2} />
    </div>
  );
}

export default Logo;
