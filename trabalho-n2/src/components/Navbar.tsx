import { Link } from 'react-router-dom';
import { BookOpen, Menu } from 'lucide-react';

interface NavbarProps {
  onToggleSidebar: () => void;
}

export const Navbar = ({ onToggleSidebar }: NavbarProps) => {
  return (
    <div className="d-flex justify-content-center align-items-center bg-dark p-3 mb-4 text-white w-100 position-relative">
      <button 
        className="btn btn-dark position-absolute start-0 ms-3" 
        onClick={onToggleSidebar}
      >
        <Menu size={24} />
      </button>
      <Link className="d-flex align-items-center gap-2 text-white text-decoration-none me-4 fs-4" to="/">
        <BookOpen size={24} />
        Perero Cursos
      </Link>
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link text-white" to="/">Cursos</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/trilhas">Trilhas</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};
