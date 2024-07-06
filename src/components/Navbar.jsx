import { NavLink } from "react-router-dom";

const Navbar = () => {
  let navITems = [
    { label: 'About', route: '/about' },
    { label: 'Projects', route: '/projects' }
  ];
  
  return (
    <header className='header'>
      <NavLink to='/'>
        <label className="shadow-lg rounded-md bg-white p-2 cursor-pointer">
          <span className="text-blue-400 font-semibold">RP</span>
        </label>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        {navITems.map(navItem => {
          return (
            <NavLink to={navItem.route} className={({ isActive }) => isActive ?
              "text-blue-600" : "text-black hover:text-blue-400"} key={navItem.route}>
              {navItem.label}
            </NavLink>  
        )})}
      </nav>
    </header>
  );
};

export default Navbar;