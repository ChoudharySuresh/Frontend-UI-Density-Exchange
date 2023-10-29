import Image from "next/image"
import appleIcon from "../../../public/Images/AppleLogo.png";
import uiScreen from "@/../../public/Images/mobileScreen.png"
import { BsFillStarFill } from "react-icons/bs";
const Hero = () => {
  return (
    <header className="bg-[#ddd6fe] p-6 mx-10 rounded-2xl flex items-center justify-between">
        <div>
            <p className="font-semibold">Ahead App</p>
            <h1 className="text-7xl font-bold tracking-normal mt-4">Master your life <br /> by mastering <br /> emotions </h1>

            <div className="flex items-center gap-8 mt-10">
                <div className="bg-black text-white flex items-center gap-2 rounded-md px-3 py-1 cursor-pointer">
                    <Image src={appleIcon} alt="appleIcon" width={30} height={30}/>
                    <div className="items-start">
                        <p className="text-xs tracking-wide">Download on the</p>
                        <h2 className="text-xl tracking-wide">App Store</h2>
                    </div>
                </div>

                

                <div>
                    <div className="flex items-center gap-3">
                        <BsFillStarFill color="yellow" size={"1.3rem"}/>
                        <BsFillStarFill color="yellow" size={"1.3rem"}/>
                        <BsFillStarFill color="yellow" size={"1.3rem"}/>
                        <BsFillStarFill color="yellow" size={"1.3rem"}/>
                        <BsFillStarFill color="yellow" size={"1.3rem"}/>
                    </div>

                    <p className="mt-2">100+ AppStore reviews</p>
                </div>
            </div>
        </div>


        <div>
            <div className="w-[35rem] h-[35rem] border-2 border-dashed border-white rounded-full relative flex items-center justify-center">
                <div className="w-[25rem] h-[25rem] bg-[#c4b5fd] rounded-full absolute">
                    <Image src={uiScreen} width={520} height={520} alt="appui"/>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Hero