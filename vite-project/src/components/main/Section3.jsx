import { FaGraduationCap } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

export default function Section3() {
    return ( 
        <div className="flex flex-col items-center pt-20">
            <p className="bg-white border-2 rounded-xl p-3">
                Explore More
            </p>
            <h2 className="text-4xl font-semibold m-3">Navigate through our Pages</h2>
            <span className="text-center m-3 min-md:w-4/10">
                Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school            </span>
            <div className="flex flex-col min-md:flex-row">
                <div className=" flex flex-col bg-white m-4 p-4 border-2 rounded-xl items-center relative pt-8 mt-10 shadow-xl/20 gap-2">
                    <h3 className="text-2xl font-semibold p-3">About Us</h3>
                    <img src="../../../public/dash-line.svg" alt="" />
                    <p>Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.</p>
                    <button className="flex flex-row items-center gap-3 m-4 bg-orange-200 border-2  w-10/12 p-3 rounded-xl justify-center shadow-xl/20">
                        Learn More <FaArrowRight />
                    </button>
                </div>
                <div className=" flex flex-col bg-white m-4 p-4 border-2 rounded-xl items-center relative pt-8 mt-10 shadow-xl/20 gap-2">
                    <h3 className="text-2xl font-semibold p-3">About Us</h3>
                    <img src="../../../public/dash-line.svg" alt="" />
                    <p>Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.</p>
                    <button className="flex flex-row items-center gap-3 m-4 bg-orange-200 border-2  w-10/12 p-3 rounded-xl justify-center shadow-xl/20">
                        Learn More <FaArrowRight />
                    </button>  
                </div>
            </div>
            <div className="flex flex-col min-md:flex-row ">
                <div className=" flex flex-col bg-white m-4 p-4 border-2 rounded-xl items-center relative pt-8 mt-10 shadow-xl/20 gap-2">
                    <h3 className="text-2xl font-semibold p-3">About Us</h3>
                    <img src="../../../public/dash-line.svg" alt="" />
                    <p>Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.</p>
                    <button className="flex flex-row items-center gap-3 m-4 bg-orange-200 border-2  w-10/12 p-3 rounded-xl justify-center shadow-xl/20">
                        Learn More <FaArrowRight />
                    </button>
                </div>
                <div className=" flex flex-col bg-white m-4 p-4 border-2 rounded-xl items-center relative pt-8 mt-10 shadow-xl/20 gap-2">
                    <h3 className="text-2xl font-semibold p-3">About Us</h3>
                    <img src="../../../public/dash-line.svg" alt="" />
                    <p>Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.</p>
                    <button className="flex flex-row items-center gap-3 m-4 bg-orange-200 border-2  w-10/12 p-3 rounded-xl justify-center shadow-xl/20">
                        Learn More <FaArrowRight />
                    </button>  
                </div>
            </div>
        </div>
     );
}

