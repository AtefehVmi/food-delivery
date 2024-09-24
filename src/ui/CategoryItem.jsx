function CategoryItem({ image, children }) {
  return (
    <div className="w-[100px] h-[150px] flex-shrink-0 rounded-[100px] bg-secondary1 flex flex-col items-center justify-evenly">
      <img src={image} alt="food logo" />
      <span className="leading-normal font-product-sans font-bold text-[16px] text-color1 text-center">
        {children}
      </span>
    </div>
  );
}

export default CategoryItem;
