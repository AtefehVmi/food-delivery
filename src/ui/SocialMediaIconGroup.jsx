import Icon from "./Icon";

import socialmediaIcons from "../assets/svgs/socialmediaIcons.svg";

function SocialMediaIconGroup() {
  return (
    <div className="w-[172px] h-[20px] flex ml-[40px]">
      <Icon image={socialmediaIcons} />
    </div>
  );
}

export default SocialMediaIconGroup;
