import { Link } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
}

export const Sidebar = ({ isOpen }: SidebarProps) => {
  return (
    <div className={`d-flex flex-column bg-dark p-3 text-white vh-100 ${isOpen ? '' : 'd-none'}`} style={{ width: '250px' }}>
      <h4 className="text-center mb-4">Painel</h4>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item mb-2">
          <Link to="/" className="nav-link text-white">
            Home
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/trilhas" className="nav-link text-white">
            Trilhas
          </Link>
        </li>
      </ul>
      <hr />
      <div>
        <Link to="/login" className="nav-link text-white">
            Login
        </Link>
      </div>
    </div>
  );
};
