import LogoSneakers from "@/assets/images/logo.svg";
import AvatarImage from "@/assets/images/image-avatar.png";
import MenuIcons from "@/components/icons/MenuIcons";
import CartIcon from "@/components/icons/CartIcon";
import CloseIcons from "@/components/icons/CloseIcons";

const MainHeader = () => {
  const handleOpenMenu = () => {};
  const handleCloseMenu = () => {};

  return (
    <header className="container mx-auto items-center gap-8 px-4 p-6 flex">
      <button className="md:hidden" onClick={handleOpenMenu}>
        <MenuIcons />
      </button>
      <img
        src={LogoSneakers}
        alt="LogoSneakers"
        className="mr-auto md:mr-0 mb-1 h-5"
      />
      <nav className="bg-slate-400 absolute h-full p-10 top-0 left-0 flex flex-col md:mr-auto md:flex md:flex-row md:gap-4 gap-y-5 font-bold w-2/5">
        <button className="mb-12" onClick={handleCloseMenu}>
          <CloseIcons />
        </button>
        <a href="#"> Collections</a>
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
      <div className="flex gap-4">
        <button>
          <CartIcon />
        </button>
        <img src={AvatarImage} alt="AvatarImage" className="w-10" />
      </div>
    </header>
  );
};

export default MainHeader;
