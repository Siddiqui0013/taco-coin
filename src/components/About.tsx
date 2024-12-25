import SecImg from "../assets/sec-2.png"

export default function About() {
  return (
    <div className="flex mx-auto justify-center w-[80%] items-center">
      <img src={SecImg} alt="sec-2" width={600} />
      <div className="about flex text-center flex-col gap-4">
        <h1 className="text-[96px] text-[#66BB6A]">About</h1>
        <p className="text-[24px] text-[#4E342E]">
        Taco Coin is the spiciest meme coin, combining fun, flavor, and financial opportunities! Inspired by tacos, it celebrates “spicy” trades and unites a vibrant community. With engaging rewards and good vibes, Taco Coin adds zest to your portfolio and the crypto scene. 🌮💰
        </p>
      </div>
    </div>
  )
}
