import { useState } from "react"
import hero from "../assets/hero.png"
export default function Hero() {
  
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = async () => {
    try {
      const text = document.querySelector('.address .overflow-hidden')?.textContent;
      if (text) {
        await navigator.clipboard.writeText(text);
      } else {
        throw new Error('No text found to copy');
      }
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      setCopySuccess(false);
    }
  };

  return (
    <>
        <div className="flex md:flex-row flex-col md:mb-2 mb-10 justify-around items-center">
        <div className="flex gap-4 flex-col relative justify-center items-start md:mx-8 w-[90%] md:w-[40%]">
            <h1 className="md:text-[128px] text-[60px] text-[#66BB6A]">$TACO</h1>
            <p className="md:text-[24px] text-[20px] text-[#4E342E]">Adding Flavor to Crypto: A Taco-Themed Coin for Spicy Trades!</p>
            <p className="text-[24px] text-[#F44336] mt-4">Token Address</p>
            <div className="address md:w-[100%] w-[80%] relative">
                <div className=" overflow-hidden py-4 border-black border-b-4 border-r-4 px-2 rounded-lg border">
                  fgjreigrwhueht8438rhfuhfshfuhfuhrewfuh
                </div>
                <button 
                onClick={handleCopy}
                className="absolute md:right-2 right-1 top-2 h-10 px-4 bg-[#66BB6A] poppins text-white rounded-lg">
                  {copySuccess ? 'Copied!' : 'Copy'}
                </button>  
            </div>
            <button className="h-14 md:mt-8 my-2 px-4 bg-[#FFA726] poppins text-white rounded-md border-black border-b-4 border-r-4">Buy $TACO</button>
       
       <img src={hero} className="md:hidden w-[100px] absolute -bottom-7 right-0" alt="" />

        </div>

        
        <div className="justify-center hidden md:flex items-start mx-8 w-[40%] relative">
            <img src={hero} width={500} alt="taco" />
            <button className="absolute -rotate-[35deg] top-8 left-6 h-16 w-52 mt-8 px-4 bg-[#FFA726] text-black rounded-2xl border-black border-4">Spicy Taco</button>
        </div>
    </div>
    </>

  )
}
