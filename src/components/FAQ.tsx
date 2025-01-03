import { useState } from "react"
import FAQImg from "../assets/fAQ.png"

export default function FAQ() {

    const FAQs = [
        {
            question : "What is Taco ?",
            answer : "Taco is a decentralized finance (DeFi) token that aims to provide a decentralized platform for users to earn passive income."
        },
        {
            question : "What is Taco ?",
            answer : "Taco is a decentralized finance (DeFi) token that aims to provide a decentralized platform for users to earn passive income."
        },
        {
            question : "What is Taco ?",
            answer : "Taco is a decentralized finance (DeFi) token that aims to provide a decentralized platform for users to earn passive income."
        }
    ]

    const [selected, setSelected] = useState<number | null>(null)

  return (
    <div className="">
                <h1 className="md:text-[96px] text-[60px] text-center text-[#66BB6A] mt-4">FAQ</h1>
                <div className="flex items-end justify-center mx-auto px-8 gap-4  w-full">
        <div className="box1 md:w-[50%] w-[90%] ">
            {
                FAQs.map((faq, index) => {
                    return (
                        <div className="w-full flex flex-col border-black border-4 p-4 rounded-2xl bg-[#FFA726] items-start justify-center my-4" 
                        key={index} onClick={() => selected === index ? setSelected(null) : setSelected(index)}>
                            <h1 className="md:text-[24px] text-[20px] text-[#4E342E]">{faq.question}</h1>
                            {
                                selected === index && <p className="text-[#4E342E]">{faq.answer}</p>
                            }
                        </div>
                    )
                })
            }
        </div>
        <div className="box2 mb-4 md:block hidden">
            <img src={FAQImg} alt="FAQ" className="w-[400px] h-[400px] object-cover rounded-lg" />
        </div>
    </div>

    </div>
  )
}
