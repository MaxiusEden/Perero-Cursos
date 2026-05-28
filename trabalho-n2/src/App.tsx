import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { AppRouter } from './routers/app.routers';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Router>
      <div className="d-flex vh-100 bg-light">
        <Sidebar isOpen={isSidebarOpen} />
        <div className="d-flex flex-column flex-grow-1 overflow-auto">
          <Navbar onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
          <main className="p-3">
            <AppRouter />
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
