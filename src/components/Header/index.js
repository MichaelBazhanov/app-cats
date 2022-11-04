import CustomLink from "../CustomLink";

const Header = () => {
  return (
    <header className="bg-blue shadow-nav fixed w-full z-50 left-1/2 -translate-x-1/2">
      <nav className="max-w-screen-me mx-auto px-6 flex">
        <CustomLink to="/">Все котики</CustomLink>
        <CustomLink to="/favouritekitties">Любимые котики</CustomLink>
      </nav>
    </header>
  );
};

export default Header;
