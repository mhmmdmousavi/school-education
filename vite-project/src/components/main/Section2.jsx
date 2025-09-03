import { FaGraduationCap } from "react-icons/fa6";

export default function Section2() {
    return ( 
        <div className="flex flex-col items-center pt-20">
            <p className="bg-white border-2 rounded-xl p-3 ">
                Their Happy Words 🤗         
            </p>
            <h2 className="text-4xl font-semibold m-3">Our Testimonials</h2>
            <span className="text-center">
                Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally.           
            </span>
            <div className="flex flex-col min-md:flex-row">
                <div className=" flex flex-col bg-white m-4 p-4 border-2 rounded-xl items-center relative pt-8 mt-10 shadow-xl/20">
                    <div className="w-12 h-12 bg-orange-200 flex items-center justify-center border-2 rounded-xl -top-5 left-5"><img src="../../../public/Icon.svg" alt="" /></div>
                    <h3 className="text-2xl font-semibold p-3">Jennifer B</h3>
                    <div className="w-40 h-12 bg-white flex items-center justify-center border-none"><img src="../../../public/stars.svg" alt="" /></div>      
                    <p>Our passionate and qualified teachers create a supportive and stimulating learning environment.</p>
                </div>
                <div className=" flex flex-col bg-white m-4 p-4 border-2 rounded-xl items-center relative pt-8 mt-10 shadow-xl/20">
                    <div className="w-12 h-12 bg-orange-200 flex items-center justify-center border-2 rounded-xl -top-5 left-5"><img src="../../../public/Icon.svg" alt="" /></div>
                    <h3 className="text-2xl font-semibold p-3">Jennifer B</h3>
                    <div className="w-40 h-12 bg-white flex items-center justify-center border-none"><img src="../../../public/stars.svg" alt="" /></div>                    
                    <p>Our passionate and qualified teachers create a supportive and stimulating learning environment.</p>
                </div>
                <div className=" flex flex-col bg-white m-4 p-4 border-2 rounded-xl items-center relative pt-8 mt-10 shadow-xl/20">
                    <div className="w-12 h-12 bg-orange-200 flex items-center justify-center border-2 rounded-xl -top-5 left-5"><img src="../../../public/Icon.svg" alt="" /></div>
                    <h3 className="text-2xl font-semibold p-3">Jennifer B</h3>
                    <div className="w-40 h-12 bg-white flex items-center justify-center border-none"><img src="../../../public/stars.svg" alt="" /></div>
                    <p>Our passionate and qualified teachers create a supportive and stimulating learning environment.</p>
                </div>
            </div>
        </div>
     );
}

