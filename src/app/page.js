import Nav from "@/app/Components/Nav"
import Hero from "./Components/Hero"
import Beats from "@/app/Components/Beats"
import Carousel from "@/app/Components/Carousel"
import Meet from "@/app/Components/Meet"

export default function Home() {
  return (
    <main>
      <Nav/>
      <Hero/>
      <Beats/>
      <Carousel/>
      <Meet/>
    </main>
  )
}
