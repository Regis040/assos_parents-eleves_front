import React from "react";
import Header from "../../component/guest/Header";
import Footer from "../../component/guest/Footer";
import './CollegePage.scss';

const CollegePage = () => {
  return (
    <>
      <Header />      
          <div className="soustitre">
                <h2>Le collége</h2>
          </div>

          <div className="collegeIntro">
            <img className="PicPosition" src="../../assets/imgs/page-college.jpg" alt="Le college" />
            <div className="collegePhotoTitle">LE COLLEGE: Le début de l'autonomie</div>
            <div className="collegeParagraphIntro">
                    <p>
                    Votre enfant entre en 6e et va devoir s'adapter à un nouveau rythme et souvent un nouvel établissement. 
                    La classe de 6e va lui permettre une entrée progressive dans les savoirs et enseignements du collège, 
                    qu'il va approfondir jusqu'en classe de 3e. Comment l'aider à s'organiser, à travailler et à réviser ? 
                    Vous trouverez dans cette rubrique des réponses à vos questions et des paroles d'experts pour vous aider à y voir plus clair.

                    </p>
            </div>
          </div>        

          <div className="sujetstyle">
            <h3>Étiqueter soigneusement son matériel</h3>
          </div>
          <p className="paragraphStyle">
          Dès la sixième, pour une seule discipline, les élèves ont parfois deux, voire trois, cahiers avec, de surcroît, 
          plusieurs entrées différentes. Certains enseignants exigent un classeur subdivisé en plusieurs parties. 
          Afin de réduire les possibilités d’erreur, inscrivez très lisiblement sur la couverture de chaque cahier ou classeur 
          le nom de la discipline et procurez-lui des intercalaires où vous noterez avec lui sur chaque onglet le nom de la partie 
          ou de la sous-matière.
          </p>
          <div className="sujetstyle">
            <h3>Alléger le poids du cartable</h3>
          </div>
          <p className="paragraphStyle">
          Apporter le cahier de maths pour le cours d’histoire-géographie ou le livre d’anglais pour celui de français... 
          Beaucoup d’élèves, au moins en début de sixième, sont victimes de ces confusions. Avec, à la clé, une bonne dose de stress 
          quand ils s’aperçoivent de leur erreur. Résultat : beaucoup finissent par se charger d’un matériel inutile. « Comme je ne 
          savais pas quels cahiers je devais apporter, j’ai préféré tout prendre ! », disent-ils volontiers. Ainsi, au moins au premier 
          trimestre, prévoyez d’aider votre enfant à faire son cartable. Affichez au-dessus de son bureau un exemplaire de son
           emploi du temps, en ajoutant pour chaque heure de cours le matériel à emporter.
          <div className="greenArea">
            <div className="greenAreaTitle">Le carnet de correspondance</div>
            <p className="greenAreaPragraph">
            Contrairement à ce que craignent de nombreux parents, la plupart des élèves s’adaptent très rapidement aux nouvelles 
            exigences du collège. Malgré tout, il est important d’être attentif, dès le départ, à ce qui pourrait être source 
            de difficultés pour un enfant. Aux environs de Noël, il y aura, bien sûr, la rencontre parents-professeurs ainsi que 
            le premier bulletin trimestriel. En attendant, il y a aussi le carnet de correspondance. Consultez-le chaque soir.
             Grâce aux remarques consignées au jour le jour par les enseignants, vous aurez déjà une petite idée du profil de votre enfant.
              Vous verrez très vite apparaître ce qui risque de gêner sa réussite. Le bavardage ? Une incapacité à se mettre au travail
               en classe ? Des leçons non apprises ? Des exercices non faits à la maison ? Des oublis répétés de matériel ? 
               Pour toutes ces remarques voir avec les enseignants concernés les remèdes à apporter.
            </p>
          </div>
          </p>
          <div className="sujetstyle">
            <h3>Apprendre à planifier son travail</h3>
          </div>
          <p className="paragraphStyle">
          Au collège, à quelques semaines de la remise des bulletins trimestriels, faute, bien souvent, 
          d’un manque de concertation entre les enseignants, les contrôles ont tendance à se multiplier. 
          Les emplois du temps, ensuite, sont loin d’être toujours équilibrés. Certains jours de la semaine, les disciplines 
          nécessitant du travail à la maison s’accumulent. Or, peu d’élèves ont le réflexe d’anticiper. Ils se mettent à faire 
          la veille un travail pour lequel ils disposaient, en réalité, de deux semaines et qui, d’ailleurs, aurait été d’autant
           mieux réussi s’il avait été effectué en plusieurs étapes. Pour qu’il ne tombe pas dans ce piège, incitez, chaque week-end, 
           votre enfant à établir un planning des activités à réaliser au cours de la semaine.
          </p>  
          <div className="sujetstyle">
            <h3>Accorder de l'importance au cahier de textes</h3>
          </div>
          <p className="paragraphStyle">
          De plus en plus de collèges proposent des cahiers de textes en ligne remplis par les enseignants. 
          Le hic, c’est qu’ils ne sont pas toujours tenus à jour. Pour prendre connaissance du travail à réaliser à la maison, 
          le cahier de textes ou l’agenda de l’élève reste donc l’outil incontournable. Encore faut-il qu’il soit bien lisible.
           Comme il est souvent rempli en classe dans la précipitation, apprenez-à votre enfant à gagner du temps en abrégeant 
           les mots les plus courants. Montrez-lui aussi comment le tenir, avec clarté, en écrivant bien la discipline et en séparant 
           chacune d’elles par un trait.
          </p>  
          <div className="sujetstyle">
            <h3>Utiliser les manuels scolaires</h3>
          </div>
          <p className="paragraphStyle">
          Au cas où le collège utiliserait des manuels numériques, vérifiez que votre enfant a bien compris la manière de s’en servir. 
          Consultez-les avec lui, dans leur ensemble, pour avoir une vision globale du programme de l’année. 
          Faites-le également pour des manuels papier. Ils sont un complément indispensable au cours. 
          Or, les collégiens ont tendance à en négliger l’utilisation. Pour apprendre une leçon, ils se contentent souvent du 
          résumé inscrit dans le cahier ou le classeur, se privant du sens qu’ils pourraient donner aux mots en revoyant les documents 
          (photos, schémas, graphiques, tableaux...) exploités avec le professeur lors du cours.
          </p> 
          <div className="greenArea">
            <div className="greenAreaTitle">Comment consulter ses notes ?</div>
            <p className="greenAreaPragraph">
            Elles sont consultables en ligne. Prenez-en connaissance régulièrement sans vous alarmer inutilement. 
            Un enfant n’est pas forcément en échec parce qu’il a raté un contrôle. D’ailleurs, rencontrer des difficultés fait 
            aussi partie de l’apprentissage.
            Faites confiance à l'équipe éducative. Si vous avez observé un dysfonctionnement dans le collège ou si vous avez une critique
             à formuler vis-à-vis d’un enseignant, cherchez à rencontrer l’adulte concerné mais abstenez-vous de tout commentaire négatif 
             devant votre enfant.
            </p>
          </div>
          <div className="sujetstyle">
            <h3>Comment survivre à la rentrée</h3>
          </div>
          <p className="paragraphStyle">
          L'entrée d'un enfant en 6e nécessite une nouvelle organisation pour toute la famille. Entre un nouveau rythme, 
          de nouveaux repères à acquérir et une exigence plus grande, c'est aussi un temps de questionnements et de doutes pour l'enfant. 
          Comment vivre ce passage ? Comment accompagner son enfant dans cette nouvelle étape de sa vie ? Analyse et points de repères 
          </p>

      <Footer />
    </>
  );
};

export default CollegePage;