import angryEmoji from "../../../public/Images/angry.png"
import laughingEmoji from "../../../public/Images/laughing.png"
import sadEmoji from "../../../public/Images/sad.png"
import thinkingEmoji from "../../../public/Images/thinking.png"
import Image from "next/image";
const Carousel = () => {

  return (
    <section className="mx-10 mt-20">
        <h3 className="text-5xl font-bold p-8 mb-12">Does this sound familiar...</h3>
        <div className="flex items-center gap-10 justify-center">
            <div className="w-[21rem] px-8 py-7 rounded-xl mb-5 h-[20rem] bg-[#D8F2FF]">
                <Image src={laughingEmoji} alt="emoji" width={50} height={50} className="my-6"/>
                <p className="font-bold text-xl mb-2">quabble with your partner</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptate quasi dolor tempore labore ea inventore.</p>
            </div>
            
            <div className="w-[21rem] px-8 py-7 rounded-xl mb-5 h-[20rem] bg-[#EEEBFE]">
                <Image src={angryEmoji} alt="emoji" width={50} height={50} className="my-6"/>
                <p className="font-bold text-xl mb-2">You argue with a colleague</p>
                <p>You get angry and defensive, instead of staying open and working towards common ground adipisicing elit voluptate quasi dolor tempore labore .</p>
            </div>


            <div className="w-[21rem] px-8 py-7 rounded-xl mb-5 h-[20rem] bg-[#6341EF] text-white -rotate-12">
                <Image src={sadEmoji} alt="emoji" width={50} height={50} className="my-6"/>
                <p className="font-bold text-xl mb-2">You get a promotion at work</p>
                <p>You question yourself and wonder when they will realize you are an unqualified imposter, instead of trusting yourself & your abilities.</p>
            </div>


            <div className="w-[21rem] px-8 py-7 rounded-xl mb-5 h-[20rem] bg-[#FFEFD5]">
                <Image src={thinkingEmoji} alt="emoji" width={50} height={50} className="my-6"/>
                <p className="font-bold text-xl mb-2">You attend a class</p>
                <p>You compare yourself with your achievements, instead of self-judgement more independent to others.</p>
            </div>
        </div>
    </section>
  )
}

export default Carousel