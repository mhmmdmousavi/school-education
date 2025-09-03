import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { IoIosCloseCircle } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";

export default function Nav() {
    const [isopen, setisopen] = useState(false)
  return (<>
    <div className="flex flex-row bg-orange-200 w-3/4 place-self-center h-20 rounded-xl border-2 mt-10 overflow-hidden justify-between items-center min-md:w-23/24 min-md:bg-white">
      <img
        className="w-6/12 shrink object-cover h-full min-md:w-2/10"
        src="../../../public/LogoContainer.png"
        alt=""
      />
      <button onClick={() => setisopen(!isopen)} className="basis-3/12 h-full flex flex-row items-center justify-end pr-5 min-md:hidden">
        {isopen ? <IoIosCloseCircle className="h-10 text-3xl"/>  : <RiMenu3Fill className="h-10 text-3xl"/>}
      </button>
      <div className="max-md:hidden flex flex-row justify-between w-6/10 h-full items-center">
        <p className="">home</p>
        <p className="">home</p>
        <p className="">home</p>
        <p className="">home</p>
        <p className="">home</p>
        <p className="bg-orange-300 h-full text-center w-1/6 leading-18">home</p>
      </div>
    </div>
      {isopen&&(<ul className="flex flex-col fixed top-0 left-0 bg-orange-300 p-10 rounded-r-xl border-2 h-6/12 gap-4 min-md:hidden">
        <button onClick={() => setisopen(!isopen)}><FaArrowLeft /></button>
        <li><a href="#">home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Academics</a></li>
        <li><a href="#">Admissions</a></li>
        <li><a href="#">Student Life</a></li>

      </ul>)}</>
  );
}
