import { useNavigate } from "react-router-dom";
import HeaderAdmin from "../../component/admin/HeaderAdmin";
import { useEffect } from "react";

const DashboardPage = () => {
       
        const navigate = useNavigate();
       
        useEffect (() => {
        
        const token = localStorage.getItem("jwt");

        if (!token) {
          navigate("/login");
        }     
});

  return (
    <>
      <HeaderAdmin />

      <h2>Vous êtes bien connecté en tant qu'admin</h2>
    </>
  );
};

export default DashboardPage;