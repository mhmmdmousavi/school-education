import { RiMenu3Fill } from "react-icons/ri";

export default function Nav() {
  return (
    <div className="flex flex-row bg-orange-200 w-3/4 place-self-center h-20 rounded-xl border-2 mt-10 overflow-hidden justify-between items-center">
      <img
        className="basis-6/12 shrink object-cover h-full"
        src="../../../public/LogoContainer.png"
        alt=""
      />
      <div className="basis-3/12 h-full flex flex-row items-center justify-end pr-5">
        <RiMenu3Fill className="h-10 text-3xl"/>
      </div>
    </div>
  );
}
