import Image from "next/image"
import logo from "../../../public/Images/logo.png"

const Nav = () => {
  return (
    <>
        <nav className="flex items-center justify-around my-4">
            <div>
                <Image 
                src={logo} 
                width={60}
                height={60}
                alt="logo"
                />
            </div>

            <div>
                <ul className="flex items-center gap-12">
                    <li><a href="#">Emotions</a></li>
                    <li><a href="#">Manifesto</a></li>
                    <li><a href="#">Self-awareness test</a></li>
                    <li><a href="#">Work With Us</a></li>
                </ul>
            </div>
            <div>
                <button className="bg-black text-white px-8 py-4 rounded-full">Download app</button>
            </div>
        </nav>
    </>
  )
}

export default Nav