export default function Banner() {
    return (
        <div className="flex flex-col mt-8 items-center m-6 min-md:flex-row ">
            <img className="mb-6" src="../../../public/imageContainer.png" alt="" />
            <div className="flex flex-col items-center min-md:items-start ml-4">
                <span className="underline mb-2">Welcome to Little Learners Academy</span>
                <h2 className="text-4xl text-center font-bold mb-6 min-md:text-left">Where Young Minds Blossom and <span className="text-orange-300">Dreams Take Flight.</span> </h2>
                <p className="text-center mb-10 min-md:text-left">Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!</p>
                <div className="w-11/12 bg-orange-200 rounded-xl flex flex-col items-center justify-between gap-6 p-8 border-2 shadow-xs shadow-orange-500 mb-6 min-md:flex-row">
                    <div className="flex flex-col items-center justify-between gap2 border-b-2 w-10/12 pb-6 min-md:border-none min-md:pb-0">
                        <p>+7000</p>
                        <span>Students Passed Out</span>
                    </div>
                    <div className="flex flex-col items-center justify-between gap2 border-b-2 w-10/12 pb-6 min-md:border-none min-md:pb-0">
                        <p>+7000</p>
                        <span>Students Passed Out</span>
                    </div>
                    <div className="flex flex-col items-center justify-between gap2 w-10/12">
                        <p>+7000</p>
                        <span>Students Passed Out</span>
                    </div>
                </div>
            </div>
        </div>
      );
}

