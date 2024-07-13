import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import Main from './components/main';
import Home from './pages/home';
import './styles/index.css';

const App = () => {
  return (
    <Router>
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Main>
    </Router>
  );
};

export default App;
