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
    <div className="flex items-center justify-between fixed text-white px-[20px] top-0 h-[85px] w-full bg-black z-50">
        <div>
            <img src="/" alt="logo" />
        </div>
        <nav className="">
            <button className="px-[20px]" onClick={() => handleNavigation('home')}>home</button>
            <button className="px-[20px]" onClick={() => handleNavigation('about')}>About Us</button>
            <button className="px-[20px] trans" onClick={() => handleNavigation('product')}>Product</button>
            <button className="px-[20px]" onClick={() => handleNavigation('home')}>Login</button>
        </nav>
    </div>
  )
}

export default Header