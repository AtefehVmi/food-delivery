import Icon from "./Icon";

function TextIcon({ children, image }) {
  return (
    <div className="flex gap-[10px]">
      <Icon image={image} />
      <span className="font-product-sans font-bold text-[16px] leading-normal text-color1">
        {children}
      </span>
    </div>
  );
}

export default TextIcon;
