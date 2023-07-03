import { Link } from "react-router-dom";
import { TbTrademark } from "react-icons/tb";
const Icon = () => {
  return (
    <>
      <Link className="relative" to="/">
        <span className="rounded-md font-yester tracking-widest w-32 pointer pt-2  px- flex justify-center text-white updpercase  font-bold items-center text-[18px]">
          PIPCOUNT
        </span>
        <span className="flex justify-center uppercase text-sm rounded bg-[#FC5C40] font-extrabold font-mono text-black">
          trading
        </span>
        <span
          className=" text-white bdg-white absolute right-0 pt-2 top-3"
          style={{ fodntSize: "3px" }}
        >
          <TbTrademark />
        </span>
      </Link>
    </>
  );
};

export default Icon;
