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
            <img className="PicPosition" src="../../assets/imgs/page-elementaire.jpg" alt="Le college" />
            <div className="collegePhotoTitle">LE COLLEGE: LE DEBUT DE L'AUTONOMIE</div>
            <div className="collegeParagraphIntro">
                    <p>
                     Votre enfant entre au collège et va commencer à apprendre à lire, à écrire, à compter... <br />
                     Comment se déroulent ces apprentissages ? À quoi servent les évaluations ? <br />
                     Comment l'aider à faire ses devoirs ? Vous trouverez dans cette rubrique des réponses à vos questions et 
                     des paroles d'experts pour vous aider à y voir plus clair.
                    </p>
            </div>
          </div>        

          <div className="sujetstyle">
            <h3>Le rassurer</h3>
          </div>
          <p className="paragraphStyle">
            Alain Sotto, neuropédagogue, fondateur du site cancres.com et auteur de Le beau métier de parent et Donner envie d’apprendre 
            (Le Livre de poche)<br /><br />
            On le sait, la peur de l’échec est catastrophique. Sous le stress, le cerveau coupe le contact avec les connaissances, 
            il bascule dans l’émotionnel. Par ailleurs, si l’enfant est stressé, il va mal lire la consigne. <br />
            La petite voix intérieure qui va lui seriner que c’est compliqué ou qu’il va rater aura toujours le dessus sur 
            le message délivré par la consigne. <br />
            Donc il faut que l’élève se force à une sorte de yoga intérieur, à savoir ne pas se précipiter sur l’énoncé
            mais le lire et le relire jusqu’à ce qu’il puisse se le répéter correctement dans sa tête. <br />
            Il se remet alors en lien avec son cortex et à partir de là, il peut commencer son contrôle.<br /><br />

            Brigitte Prot, psychopédagogue, auteure de J’suis pas motivé, je fais pas exprès ! (éd. L’Harmattan) <br /><br />
            Première règle : ne pas concentrer les révisions la veille. Il est au contraire important d’établir des plannings 
            dès que la date du contrôle est connue. <br />
            Travailler régulièrement est le meilleur moyen pour l’enfant de se rassurer. Il est essentiel aussi de donner une 
            limite de temps à ses révisions.<br />
            Pour l’enfant stressé, la peur de l’échec peut devenir obsessionnelle et tout envahir, au mépris des autres devoirs 
            à faire et du travail en classe. Par ailleurs, le cerveau est bien plus efficace et la concentration bien meilleure 
            quand on assigne une fin au travail à faire. Mais il ne faut pas quantifier ce travail de manière trop rigide. <br />
            Il faut plutôt évaluer avec son enfant le temps que peuvent lui prendre ses révisions. <br />
            Cela le responsabilise et le rend acteur de ses apprentissages.
          </p>
          <div className="sujetstyle">
            <h3>Le motiver</h3>
          </div>
          <p className="paragraphStyle">
            Brigitte Prot<br />
            Il faut absolument l’inciter à se questionner sur le sens de ces évaluations et lui demander :<br />
            tu penses que ça sert à quoi ? <br />
            Le laisser réfléchir à cette question, c’est lui permettre de réaliser la représentation 
            qu’il a de ces évaluations. Puis, il est important de lui fournir une réponse, lui expliquer que, sans évaluation, 
            il n’aurait aucun repère de ses progressions, que c’est ainsi qu’on motive aussi les élèves à travailler, 
            à apprendre et donc à grandir. <br />Et puis n’oublions pas que réussir, c’est gratifiant.<br /><br />

            Alain Sotto<br />
            Une mauvaise note est toujours une mauvaise nouvelle. Plutôt que de fondre sur son enfant pour le morigéner, 
            il faut le questionner sur ce qu’il a ressenti quand il a reçu cette mauvaise note et partager son propre vécu d’élève. <br />
            C’est ainsi que l'enfant se sentira accueilli et écouté et que s’instaurera une vraie communication autour de l’école
            entre enfant et parents.
          </p>
          <div className="sujetstyle">
            <h3>Le responsabiliser</h3>
          </div>
          <p className="paragraphStyle">
            Brigitte Prot<br />
            Il faut être là pour superviser le travail et contrôler qu’il a bien été fait, mais laisser au maxi-mum l’enfant 
            être acteur de ses apprentissages pour le rendre le plus autonome possible.<br />
            Avant qu’il se mette au travail, il faut simplement lui dire que, s’il a besoin d’aide, il peut compter sur notre soutien.<br />
            Mais il est important de le laisser venir de lui-même solliciter cette aide si besoin.<br /><br />

            Alain Sotto<br />
            Il est important de l’aider à se projeter. <br />
            Lui dire : ce qu’on va te dire en classe va te servir dans quelques jours, quand tu auras les évaluations. <br />
            On s’est rendu compte que les élèves qui réussissent sont ceux qui arrivent à mobiliser leur imaginaire pour se projeter.<br />
            Un peu comme celui qui entendant une bonne blague et s’imaginant la raconter plus tard à son tour se met, instantanément, 
            à la retenir dans sa tête pour pouvoir la restituer.
          </p>  

          <div className="sujetstyle">
            <h3>L'entrainer</h3>
          </div>
          <p className="paragraphStyle">
            Alain Sotto<br />
            En maths, on peut se faire aider par des vidéos qui reprennent exactement les programmes scolaires. <br />
            L’important est de s’entraîner tous les jours jusqu’à ce que l’enfant réussisse à restituer la leçon tout seul. 
            Les maths demandent vraiment un entraînement quotidien. <br />
            Quant à la dictée préparée, souvent l’enfant apprend les mots par coeur. <br />
            On sait qu’avec cette méthode, ces mots seront aussi vite oubliés. Il faut, au contraire, installer une pédagogie de la
            mémorisation, autrement dit, analyser le mot. <br />
            Par exemple : pourquoi le mot éléphant peut poser problème ? Il faut se souvenir que le son « f » s’écrit « ph » et qu’à la
            fin il y a un « t » parce qu’on dit aussi éléphante ou éléphanteau. <br />
            N’oublions pas non plus que le mot est d’abord un son que l’on transcrit ensuite. Pour être su, un mot doit
            d’abord être dit. <br /><br />

            Brigitte Prot<br />
            On peut entraîner son enfant mais sans le surcharger avec trop de travail supplémentaire.<br /> 
            J’ai entendu certains enfants me dire : « je ne veux plus réviser avec mes parents parce qu’ils me donnent trop de travail 
            à faire, beaucoup plus que la maîtresse. »
          </p>
          <div className="greenArea">
            <div className="greenAreaTitle">Ne pas se focaliser sur les notes</div>
            <p className="greenAreaPragraph">
                Dans les textes officiels, les évaluations en primaire ne sont plus notées, mais indiquent si les compétences évaluées 
                sont acquises, en cours d’acquisition ou non acquises. « Cela permet de garder à l’esprit que l’acquisition d’une compétence 
                se fait graduellement », explique Séverine Bonaric-Gros, enseignante à l’école Sainte-Geneviève, à Montpellier (34). 
                <br /><br />
                « L’évaluation par compétences reconnaît à chacun la possibilité de faire des erreurs et d’apprendre à son rythme.
                Et enfin d’être acteur de son évaluation. », complète-t-elle. L’enfant qui n’est plus stressé, sait ce qu’il doit améliorer. 
                L’enseignante utilise l’outil Pidapi, de l’Icem 34, pour évaluer ses élèves. <br />
                L’enfant obtient des ceintures de couleur au fur et à mesure de ses apprentis-sages et acquisitions. Une façon motivante 
                et optimiste d’évaluer les élèves.
            </p>
          </div>
      <Footer />
    </>
  );
};

export default CollegePage;