import { FiArrowLeft } from "react-icons/fi";
import { MdLocationPin } from "react-icons/md";
import { BsCartDash } from "react-icons/bs";



export default function Navbar() {
  return (
    <nav className='flex justify-between'>
        <div className='flex items-center gap-2'>
            <FiArrowLeft size={24} />
            <div>
                <h4 className='font-bold flex items-center'>Billekahalli <MdLocationPin /> </h4>
                <p className='font-[600] line-clamp-1 w-60'>Sarvabhoumanagar Billekahalli, BG Road, Bangalore, Karnataka - 560076</p>
            </div>
        </div>
        <div className='flex gap-3 items-center'>
            <img src='/icons/wallet.svg' width={24} />
            <BsCartDash size={24} />
        </div>
    </nav>
  )
}
