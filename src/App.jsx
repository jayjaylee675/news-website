import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import NewsList from './components/NewsList';
import NewsDetail from './components/NewsDetail'; // <- 상세페이지 컴포넌트

function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/news" element={<NewsList />} />
        <Route path="/news/:id" element={<NewsDetail />} />
      </Routes>
    </Router>
  );
}

export default App;