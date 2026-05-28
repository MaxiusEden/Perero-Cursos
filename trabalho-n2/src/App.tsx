import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { CourseDetails } from './pages/CourseDetails';

function App() {
  return (
    <Router>
      <div className="min-vh-100 bg-light">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/curso/:id" element={<CourseDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
