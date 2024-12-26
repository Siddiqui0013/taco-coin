import Frame from "../assets/Frame.png"

export default function Divider() {
  return (
    <div className="footer min-w-full bg-[#FFEB3B] flex gap-4 border-black border-t-4 border-b-4 py-4 overflow-hidden justify-center items-center">
    { 
    Array.from({length : 12}).map((index)=>{
        return <img src={Frame} className="w-[90px] md:w-[300px] md:h-[60px] h-[30px]" alt={`frame-${index}`} />
     })
    }
 </div>
  )
}
