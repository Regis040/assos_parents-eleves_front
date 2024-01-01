import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './page/guest/HomePage';
import ArticlesPage from './page/guest/ArticlesPage';
import LoginPage from './page/guest/LoginPage';
import DashboardPage from './page/admin/DashboardPage';
import AdminArticlesPage from './page/admin/AdminArticlesPage';


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/articles" element={<ArticlesPage />} />

            <Route path="/login" element={<LoginPage/>} />

            <Route path="/admin/" element={<DashboardPage />} />
            <Route path="/admin/articles" element={<AdminArticlesPage />} />

        </Routes>
    </BrowserRouter>
  );
}

export default App;
