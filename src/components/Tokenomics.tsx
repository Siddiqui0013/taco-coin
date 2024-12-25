
export default function Tokenomics() {

    const tokenomics = [
        {
            title : "Liquidty Pool",
            description : "5%",
            rotate : "-rotate-3",
            bg : "bg-[#FFA726]"
        },
        {
            title : "Team",
            description : "10%",
            rotate : "rotate-3",
            bg : "bg-[#F4D06F]"
        },
        {
            title : "Advisors",
            description : "10%",
            rotate : "-rotate-3",
            bg : "bg-[#F4D06F]"
        },
        {
            title : "Marketing",
            description : "10%",
            rotate : "rotate-3",
            bg : "bg-[#F4D06F]"
        },
    ]

  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-16 mb-8 p-4">
        <h1 className="text-[96px] text-[#66BB6A]">Tokenomics</h1>
        <div className="w-full flex flex-col gap-12 justify-center items-center">
            {
                tokenomics.map((value)=>{
                    return (
                        <div className={`${value.bg} border-black border-4 w-[80%] flex justify-between items-center py-4 px-8 rounded-2xl ${value.rotate}` }>
                            <h1 className="text-[32px] ">{value.title}</h1>
                            <p className="text-[32px] ">{value.description}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
