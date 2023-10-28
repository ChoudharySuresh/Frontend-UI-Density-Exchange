import Card from "@/app/Components/Card"
import angryEmoji from "../../../public/Images/angry.png"
import laughingEmoji from "../../../public/Images/laughing.png"
import sadEmoji from "../../../public/Images/sad.png"
import thinkingEmoji from "../../../public/Images/thinking.png"
const Carousel = () => {

    const cardData = 
    [
        {
            id:1,
            emoji : laughingEmoji,
            heading:"quabble with your partner",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptate quasi dolor tempore labore ea inventore.",
        },
        {
            id:2,
            emoji : angryEmoji,
            heading:"You argue with a colleague",
            text:"You get angry and defensive, instead of staying open and working towards common ground adipisicing elit voluptate quasi dolor tempore labore .",
        },
        {
            id:1,
            emoji : sadEmoji,
            heading:"You get a promotion at work",
            text:"You question yourself and wonder when they'll realize you're an unqualified imposter, instead of trusting yourself & your abilities.",
        },
        {
            id:1,
            emoji : thinkingEmoji,
            heading:"You attend a class",
            text:"You compare yourself with your achievements, instead of self-judgement more independent to others.",
        },

    ]
  return (
    <section className="mx-10 my-8">
        <h3 className="text-5xl font-bold p-8 mb-12">Does this sound familiar...</h3>
        <div className="flex items-center gap-4 justify-center">
        {
            cardData.map((item) => (
                <div key={item.id}>
                    <Card id={item.id} icon={item.emoji} heading={item.heading} para={item.text}/>
                </div>
            ))
        }
        </div>
    </section>
  )
}

export default Carousel