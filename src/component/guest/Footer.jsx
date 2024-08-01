import { Link} from "react-router-dom";
import "./Footer.scss";

function Footer () {
    return (
       <footer>
            <div id="footer_contact">
                <div id="socialmedias_gl">
                    <div id="socialmedia_title">Réseaux sociaux</div>  
                    <div id="socialmedias_in">
                         <div id="facebook"><Link to="https://www.facebook.com/aucoeurdelenfance40" target="_blank"><img id="facebook_pic" src="../../assets/imgs/facebook.png" alt="le logo facebook" /></Link></div>
                         <div id="twitter"><img id="twitter_pic" src="../../assets/imgs/twitter.png" alt="le logo twitter" /></div>
                    </div>                  
                </div>
                <img id="logofooter" src="../../assets/imgs/logo.png" alt="le logo" />
                <div id="address">
                    <div id="contact_title">Nous contacter</div>
                    <div class="address_text">EMAIL: aucoeurdelenfnace-ass@gmail.com</div>
                    <div class="address_text">TEL: 05.58.78.26.35</div>
                    <div class="address_text">ADRESSE: 25 rue de la République <br />
                    40120 PARENTIS-EN-BORN</div>
                </div>
            </div>
            <div id="footer_legal">
                <div class="legal_mentions"><Link to="/legalmentions" target="_blank">Copyright</Link></div>
                <div class="legal_mentions"> | </div>
                <div class="legal_mentions"><Link to="/legalmentions" target="_blank">Mentions légales</Link></div>
                <div class="legal_mentions"> | </div>
                <div class="legal_mentions"><Link to="/legalmentions" target="_blank">Gérer les cookies</Link></div>
            </div>
       </footer>
    )
}
export default Footer;