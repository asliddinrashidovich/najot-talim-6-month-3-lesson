function Hero() {
  return (
    <div className=" py-[100px] pt-[186px] pb-[100px]" > 
        <div className="max-w-[1170px] mx-auto justify-between flex-col-reverse gap-[40px] lg:gap-[0] lg:flex-row   flex items-center px-[30px]">
            <div>
                <h1 className="text-[72px] leading-[100%] font-[500] text-[#3D3D3F] mb-[42px]">Smart Web 
                Design Agency</h1>
                <p className="font-[400] text-[20px] leading-[100%] text-[#3D3D3F] mb-[40px]">We will provide best web design and business devlopment
                service clients expectation and satisfaction guarantee.</p>
                <button className="py-[12px] px-[24px] rounded-[5px] text-[14px] font-[500] leading-[100%] text-white cursor-pointer btn ">Free consultation</button>
            </div>
            <img  src="/public/assets/hero (2).png" alt="hero" />
        </div>
    </div>
  )
}

export default Hero