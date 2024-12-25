import hero from "../assets/hero.png"
export default function Hero() {
  return (
    <>
        <div className="flex flex-row justify-around items-center">
        <div className="box flex gap-4 flex-col justify-center items-start mx-8 w-[40%]">
            <h1 className="text-[128px] text-[#66BB6A]">$TACO</h1>
            <p className="text-[24px] text-[#4E342E]">Adding Flavor to Crypto: A Taco-Themed Coin for Spicy Trades!</p>
            <p className="text-[24px] text-[#F44336] mt-4">Token Address</p>
            <div className="address relative">
                <div className="w-[100%] py-4 border-black border-b-4 border-r-4 px-4 rounded-lg border">
                  fgjreigrwhueht8438rhfuhfshfuhfuhrewfuh
                </div>
                <button className="absolute right-2 top-2 h-10 px-4 bg-[#66BB6A] poppins text-white rounded-lg">Copy</button>  
            </div>
            <button className="h-14 mt-8 px-4 bg-[#FFA726] poppins text-white rounded-md border-black border-b-4 border-r-4">Buy $TACO</button>

        </div>
        <div className="flex justify-center items-start mx-8 w-[40%] relative">
            <img src={hero} width={500} alt="taco" />
            <button className="absolute -rotate-45 top-8 left-0 h-16 w-52 mt-8 px-4 bg-[#FFA726] text-black rounded-2xl border-black border-4">Spicy Taco</button>
        </div>
    </div>
    </>

  )
}
