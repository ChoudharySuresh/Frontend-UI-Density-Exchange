import Image from "next/image";

const Card = (props) => {
    const {id , icon , heading , para} = props;
    
  return (
    <div className={`bg-[#bfdbfe] w-[21rem] px-8 py-7 rounded-xl mb-5 min-[15rem]`}>
        <Image src={icon} alt="emoji" width={50} height={50} className="my-6"/>
        <p className="font-bold text-xl mb-2">{heading}</p>
        <p>{para}</p>
    </div>
  )
}

export default Card