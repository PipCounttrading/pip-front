import { Link } from "react-router-dom";
import { TbTrademark } from "react-icons/tb";
const WhiteIcon = () => {
  return (
    <>
      <Link
        to="/"
        className="rounded-xl shadow-md w-40 boerder-red-600 border-2 bg-black pointer py-2 relative px- flex flex-col justify-center text-xs text-whidte updpercase m-3 font-bold text-white items-center text-[18px]"
      >
        <span className="text-sm ">PIPCOUNT</span>
        <span className="font-bold mt-d1 uppercase tracking-wider bg-[#FC5C40] px-5 rounded-md py-1">
          Trading
        </span>
        <span
          className=" text-white bdg-white absolute right-5 pt-2 top-1"
          style={{ fodntSize: "3px" }}
        >
          <TbTrademark />
        </span>
      </Link>
    </>
  );
};

export default WhiteIcon;
