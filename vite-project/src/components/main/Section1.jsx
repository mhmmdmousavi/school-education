import { FaGraduationCap } from "react-icons/fa6";

export default function Section1() {
    return ( 
        <div className="flex flex-col items-center">
            <p className="bg-white border-2 rounded-xl p-3 ">
                Children Deserve Bright Future
            </p>
            <h2 className="text-4xl font-semibold m-3">Our Benefits</h2>
            <span className="text-center">
                With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future.
            </span>
            <div className="flex flex-col min-md:flex-row">
                <div className=" flex flex-col bg-white m-4 p-4 border-2 rounded-xl items-center relative pt-8 mt-10 shadow-xl/20">
                    <div className="w-12 h-12 bg-orange-200 flex items-center justify-center border-2 rounded-xl absolute -top-5 left-5"><FaGraduationCap className="w-5 h-5"/></div>
                    <h3 className="text-2xl font-semibold p-3">Experienced Educators</h3>
                    <p>Our passionate and qualified teachers create a supportive and stimulating learning environment.</p>
                </div>
                <div className=" flex flex-col bg-white m-4 p-4 border-2 rounded-xl items-center relative pt-8 mt-10 shadow-xl/20">
                    <div className="w-12 h-12 bg-orange-200 flex items-center justify-center border-2 rounded-xl absolute -top-5 left-5"><FaGraduationCap className="w-5 h-5"/></div>
                    <h3 className="text-2xl font-semibold p-3">Experienced Educators</h3>
                    <p>Our passionate and qualified teachers create a supportive and stimulating learning environment.</p>
                </div>
                <div className=" flex flex-col bg-white m-4 p-4 border-2 rounded-xl items-center relative pt-8 mt-10 shadow-xl/20">
                    <div className="w-12 h-12 bg-orange-200 flex items-center justify-center border-2 rounded-xl absolute -top-5 left-5"><FaGraduationCap className="w-5 h-5"/></div>
                    <h3 className="text-2xl font-semibold p-3">Experienced Educators</h3>
                    <p>Our passionate and qualified teachers create a supportive and stimulating learning environment.</p>
                </div>
            </div>
            <div className="flex flex-col min-md:flex-row">
                <div className=" flex flex-col bg-white m-4 p-4 border-2 rounded-xl items-center relative pt-8 mt-10 shadow-xl/20">
                    <div className="w-12 h-12 bg-orange-200 flex items-center justify-center border-2 rounded-xl absolute -top-5 left-5"><FaGraduationCap className="w-5 h-5"/></div>
                    <h3 className="text-2xl font-semibold p-3">Experienced Educators</h3>
                    <p>Our passionate and qualified teachers create a supportive and stimulating learning environment.</p>
                </div>
                <div className=" flex flex-col bg-white m-4 p-4 border-2 rounded-xl items-center relative pt-8 mt-10 shadow-xl/20">
                    <div className="w-12 h-12 bg-orange-200 flex items-center justify-center border-2 rounded-xl absolute -top-5 left-5"><FaGraduationCap className="w-5 h-5"/></div>
                    <h3 className="text-2xl font-semibold p-3">Experienced Educators</h3>
                    <p>Our passionate and qualified teachers create a supportive and stimulating learning environment.</p>
                </div>
                <div className=" flex flex-col bg-white m-4 p-4 border-2 rounded-xl items-center relative pt-8 mt-10 shadow-xl/20">
                    <div className="w-12 h-12 bg-orange-200 flex items-center justify-center border-2 rounded-xl absolute -top-5 left-5"><FaGraduationCap className="w-5 h-5"/></div>
                    <h3 className="text-2xl font-semibold p-3">Experienced Educators</h3>
                    <p>Our passionate and qualified teachers create a supportive and stimulating learning environment.</p>
                </div>
            </div>
        </div>
     );
}

