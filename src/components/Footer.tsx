import FooterImg from '../assets/Footer.png';

export default function Footer() {
  return (
    <div className="bg-[#FFB850] flex items-center justify-center w-full px-4 py-8">
        <img src={FooterImg} alt="Footer" className="w-[400px] object-cover rounded-lg" />
        <div className="details">
            <h1 className="text-[#4E342E] text-[24px] font-bold">Taco Coin</h1>
            <p className="text-[#4E342E] text-[16px]">Taco is a decentralized finance (DeFi) token that aims to provide a decentralized platform for users to earn passive income.</p>
        </div>
    </div>
  )
}
