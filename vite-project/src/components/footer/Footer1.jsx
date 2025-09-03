import { IoMdMail } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";

export default function Footer1() {
  return (
    <footer className="bg-white flex flex-col m-4 rounded-xl border-2 shadow-xl/20 pt-10 min-md:p-10 min-md:mt-20">
      <section className="flex flex-col items-center m-4 gap-8 min-md:flex-row min-md:items-start">
        <div className="w-full flex flex-col items-center gap-2 underline-offset-2 min-md:items-start min-md:w-5/12 min-md:justify-start">
          <img src="../../../public/Logo.svg" alt="" />
          <p className="text-center min-md:text-left">
            We believe in the power of play to foster creativity,
            problem-solving skills, and imagination.
          </p>
          <div className="flex flex-row items-center justify-self-start w-full mt-5">
            <IoMdMail className="w-8 h-8 bg-orange-100 p-1 border-1 rounded-md mr-2" />
            <span>hello@littlelearners.com</span>
          </div>
          <div className="flex flex-row items-center justify-self-start w-full">
            <IoMdMail className="w-8 h-8 bg-orange-100 p-1 border-1 rounded-md mr-2" />
            <span>hello@littlelearners.com</span>
          </div>
          <div className="flex flex-row items-center justify-self-start w-full">
            <IoMdMail className="w-8 h-8 bg-orange-100 p-1 border-1 rounded-md mr-2" />
            <span>hello@littlelearners.com</span>
          </div>
        </div>
        <div className="flex flex-row justify-between p-3 w-full min-md:w-3/12 items-start">
          <div className="flex flex-col gap-3">
            <p className="text-lg font-semibold">Home</p>
            <p className="text-lg">Features</p>
            <p className="text-lg">Our Testimonials</p>
            <p className="text-lg">FAQ</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-lg font-semibold">Academics</p>
            <p className="text-lg">Special Features</p>
            <p className="text-lg">Gallery</p>
          </div>
        </div>
        <div className="flex flex-row w-full justify-between p-3 min-md:w-3/12">
          <div className="flex flex-col gap-3">
            <p className="text-lg font-semibold">About Us</p>
            <p className="text-lg">Our Mission</p>
            <p className="text-lg">Our Vission</p>
            <p className="text-lg">Awards and Recognitions</p>
            <p className="text-lg">History</p>
            <p className="text-lg">Teachers</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-lg font-semibold">Contact Us</p>
            <p className="text-lg">Information</p>
            <p className="text-lg">Map & Direction</p>
          </div>
        </div>
      </section>
      <div className="w-full flex flex-col items-center p-4">
        <div class="w-[80%] h-px bg-black my-4"></div>
        <div className="flex flex-row w-full  max-md:flex max-md:flex-col  min-md:w-10/12">
            <div className="flex flex-row justify-between w-full min-md:justify-start min-md:gap-4 min-md:items-center">
            <p>Terms of Service</p>
            <p>Terms of Service</p>
            <p>Terms of Service</p>
            </div>

            <div className="flex flex-row w-full justify-center gap-2 m-5 min-md:justify-end">
            <FaFacebookSquare className="bg-orange-200 w-18 h-18 p-5 border-2 rounded-xl" />
            <FaFacebookSquare className="bg-orange-200 w-18 h-18 p-5 border-2 rounded-xl" />
            <FaFacebookSquare className="bg-orange-200 w-18 h-18 p-5 border-2 rounded-xl" />
            </div>
        </div>
        <div class="w-[80%] h-px bg-black my-4"></div>
      </div>
      <div className="w-full px-5">
        <p className="text-center">
          Copyright © [2023] Little Learners Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
