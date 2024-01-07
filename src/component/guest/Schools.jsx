import "./Schools.scss";

function Schools () {
    return (
    <section id="https://http://localhost:3001/#lienchools">
        <h2>Les établissement scolaires</h2>
        <div class="container-schools" >            
            <div class="container-school">
                <a href="#">
                    <div class="img-container-school"><img class="img-container-school" src="../../assets/imgs/maternelle.jpg" alt="la maternelle" /></div>
                </a> 
                    <h3>MATERNELLE</h3>
            </div>               
            <div class="container-school">
                <a href="#">
                    <div class="img-container-school"><img class="img-container-school" src="../../assets/imgs/elementaire.png" alt="l'école élementaire" /></div>
                </a>
                <h3>ELEMENTAIRE</h3>
            </div>  
            <div class="container-school">
            <a href="#">
                <div class="img-container-school"><img class="img-container-school" src="../../assets/imgs/college.jpg" alt="le collége" /></div>
                </a>   
                <h3>COLLEGE</h3>
            </div>  
            <div class="container-school">
            <a href="#">
                <div class="img-container-school"><img class="img-container-school" src="../../assets/imgs/lycée.jpg" alt="le lycée" /></div>
                </a>   
                <h3>LYCEE</h3>
            </div>    
        </div>
    </section>
    )
}
export default Schools;