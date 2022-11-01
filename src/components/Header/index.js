import CustomLink from "../CustomLink";

const Header = () => {
  return (
    <header className="bg-blue shadow-nav">
      <nav className="max-w-screen-me mx-auto px-6 flex">
        <CustomLink to="/">Все котики</CustomLink>
        <CustomLink to="/favoritekitties">Любимые котики</CustomLink>
      </nav>
    </header>
  );
};

export default Header;
