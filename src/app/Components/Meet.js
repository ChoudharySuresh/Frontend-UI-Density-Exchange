import Image from "next/image"
import ghostLogo from "@/../../public/Images/spooky-ghost.png"

const Meet = () => {
  return (
    <section className='bg-[#FEF7F1] px-10 py-20 mx-10 mt-[13rem] mb-12 rounded-[2rem] relative'>
        <div>
            <h3 className='text-base mb-4'>Built out of frustration</h3>
            <h2 className='text-6xl font-bold'>Meet the ahead app</h2>
        </div>


        <div className="flex justify-center gap-80 items-center mt-12">

          <div className="flex gap-40 items-end z-20">

            <div className="w-[15rem] h-[15rem]  bg-[#F6F6F6] rounded-full relative flex items-center justify-center">
                <div className="w-[12rem] h-[12rem] bg-[#DBC0F3] rounded-full absolute flex items-center justify-center">
                    <Image src={ghostLogo} width={100} height={100} alt="ghostimg" />
                </div>
            </div>

            <div className="w-[10rem] h-[8rem] flex flex-col-reverse gap-8  relative">
              <div className="w-[4rem] h-[4rem] bg-[#F7D3BD] rounded-full relative flex items-center justify-center">
                <div className="w-[2rem] h-[2rem] bg-[#EB695A] rounded-full absolute flex items-center justify-center"></div>
              </div>

              <div className="w-[3.5rem] h-[1.5rem] bg-[#74C699] rounded-t-full absolute top-6 left-10 -rotate-[25deg]"></div>

              <div className="w-[2rem] h-[2rem] rounded-full bg-[#F3C7C8] absolute right-0 top-0"></div>
            </div>

          </div>

          <div>
            <p className="text-xl">A personalized pocket coach that provides bite- <br /> sized, science-driven tools to boost emotional <br />intelligence.</p>
            <p className="text-xl mt-6">Think of it as a pocket cheerleader towards a <br />better, more fulfilling.</p>

          </div>
        </div>

        <div className="w-[15rem] h-[10rem] bg-[#FAE8DC] rounded-t-full rotate-90 absolute top-[20rem] -left-[2.5rem] z-10"></div>
    </section>
  )
}

export default Meet