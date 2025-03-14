import { services } from "../constants/data"

function Services() {
  return (
    <div className="max-w-[1170px] mx-auto px-[30px] mb-[60px]">
        <h2 className="text-[40px] font-[700] leading-[100%] text-[#3D3D3F] text-center mb-[55px]">We Provide the Best Web services</h2>
        <div className="rounded-[17px] w-full  md:flex-row flex-col md:gap-[30px] gap-[50px] flex justify-between  border-[2px] border-[#EBEBEBCC] py-[55px] px-[70px]">
            {services.map(item => (
                <div key={item.count} className=" text-center flex flex-col items-center">
                    <div className={`w-[100px] rounded-[22px] mb-[23px] flex justify-center items-center h-[90px]`} style={{backgroundColor: item.color}}>
                        <img src={item.image} alt={item.text} />
                    </div>
                    <h2 className="text-[#3D3D3F] text-[36px] font-[700] mb-[13px]" >{item.count}</h2>
                    <p className="text-[24px] font-[400] leading-[100%]  text-[#3D3D3F]">{item.text}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Services