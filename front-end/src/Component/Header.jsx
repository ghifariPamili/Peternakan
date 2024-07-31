import { useNavigate } from "react-router-dom"


const Header = () => {
    const navigate = useNavigate();
  
  const handleNavigation = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans flex items-center justify-between fixed text-white px-[20px] top-0 h-[85px] w-full bg-black z-50">
        <div className="flex items-center gap-[20px]">
            <img src="/src/assets/logo-shadow-green.png" sizes="100px" className="w-[40px] h-[50px]" alt="logo" />
        </div>
        <nav className="text-[14px] flex flex-row gap-[20px]">
            <button className="transition ease-in-out duration-300 px-[20px] hover:-translate-y-2 hover:border-b-[2px] tracking-wider hover:border-white" onClick={() => handleNavigation('home')}>home</button>
            <button className="transition ease-in-out duration-300 px-[20px] hover:-translate-y-2 hover:border-b-[2px] tracking-wider hover:border-white " onClick={() => handleNavigation('about')}>About Us</button>
            <button className=" transition ease-in-out duration-300 px-[20px] hover:-translate-y-2 hover:border-b-[2px] tracking-wider hover:border-white" onClick={() => handleNavigation('product')}>Product</button>
            <button className="py-[6px] px-[30px] rounded-full outline outline-[2px] text-white hover:outline-none outline-white hover:font-semibold tracking-wider  hover:bg-white hover:text-blue-500" onClick={() => handleNavigation('home')}>Login</button>
        </nav>
    </div>
  )
}

export default Header