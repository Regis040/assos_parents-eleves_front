import "./Schools.scss";

function Schools () {
    return (
    <section id="schools-section">
        <div class="soustitre">
            <h2>Les établissements scolaires</h2>
        </div>
        <div class="container-schools" >            
            <div class="container-school">
                <a href="http://localhost:3001/maternelle">
                    <div class="img-container-school"><img class="img-school" src="../../assets/imgs/maternelle.jpg" alt="la maternelle" /></div>
                </a> 
                    <h3>LA MATERNELLE</h3>
            </div>               
            <div class="container-school">
                <a href="http://localhost:3001/elementaire">
                    <div class="img-container-school"><img class="img-school" src="../../assets/imgs/elementaire.png" alt="l'école élementaire" /></div>
                </a>
                <h3>L'ELEMENTAIRE</h3>
            </div>  
            <div class="container-school">
            <a href="http://localhost:3001/college">
                <div class="img-container-school"><img class="img-school" src="../../assets/imgs/college.jpg" alt="le collége" /></div>
                </a>   
                <h3>LE COLLEGE</h3>
            </div>  
            <div class="container-school">
            <a href="http://localhost:3001/lycee">
                <div class="img-container-school"><img class="img-school" src="../../assets/imgs/lycée.jpg" alt="le lycée" /></div>
                </a>   
                <h3>LE LYCEE</h3>
            </div>    
        </div>
    </section>
    )
}
export default Schools;