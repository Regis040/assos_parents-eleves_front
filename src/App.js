import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './page/guest/HomePage';
import ArticlesPage from './page/guest/ArticlesPage';
import LoginPage from './page/guest/LoginPage';
import DashboardPage from './page/admin/DashboardPage';
import AdminArticlesPage from './page/admin/AdminArticlesPage';
import ArticleEachPage from './page/guest/ArticleEachPage';
import AdminArticleUpdate from './page/admin/AdminArticleUpdate';
import AdminArticleCreate from './page/admin/AdminArticleCreate';
import CommentEachPage from './page/guest/CommentEachPage';
import CommentsPage from './page/guest/CommentsPage';
import AboutUsPage from './page/guest/AboutUsPage';
import MaternellePage from './page/guest/MaternellePage';
import AdminCommentCreate from './page/guest/CommentCreate';
import UserPage from './page/guest/UserPage';
import AdminCommentsPage from './page/admin/AdminCommentsPage';
import CommentCreate from './page/guest/CommentCreate';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/article/details/:id" element={<ArticleEachPage />} />  
            <Route path="/user" element={<UserPage />} />
            <Route path="/aboutus" element={<AboutUsPage />} />
            <Route path="/maternelle" element={<MaternellePage />} />

            <Route path="/comment/details/:id" element={<CommentEachPage/>} />          
            <Route path="/comments" element={<CommentsPage />} />
            <Route path="/comments/create" element={< CommentCreate />} />

            <Route path="/login" element={<LoginPage/>} />

            <Route path="/admin/" element={<DashboardPage />} />
            <Route path="/admin/articles" element={<AdminArticlesPage />} />
            <Route path="/admin/articles/create" element={<AdminArticleCreate />} />
            <Route path="/admin/articles/update/:id" element={<AdminArticleUpdate />} />            

            <Route path="/admin/comments" element={<AdminCommentsPage/>} />
            <Route path="/admin/comments/create" element={<AdminCommentCreate />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
