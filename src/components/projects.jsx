import { projects } from "../constants/data"

function Projects() {
  return (
    <div className="max-w-[1170px] mx-auto px-[30px] mb-[120px]">
        <h2 className="text-[40px] font-[700] leading-[100%] text-[#3D3D3F] text-center mb-[55px]">Our Creative Latest Projects
        </h2>
        <div className="rounded-[17px] mb-[60px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]  justify-between  py-[] px-[]">
            {projects.map(item => (
                <div key={item.count} className="card  text-center rounded-[23px] hover:scale-[103%] cursor-pointer  w-full flex flex-col items-center">
                    <div style={{backgroundColor: item.color}} className={`w-full overflow-hidden rounded-t-[10px]`}>
                        <img src={item.image} alt={item.text} className="w-full overflow-hidden rounded-t-[10px]"/>
                    </div>
                    <h2 className="text-[#3D3D3F] text-[100%] pt-[20px] pb-[25px] text-xl font-[500]" >{item.text}</h2>
                </div>
            ))}
        </div>
        <div className="w-full text-center">
            <button className="py-[12px]  px-[24px] rounded-[5px] text-[14px] font-[500] leading-[100%] text-white cursor-pointer btn ">View all Projects</button>

        </div>
    </div>
  )
}

export default Projects