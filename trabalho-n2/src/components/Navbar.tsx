import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <BookOpen size={24} />
          Perero Cursos
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Cursos</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
