import LogoSneakers from "@/assets/images/logo.svg";
import AvatarImage from "@/assets/images/image-avatar.png";
import MenuIcons from "@/components/icons/MenuIcons";
import CartIcon from "@/components/icons/CartIcon";
import CloseIcons from "@/components/icons/CloseIcons";

const MainHeader = () => {
  const handleOpenMenu = () => {};
  const handleCloseMenu = () => {};

  return (
    <header className="container mx-auto flex items-center gap-8 p-6 px-4">
      <button className="md:hidden" onClick={handleOpenMenu}>
        <MenuIcons />
      </button>
      <img
        src={LogoSneakers}
        alt="LogoSneakers"
        className="mb-1 mr-auto h-5 md:mr-0"
      />
      <nav className="absolute left-0 top-0 flex h-full w-2/5 flex-col gap-y-5 bg-slate-400 p-10 font-bold md:mr-auto md:flex md:flex-row md:gap-4">
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
