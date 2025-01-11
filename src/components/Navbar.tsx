import { FiArrowLeft } from "react-icons/fi";
import { MdLocationPin } from "react-icons/md";
import { BsCartDash } from "react-icons/bs";

export default function Navbar() {
  return (
    <nav className="flex justify-between default-margin">
      <div className="flex items-center gap-2">
        <FiArrowLeft size={24} />
        <div>
          <h4 className="font-bold flex items-center">
            Billekahalli <MdLocationPin />{" "}
          </h4>
          <p className="font-[600] line-clamp-1 w-48">
            Sarvabhoumanagar Billekahalli, BG Road, Bangalore, Karnataka -
            560076
          </p>
        </div>
      </div>
      <div className="flex gap-6 items-center">
        <div className="relative">
          <span className="absolute text-sm top-0 left-3 bg-blue-600 text-white rounded-2xl px-1">
            4529
          </span>
          <img src="/icons/wallet.svg" width={32} />
        </div>
        <div className="relative">
          <span className="absolute text-sm top-[-5px] left-5 bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center">
            1
          </span>
          <BsCartDash size={32} />
        </div>
      </div>
    </nav>
  );
}
