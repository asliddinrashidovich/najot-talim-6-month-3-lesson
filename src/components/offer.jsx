import { offer } from "../constants/data"

function Offer() {
  return (
    <div className="max-w-[1170px] mx-auto px-[30px] mb-[120px]">
        <h2 className="text-[40px] font-[700] leading-[100%] text-[#3D3D3F] text-center mb-[105px]">What Service We’re Offering
        </h2>
        <div className="rounded-[17px] w-full  md:flex-row flex-col  gap-[100px] md:gap-[50px] flex justify-between">
            {offer.map(item => (
                <div key={item.count} className="card text-center rounded-[23px] px-[30px] flex flex-col items-center">
                    <div style={{backgroundColor: item.color}} className={`w-[100px] rounded-full translate-y-[-50%] mb-[23px] flex justify-center items-center h-[100px] bg-[#555]`}>
                        <img src={item.image} alt={item.text} />
                    </div>
                    <h2 className="text-[#3D3D3F] text-[24px] font-[700] translate-y-[-30px]" >{item.title}</h2>
                    <p className="text-[16px] font-[400] leading-[26px]  text-[#3D3D3F] mb-[27px]">{item.text}</p>
                    <div style={{backgroundColor: item.color}} className={`w-[42px] rounded-full  mb-[23px] flex justify-center items-center h-[42px] bg-[#555]`}>
                        <img src={item.arrow} alt={item.text} />
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Offer