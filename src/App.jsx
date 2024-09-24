import Card from "./ui/Card";
import Category from "./ui/Category";
import Header from "./ui/Header";
import Restaurants from "./ui/Restaurants";
import Search from "./ui/Search";
import bg_gradiant1 from "./assets/svgs/bg_gradiant1.svg";
import bg_gradiant2 from "./assets/svgs/bg_gradiant2.svg";
import bg_gradiant3 from "./assets/svgs/bg_gradiant3.svg";

import slider from "./assets/svgs/slider.svg";
import bg2 from "./assets/svgs/bg2.svg";

function App() {
  return (
    <div className="w-[1440px] h-[931px] flex items-center justify-center relative">
      <img
        src={bg_gradiant1}
        alt="bg-gradiant1"
        className="absolute top-[-24px] left-[222px] w-[288px] h-[284px]"
      />
      <img
        src={bg_gradiant2}
        alt="bg-gradiant2"
        className="absolute top-[96px] left-[-54px] w-[288px] h-[284px]"
      />
      <img
        src={bg_gradiant3}
        alt="bg-gradiant3"
        className="absolute bottom-0 right-0 w-[289px] h-[289px]"
      />

      <header className="absolute z-30 top-[36px] mx-[60px]">
        <Header />
      </header>

      <main className="w-[1380px] h-[831px] rounded-[30px] bg-mainBackground backdrop-blur-customMain flex-shrink-0 absolute z-10">
        <Search />
        <Category />
        <Restaurants />
        <div className="flex gap-[16px] absolute top-[585px] left-[55px]">
          <Card />
          <Card />
        </div>
      </main>

      <footer className="flex absolute top-[769px] left-[1095px] font-product-sans text-[14px] font-normal leading-normal z-30">
        <div className="mr-[28px]">Applications</div>
        <div className="mr-[34px]">Privacy</div>
        <div>Terms</div>
      </footer>

      <div className="flex absolute top-0 right-0 z-10">
        <img src={bg2} alt="yellow-bg" />
        <img
          src={slider}
          alt="burger with thumb"
          className="absolute top-[205px]"
        />
      </div>
    </div>
  );
}

export default App;
