import "./NewsHome.scss";


function NewsHome () {
    return (
        <>
            <h2>L'actualité</h2>
            <div class="containers">
                <div class="container">
                    <div class="img-container"><img  src="../../assets/imgs/harcelement.png" alt="le harcelement à l'école" /></div>
                    <div class="content">
                        <h3>La lutte contre le harcelement</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet.</p>
                    </div>
                    <div class="button-position"><a href="#" class="button">Mon Bouton</a></div>
                </div>
                <div class="container">
                <div class="img-container"><img  src="../../assets/imgs/journee-rencontre.jpg" alt="la rencontre mensuelle" /></div>
                    <div class="content">
                      <h3>La réunion mensuelle</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet.</p>
                    </div>
                    <div class="button-position"><a href="#" class="button">Mon Bouton</a></div>
                </div>
                <div class="container">
                <div class="img-container"><img  src="../../assets/imgs/debat.jpg" alt="débattons de l'actualité" /></div>
                    <div class="content">
                    <h3>Le débat sur l'actualité</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet.</p>
                    </div>
                    <div class="button-position"><a href="#" class="button">Mon Bouton</a></div>
                </div>
            </div>
        </>
    )
}
export default NewsHome;