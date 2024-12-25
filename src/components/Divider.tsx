import Frame from "../assets/Frame.png"

export default function Divider() {
  return (
    <div className="footer min-w-full bg-[#FFEB3B] flex gap-4 border-black border-t-4 border-b-4 py-4 overflow-hidden justify-center items-center">
    { 
    Array.from({length : 10}).map((index)=>{
        return <img src={Frame} alt={`frame-${index}`} />
     })
    }
 </div>
  )
}
