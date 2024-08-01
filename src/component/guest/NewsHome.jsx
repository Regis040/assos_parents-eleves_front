import "./NewsHome.scss";

function NewsHome () {
    return (
        <>
            <section id="news-section">
                <div class="soustitre">
                    <h2>L' actualité</h2>
                </div>
                
                <div id="blocs_actu">
                    <div class="bloc">
                        <div class="bloc_img_position"><img class="bloc_img" src="../../assets/imgs/harcelement.png" alt="le harcelement à l'école" /></div>
                        <div class="bloc_content">
                            <h3>La lutte contre le harcelement</h3>
                            <p>La prévention et la lutte contre le harcèlement entre élèves est l'une des priorités du ministère de l'Education nationale et de la Jeunesse.</p>
                            <div class="bloc_button-position"><a href="/harcellement" class="bloc_button">en savoir +</a></div>
                        </div>                    
                    </div>    
                    <div class="bloc">
                        <div class="bloc_img_position"><img class="bloc_img" src="../../assets/imgs/journee-rencontre.jpg" alt="la rencontre mensuelle" /></div>
                        <div class="bloc_content">
                            <h3>La réunion mensuelle</h3>
                            <p>Nous essayons d'organiser une rencontre dans le but que nous fassions connaissances et partageons un moment ensemble.</p>
                            <div class="bloc_button-position"><a href="/monthmeet" class="bloc_button">en savoir +</a></div>
                        </div>                    
                    </div> 
                    <div class="bloc">
                        <div class="bloc_img_position"><img class="bloc_img" src="../../assets/imgs/debat.jpg" alt="débattons de l'actualité" /></div>
                        <div class="bloc_content">
                            <h3>Le débat sur l'actualité</h3>
                            <p>Un débat sur l'actualité: adhérents, n'hésitez pas à commenter puis nous en discuterons autour d'un chocolat et des biscuits !</p>
                            <div class="bloc_button-position"><a href="/articles" class="bloc_button">en savoir +</a></div>
                        </div>                    
                    </div>     
                </div>
            </section>
        </>
    )
}
export default NewsHome;