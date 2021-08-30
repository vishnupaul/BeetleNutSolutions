import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <div className='logo'>
              <h2>
                Beetle<span className='logo-num'>Nut</span>
                <span className='logo-word'>Solutions</span>{' '}
              </h2>
            </div>
          </Link>
          <button className='nav-toggle'>{/* <FaBars /> */}</button>
        </div>
        <div className='links-container'>
          <ul className='links'>
            <li>
              <Link aria-current='page' to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link to='adminlogin'>AdminLogin</Link>
            </li>
            <li>
              <Link to='branchLogin'>BranchLogin</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
