import { Link } from 'react-router-dom';

const TRILHAS = [
  { id: 1, title: 'Trilha Frontend', description: 'HTML, CSS, JS, React e muito mais.', modules: 12 },
  { id: 2, title: 'Trilha Backend', description: 'Node.js, Bancos de Dados e APIs.', modules: 10 },
];

export const Trilhas = () => {
  return (
    <div className="container">
      <div className="row mb-4">
        <div className="col">
          <h1 className="display-5 text-black">Trilhas de Aprendizado</h1>
          <p className="lead text-muted">Siga um percurso estruturado para atingir seus objetivos.</p>
        </div>
      </div>

      <div className="row g-4">
        {TRILHAS.map(trilha => (
          <div key={trilha.id} className="col-12 col-md-6">
            <div className="card h-100 shadow-sm border-primary">
              <div className="card-body">
                <h4 className="card-title text-primary">{trilha.title}</h4>
                <p className="card-text">{trilha.description}</p>
                <p className="fw-bold">Módulos: {trilha.modules}</p>
                <Link to="/" className="btn btn-outline-primary w-100">
                  Explorar Trilha
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
