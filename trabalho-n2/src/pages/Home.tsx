import { Link } from 'react-router-dom';

const COURSES = [
  { id: 1, title: 'React para Iniciantes', description: 'Aprenda os fundamentos do React, hooks e muito mais.', image: 'https://placehold.co/600x400/212529/FFF?text=React', price: 'R$ 97,00' },
  { id: 2, title: 'TypeScript Avançado', description: 'Domine a tipagem estática no ecossistema JavaScript.', image: 'https://placehold.co/600x400/212529/FFF?text=TypeScript', price: 'R$ 147,00' },
  { id: 3, title: 'Design Patterns', description: 'Boas práticas e padrões de projeto aplicados na web.', image: 'https://placehold.co/600x400/212529/FFF?text=Patterns', price: 'R$ 197,00' },
];

export function Home() {
  return (
    <div className="container">
      <div className="row mb-4">
        <div className="col">
          <h1 className="display-5 text-black">Cursos Disponíveis</h1>
          <p className="lead text-muted">Aprenda as tecnologias mais demandadas no mercado.</p>
        </div>
      </div>

      <div className="row g-4">
        {COURSES.map(course => (
          <div key={course.id} className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <img src={course.image} className="card-img-top" alt={course.title} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.description}</p>
                <div className="mt-auto d-flex justify-content-between align-items-center">
                  <span className="fw-bold fs-5 text-success">{course.price}</span>
                  <Link to={`/curso/${course.id}`} className="btn btn-primary">
                    Ver Detalhes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
