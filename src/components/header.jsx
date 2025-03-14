function Header() {
  return (
    <div className="fixed w-full py-[20px] bg-white z-[100]" >
        <div className="max-w-[1170px] mx-auto justify-between flex items-center px-[30px] mb-[20px] md:mb-[0]">
            <a href="#">
                <img src="/public/assets/header_logo.svg" alt="header logo" />
            </a>
            <ul className="md:flex gap-[60px] hidden">
                <li>
                    <a href="#" className="text-[14px] font-[500] leading-[100%] text-[#F35F2F]">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" className="text-[14px] font-[500] leading-[100%] text-[#3D3D3F] hover:text-[#F35F2F]">
                        Service
                    </a>
                </li>
                <li>
                    <a href="#" className="text-[14px] font-[500] leading-[100%] text-[#3D3D3F] hover:text-[#F35F2F]">
                        Portfolio
                    </a>
                </li>
                <li>
                    <a href="#" className="text-[14px] font-[500] leading-[100%] text-[#3D3D3F] hover:text-[#F35F2F]">
                        Blog
                    </a>
                </li>
            </ul>
            <button className="py-[12px] px-[24px] rounded-[5px] text-[14px] font-[500] leading-[100%] text-white cursor-pointer btn ">Contact us</button>
        </div>
        <ul className=" gap-[60px] md:hidden max-w-[1170px] mx-auto justify-center flex items-center px-[30px]">
                <li>
                    <a href="#" className="text-[14px] font-[500] leading-[100%]  text-[#F35F2F]">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" className="text-[14px] font-[500] leading-[100%] text-[#3D3D3F] hover:text-[#F35F2F]">
                        Service
                    </a>
                </li>
                <li>
                    <a href="#" className="text-[14px] font-[500] leading-[100%] text-[#3D3D3F] hover:text-[#F35F2F]">
                        Portfolio
                    </a>
                </li>
                <li>
                    <a href="#" className="text-[14px] font-[500] leading-[100%] text-[#3D3D3F] hover:text-[#F35F2F]">
                        Blog
                    </a>
                </li>
            </ul>
    </div>
  )
}

export default Header