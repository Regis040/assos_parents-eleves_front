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
                        <p>La prévention et la lutte contre le harcèlement entre élèves est l'une des priorités du ministère de l'Education nationale et de la Jeunesse.</p>
                    </div>
                    <div class="button-position"><a href="#" class="button">Mon Bouton</a></div>
                </div>
                <div class="container">
                <div class="img-container"><img  src="../../assets/imgs/journee-rencontre.jpg" alt="la rencontre mensuelle" /></div>
                    <div class="content">
                      <h3>La réunion mensuelle</h3>
                        <p>Npous essayons d'organiser une rencontre dans le but que nous fassions connaissances et partageons un moment ensemble</p>
                    </div>
                    <div class="button-position"><a href="#" class="button">Mon Bouton</a></div>
                </div>
                <div class="container">
                <div class="img-container"><img  src="../../assets/imgs/debat.jpg" alt="débattons de l'actualité" /></div>
                    <div class="content">
                    <h3>Le débat sur l'actualité</h3>
                        <p>Un débat sur l'actualité: adhérents, n'hésitez pas à commenter puis nous en discuterons autour d'un chocolat et des biscuits !</p>
                    </div>
                    <div class="button-position"><a href="/articles" class="button">Mon Bouton</a></div>
                </div>
            </div>
        </>
    )
}
export default NewsHome;