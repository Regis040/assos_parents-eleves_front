import React from "react";
import Header from "../../component/guest/Header";
import Footer from "../../component/guest/Footer";
import './MaternellePage.scss';

const MaternellePage = () => {
  return (
    <>
      <Header />      
          <div className="soustitre">
                <h2>La maternelle</h2>
          </div>

          <div className="maternelleIntro">
            <img className="PicPosition" src="../../assets/imgs/page-maternelle.jpg" alt="classe maternelle" />
            <div className="maternellePhotoTitle">LA MATERNELLE : une rentrée en douceur</div>
            <div className="maternelleParagraphIntro">
                    <p>Une première rentrée en maternelle sans pleurs ni inquiétudes, c’est le souhait de beaucoup de parents. Certains enfants, <br />
                    discrets ou réservés, se montrent un peu moins enthousiastes que d’autres. Comment aplanir les difficultés ?</p>
            </div>
          </div>        

          <div className="sujetstyle">
            <h3>L’école, une expérience totalement nouvelle</h3>
          </div>
          <p className="paragraphStyle">
            Même s’il a éventuellement eu une expérience collective en crèche, l’enfant n’a pas toujours été préparé à 
            ce qui l’attend à l’école. <br /><br />
            L’enfant discret, qui va plus difficilement vers les autres, a plus d’obstacles à surmonter. <br />
            Une classe de petite section compte souvent une trentaine d’élèves, soit beaucoup plus d’enfants qu’un groupe de crèche. 
            Ce nombre engendre des contraintes auxquelles les enfants devront s’adapter : <br />
            circuler dans l’école, attendre son tour, trouver sa place en regroupement, dans les coins jeux, s’affirmer face aux autres…
            <br /><br />
            Les défis sont nombreux : apprendre à être patients, à respecter les règles et à gérer la frustration. <br />
            L’autre contrainte liée au nombre est celle du bruit qui peut être source de stress et de fatigue.<br /><br />
            Les enfants devront rapidement s’y habituer et apprendre à modérer leur voix et à jouer dans le calme dès les premiers jours.
          </p>
          <div className="sujetstyle">
            <h3>Reconnaitre et apprivoiser les lieux</h3>
          </div>
          <p className="paragraphStyle">
            Au moment de l’inscription, on a généralement visité l’école avec son enfant. <br /><br />
            Durant les premiers jours, se promener aux abords de l’école, discuter de ce que l’on voit, dessiner ou encore faire 
            un plan peut aider à appréhender les lieux. <br /><br />
            Jouer dans le quartier, repérer l’aire de jeux où on peut aller le soir à la sortie de l’école, afin que notre enfant y retrouve
            des visages connus, peut l’aider à désamorcer des angoisses, à apprivoiser les autres et à se faire un ou une amie plus rapidement.
          </p>
          <div className="sujetstyle">
            <h3>Verbaliser, expliquer les règles et les spécificités de l'école</h3>
          </div>
          <p className="paragraphStyle">
            La littérature jeunesse ne manque pas de ressources pour découvrir et comprendre l’école. <br /><br />
            Tout ce que l’enfant saura à l’avance pourra l’aider. Chaque contrainte peut être tournée positivement : <br />
            « Il y aura beaucoup d’enfants avec qui jouer, mais parfois on n’a pas les jeux qu’on souhaite, il faut attendre son tour. » <br /><br />
            Fréquenter les espaces collectifs, comme des ludothèques, des bibliothèques ou des lieux d’accueil parents-enfants (LAEP) 
            peut également aider les enfants réservés à s’habituer à être en collectif et ceux qui ont du mal à partager, à attendre leur tour.
          </p>
          <div className="greenArea">
            <div className="greenAreaTitle">4 astuces pour une bonne rentrée</div>
            <p className="greenAreaPragraph">
              Prendre en compte ses craintes, rassurer son enfant sur le fait qu’on viendra toujours le chercher ; <br />
              Anticiper en expliquant les différents adultes de l’école, les lieux, les activités proposées, les jeux... ;<br />
              Jouer à des jeux de société avec des règles pour habituer son enfant à suivre une consigne et à attendre son tour ;<br />
              Rencontrer d’autres enfants (aire de jeux), se confronter au collectif, aux espaces partagés (bibliothèque, etc.). 
            </p>
          </div>


          <div className="sujetstyle">
            <h3>Et l'enfant particulièrement anxieux ?</h3>
          </div>
          <p className="paragraphStyle">
            Lui détailler le déroulé de la journée : « On te déposera le matin, on restera dix minutes, puis on partira. <br />
            On reviendra toujours quand la journée d’école sera terminée ! »<br /><br />
            Le moment de la séparation venu, se tenir à ce que l’on a dit : rester dix minutes, puis partir ! <br />
            Toutes les enseignantes et les enseignants l’ont déjà expérimenté́ : une fois les parents partis, avec quelques astuces 
            ayant fait leur preuve (une marionnette, quelques comptines connues, des histoires), les pleurs se calment. <br /><br />
            Parfois, ce sont les chagrins des autres enfants qui impressionnent.<br />
            L’expliquer le moment venu peut aider notre enfant : « Tu as vu, elle est triste de voir partir son papa. 
            Elle le retrouvera ce soir ! Les parents reviennent toujours après l’école. » <br /><br />
            Le deuxième jour de classe est parfois pire que le premier. On a dit à l’enfant qu’il allait aller à l’école, 
            il y est allé, ça suffit ! Il faut alors reprendre le rituel et le rassurer de nouveau.
          </p>
      <Footer />
    </>
  );
};

export default MaternellePage;