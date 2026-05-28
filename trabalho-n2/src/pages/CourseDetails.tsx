import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Award, PlayCircle } from 'lucide-react';

export function CourseDetails() {
  const { id } = useParams();

  return (
    <div className="container pb-5">
      <div className="mb-4">
        <Link to="/" className="text-decoration-none d-inline-flex align-items-center gap-2">
          <ArrowLeft size={20} />
          Voltar para os cursos
        </Link>
      </div>

      <div className="row mb-5">
        <div className="col-lg-8">
          <div className="ratio ratio-16x9 bg-dark rounded mb-4 d-flex align-items-center justify-content-center text-white">
            <div className="text-center p-5">
              <PlayCircle size={64} className="mb-3 text-secondary" />
              <h3>Vídeo de Apresentação</h3>
              <p className="text-muted mb-0">Preview do Curso #{id}</p>
            </div>
          </div>
          <h1 className="display-4 text-black">Detalhes do Curso #{id}</h1>
          <p className="lead">Esta é a página de detalhes do curso. O design é simples e direto ao ponto, conforme solicitado pelo professor.</p>
          
          <h4 className="mt-5 mb-3">Conteúdo Programático</h4>
          <ul className="list-group list-group-flush mb-4">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Introdução à Tecnologia
              <span className="badge bg-secondary rounded-pill">10 min</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Configurando o Ambiente
              <span className="badge bg-secondary rounded-pill">25 min</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Primeiros Passos e Conceitos
              <span className="badge bg-secondary rounded-pill">45 min</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Projeto Prático
              <span className="badge bg-secondary rounded-pill">120 min</span>
            </li>
          </ul>
        </div>
        
        <div className="col-lg-4">
          <div className="card shadow-sm sticky-top" style={{ top: '2rem' }}>
            <div className="card-body">
              <h3 className="card-title fw-bold text-success mb-3">R$ 197,00</h3>
              <button className="btn btn-primary btn-lg w-100 mb-3">
                Matricular-se Agora
              </button>
              
              <hr />
              
              <ul className="list-unstyled mb-0">
                <li className="mb-3 d-flex align-items-center gap-2 text-muted">
                  <Clock size={20} />
                  <span>Acesso Vitalício</span>
                </li>
                <li className="mb-3 d-flex align-items-center gap-2 text-muted">
                  <Award size={20} />
                  <span>Certificado de Conclusão</span>
                </li>
                <li className="d-flex align-items-center gap-2 text-muted">
                  <PlayCircle size={20} />
                  <span>Mais de 20 horas de vídeo</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
