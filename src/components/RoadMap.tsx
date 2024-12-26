import RoadMapImage from "../assets/sec-2.png"

export default function RoadMap() {

    const RoadMap = [
        { 
            title : "Launch & Hype",
            features : [
                "Deploy the token on Solana or similar blockchain.",
                "Build a meme-worthy website and social channels (Twitter, Telegram, Discord).",
                "Airdrop tokens to early adopters.",
                "List on DEXs (Raydium, Orca, PancakeSwap).",
                "Kick off viral marketing: memes, contests, and influencer shout-outs."
            ]
        },
        {
            title : "Community Growth",
            features : [
                "Host meme competitions and giveaways.",
                "Partner with meme influencers and other projects.",
                "Launch a limited-edition NFT collection.",
                "Viral campaigns: trending challenges and hashtag raids.",
                "Optional: Celebrate milestones with manual burns."
            ]
        },
        {
            title : "Meme Legacy",
            features : [
                "Target mid-tier CEX listings.",
                "Launch a merch store (T-shirts, mugs, etc.).",
                "Optional: Create a Meme DAO for community decisions.",
                "Keep the memes alive, and let the community steer the ship!"
            ]
        }
    ]

  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-16 mb-8 p-4">
      <h1 className="md:text-[96px] text-[60px] text-[#66BB6A]">Roadmap</h1>
      <div className="boxes w-full flex flex-col gap-6 justify-center items-center">
        {
            RoadMap.map((value)=>{
                return (
                    <div className="box md:min-h-[224px] rounded-2xl border-black border-4 bg-[#FFA764] md:w-[80%] w-[90%] flex justify-center items-center gap-4">
                        <img src={RoadMapImage} alt="roadmap" className="hidden md:block h-[80%] w-[25%]" />
                        <div className="detail md:w-[70%] w-[80%] p-2">
                            <h1 className="md:text-[24px] text-[22px] md:mb-8 mb-4">{ value.title }</h1>
                            <ol>
                                {
                                    value.features.map((feature)=>{
                                        return <li className="md:text-[16px] text-[14px] list-disc">{ feature }</li>
                                    })
                                }
                            </ol>
                        </div>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}
