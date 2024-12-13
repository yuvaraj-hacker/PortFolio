import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Hamburger from 'hamburger-react';
function Header() {
  const [isOpen, setOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const [isHovered, setIsHovered] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const handleLinkClick = () => {
    setOpen(false);
    setIsAboutOpen(false);
  };
  const navigate = useNavigate();
  const handleDonateClick = () => {
    navigate('/');
    sessionStorage.setItem('scrollToSection', 'scrfeed_backsec');
  };
  useEffect(() => {
    const scrollTargetId = sessionStorage.getItem('scrollToSection');
    if (scrollTargetId) {
      const scrollTimeout = setTimeout(() => {
        const feedbackSection = document.getElementById(scrollTargetId);
        if (feedbackSection) {
          feedbackSection.scrollIntoView({ behavior: 'smooth' });
          sessionStorage.removeItem('scrollToSection');
        }
      }, 100);
      return () => clearTimeout(scrollTimeout);
    }
  }, [location]);

  return (
    <>
      <div className=" z-50   bg-[#303840] fixed w-full top-0  ">
        <header className="max-w-[105rem]  mx-auto px-5">
          <p className="py-8 text-center uppercase text-white text-3xl">Portfolio</p>
        </header>
      </div>
      
    </>
  );
}
export default Header;
