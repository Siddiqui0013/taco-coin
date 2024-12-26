import FooterImg from '../assets/Footer.png';

export default function Footer() {
  return (
    <div className="bg-[#FFB850] flex items-center justify-around w-full md:px-20 px-4 py-8">
      <div className="md:w-[40%] hidden md:block">
      <img src={FooterImg} alt="Footer" className="w-[400px] object-cover rounded-lg" />
      </div>
        <div className="md:w-[50%] w-[90%] text-center">
            <h1 className="text-[#66BB6A] md:text-[96px] text-[50px]">Taco Coin</h1>
            <p className="text-white md:text-[40px] text-[24px] mt-4">
              Taco is a decentralized finance (DeFi) token that aims to provide a decentralized platform for users to earn passive income.</p>
              <div className="last flex items-center justify-center gap-4">
              <img src={FooterImg} className="md:hidden w-[100px]" alt="" />
              <button className="h-14 mt-8 px-4 bg-[#FFA726] text-white poppins rounded-md border-black border-b-4 border-r-4">Join Community</button>
              </div>
        </div>
    </div>
  )
}
