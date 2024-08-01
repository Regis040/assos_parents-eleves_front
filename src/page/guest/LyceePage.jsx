import React from "react";
import Header from "../../component/guest/Header";
import Footer from "../../component/guest/Footer";
import './LyceePage.scss';

const LyceePage = () => {
  return (
    <>
      <Header />      
          <div className="soustitre">
                <h2>Le Lycée</h2>
          </div>

          <div className="lyceeIntro">
            <img className="PicPosition" src="../../assets/imgs/page-lycee.jpg" alt="Le lycée" />
            <div className="lyceePhotoTitle">LE LYCEE: le dossier Parcoursup</div>
            <div className="lyceeParagraphIntro">
                    <p>
                    Comment bien remplir son dossier Parcoursup et gérer les différentes phases d'inscription et de validation de 
                    la plateforme ? Retrouvez tous les conseils de Frédérique Alexandre-Bailly, directrice générale de l’Onisep.
                    </p>
            </div>
          </div>        

          <div className="sujetstyle">
            <h3>Quelles sont les nouveautés apportées à Parcoursup pour 2023 ?</h3>
          </div>
          <p className="paragraphStyle">
          <ul>
            <li>Les notes des spécialités sont désormais intégrées à Parcoursup et sont donc examinées dans les candidatures des élèves ;</li>
            <li>Une nouvelle présentation et des fiches formations plus claires ;</li>
            <li>Un moteur de recherche rénové plus puissant ;</li>
            <li>Chaque fiche formation précise plus clairement le type de certification des diplômes. Les candidats voient ainsi si c’est un diplôme national. Ce point est primordial pour les parents qui ne savent pas assez qu’un diplôme national de licence est nécessaire pour postuler en Master ensuite ;</li>
            <li>Un rapport d’analyse des candidatures de l’année n-1 avec des notes de lecture ;</li>
            <li>Un onglet "Contacts et échanges" permet d’entrer en relation avec des étudiants « ambassadeurs » et les établissements ou encore avec le référent handicap ;</li>
            <li>Les fiches indiquent avec précision les critères de sélection examinés par chaque établissement dans les candidatures.</li>
          </ul>

          </p>
          <div className="sujetstyle">
            <h3>Quels conseils donneriez-vous aux parents pour aider leurs enfants à formuler leurs vœux dans Parcoursup ?</h3>
          </div>
          <p className="paragraphStyle">
            <ul>
              <li><b>Il faut s’armer de patience car les choix des adolescents varient beaucoup ! </b>Il faut les laisser réfléchir et ne pas penser à leur place. Il faut surtout les encourager à se renseigner un maximum, à aller aux journées portes ouvertes et à discuter avec les étudiants pour mieux percevoir les choses ;</li>
              <li><b>Il faut également les aider à se poser les bonnes questions : </b>« Est-ce que ces études vont me convenir ? Ai-je une chance d’être pris ? » Il ne faut pas laisser un adolescent choisir uniquement des filières sélectives et enfin, ne jamais formuler un voeu qu’il ne voudra pas confirmer ensuite ;</li>
              <li><b>Les parents peuvent par ailleurs aider leurs enfants à prendre conscience du mode de vie qui accompagnera leur choix. </b>Il faut examiner pour cela le lieu, le budget, les modalités et l’organisation du travail, l’autonomie nécessaire, l’éloignement géographique...</li>
              <li><b>Enfin, je conseille surtout d’essayer de "déstresser" les futurs étudiants </b>face à leurs choix qu’ils pensent faire pour « toute une vie » ! Leur vie sera pleine d’opportunités professionnelles différentes. Les adolescents d’aujourd’hui seront amenés à beaucoup changer, parfois dès leur première année d’étude, et il existe beaucoup de passerelles possibles entre les différents cursus ;</li>
              <li><b>Dernier conseil  pour les parents : </b>enregistrez bien votre numéro de portable en plus de celui de votre enfant dans les dossiers Parcoursup afin d’être également averti en temps réel des réponses ou questions éventuelles des établissements. Les adolescents ne sont pas toujours réactifs au bon moment…</li>
            </ul>
          </p>
          <div className="sujetstyle">
            <h3>Comment optimiser au maximum son dossier Parcoursup ?</h3>
          </div>
          <p className="paragraphStyle">
            Il faut être attentif à plusieurs points importants  :
            <ul>
              <li><b>Bien équilibrer le niveau des demandes</b> et ne pas mettre tous ses œufs dans le même panier !</li>
              <li><b>Essayer de remplir toutes les cases, </b>même si un choix intéresse moins l’élève, mais toujours en évitant de mettre des choix irréalistes ;</li>            
              <li><b>Bien motiver les projets de formation qui sont vraiment lus par les établissements </b>et qui peuvent faire la différence entre deux dossiers. Ces projets aident aussi l’élève à confirmer ses envies ;</li>
              <li><b>Laisser votre enfant écrire lui-même la lettre de motivation, </b>mais la relire pour l’aider à l'affiner et pour éviter les fautes !</li>
              <li><b>Prendre des notes pendant la phase de recherche sur les établissements </b>pour s’y retrouver plus facilement plus tard lors de la phase des choix finaux. Les élèves sont souvent stressés, les parents aussi, et leurs notes permettront de se rappeler rapidement les points importants.</li>
            </ul>
          </p>  
          <div className="sujetstyle">
            <h3>Comment bien gérer la phase d’acceptation des choix ?</h3>
          </div>
          <p className="paragraphStyle">
          Il est nécessaire de ne pas se presser dans cette phase redoutée. L’élève doit garder ses envies à l’esprit et 
          relire ses notes pour mieux s’y retrouver. Il ne faut pas avoir peur de laisser un choix en attente tant qu’on n’est pas sûr. 
          Il faut savoir garder son sang-froid.
          </p>  
          <div className="sujetstyle">
            <h3>Comment fonctionne l’algorithme de Parcoursup ? Est-ce différent selon les écoles où l’on postule ?</h3>
          </div>
          <p className="paragraphStyle">
          Il n’y a pas d’algorithme intégré à Parcoursup, chaque établissement a ses propres critères de sélections 
          qui sont précisés dans leurs fiches.
          </p>  
          <div className="sujetstyle">
            <h3>Est-ce que les universités sont toujours sectorisées ?</h3>
          </div>
          <p className="paragraphStyle">
          Elles sont sectorisées par académie, sauf en Ile-de-France où les élèves des trois académies de la région, Paris, Créteil et Versailles, peuvent postuler partout. 
          Il y a également un quota de dossiers acceptés hors académie.
          </p>
          <div className="greenArea">
            <div className="greenAreaTitle">Numéro vert Parcoursup (appel gratuit)</div>
            <p className="greenAreaPragraph">
            0 800 400 070
            </p>
          </div>
      <Footer />
    </>
  );
};

export default LyceePage;