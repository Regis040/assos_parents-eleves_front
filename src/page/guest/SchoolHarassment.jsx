import React from "react";
import Header from "../../component/guest/Header";
import Footer from "../../component/guest/Footer";
import './SchoolHarassment.scss';

const SchoolHarassment = () => {
  return (
    <>
      <Header />
          <div className="soustitre">
                <h2>Le harcélement scolaire</h2>
          </div>
          <div className="sujetstyle">
            <h3>Harcèlement scolaire : les résultats de la première enquête nationale</h3>
          </div>
          <p>
            En novembre 2023, à l’occasion de la journée nationale de lutte contre le harcèlement à l’école, 
            tous les élèves du CE2 à la Terminale ont pu remplir anonymement un questionnaire d’auto-évaluation. 
            En corollaire, une enquête a été menée pour obtenir des indicateurs nationaux sur le harcèlement scolaire 
            dans les écoles et établissements publics.

            Le ministère de l’éducation nationale et de la jeunesse publie en février 2024 les "Premiers résultats statistiques 
            de l’Enquête harcèlement 2023". Celle-ci a été réalisée en novembre 2023 auprès de 21 700 élèves du CE2 à la Terminale. 
            17 400 d’entre eux y ont répondu, dont 37% d’écoliers, 23% de collégiens et 40% de lycéens, scolarisés dans 
            près de 600 établissements de France.
          </p>
          <div className="sujetstyle">
            <h3>Le harcèlement scolaire en 2023</h3>
          </div>
          <p>
          Le harcèlement en milieu scolaire est "le fait, pour un élève ou un groupe d’élèves, de faire subir de manière répétée 
          à un camarade des propos ou des comportements négatifs, voire violents". Les atteintes les plus couramment déclarées sont :

            à l’école :
              un ou plusieurs élèves racontent des choses fausses ou méchantes sur toi (17%),
              un ou plusieurs élèves t’ont fait du mal exprès (12%),
              tu t’es bagarré(e) avec un ou plusieurs élèves (12%) ;

            au collège et au lycée :
              un ou plusieurs élèves se moquent de toi ou t’insultent (11% des collégiens, 7% des lycéens),
              un ou plusieurs élèves font courir des rumeurs sur toi (7% des collégiens, 5% des lycéens),
              un ou plusieurs élèves t’ont bousculé(e) volontairement (7% des collégiens, 3% des lycéens).

            Les garçons affirment plus souvent s’être bagarrés. Les filles, quant à elles, se disent davantage victimes de 
            harcèlement psychologique (mise à l’écart, rumeurs…).

            L’indice de victimation se définit par le nombre d’atteintes répétées subies. Il ressort de l’enquête que :

            3% des écoliers ont subi huit atteintes ou plus ;
            5% des collégiens cinq atteintes ou plus ;
            3% des lycéens cinq atteintes ou plus.
          </p>
          <div className="sujetstyle">
            <h3>Des répercussions psychologiques et scolaires</h3>
          </div>
          <p>
          La peur d’aller à l’école à cause d’un ou de plusieurs élèves affecte fréquemment :

          5% des écoliers ;
          2% des collégiens ;
          2% des lycéens.

          5% des répondants déclarent ne pas avoir d’ami dans leur établissement.

          L’indice de qualité de vie scolaire dénombre les réponses négatives aux questions liées à la qualité de vie à l’école, 
          au travail scolaire et à l’assiduité. Cet indice se dégrade à mesure que le nombre d’atteintes subies augmente. 
          En croisant les indices de victimation et de qualité de vie scolaire, on mesure l’ampleur du harcèlement scolaire. Il touche :

          5% des écoliers du CE2 au CM2 ;
          6% des collégiens ;
          4% des lycéens.
          Le croisement des indices permet aussi d’identifier des situations dites "à surveiller", qui concernent 19% des écoliers, 
          6% des collégiens et 4% des lycéens.

          Parmi les élèves qui se sentent souvent embêtés dans leur établissement ou sur internet, la part de ceux qui ont demandé de 
          l’aide (auprès d’un élève, d’un parent ou d’un membre de l’équipe éducative) croît avec le nombre d’atteintes subies. 
          30% des écoliers et la moitié des collégiens et lycéens connaissent le numéro de téléphone contre le harcèlement 
          scolaire.
          </p>
          <div className="sujetstyle">
            <h3>Des répercussions psychologiques et scolaires : sous forme de tableau</h3>
          </div>
          <p>

          </p>
      <Footer />
    </>
  );
};

export default SchoolHarassment;