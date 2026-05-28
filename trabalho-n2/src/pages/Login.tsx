import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <h2 className="text-center text-black mb-4">Acesso</h2>
              <form>
                <div className="mb-3">
                  <label className="form-label">E-mail</label>
                  <input type="email" className="form-control" placeholder="Seu e-mail" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Senha</label>
                  <input type="password" className="form-control" placeholder="Sua senha" />
                </div>
                <button type="button" className="btn btn-primary w-100 mb-3">Entrar</button>
                <div className="text-center">
                  <Link to="/" className="text-decoration-none">Voltar para a Home</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
