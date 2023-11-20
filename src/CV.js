import React from 'react';
import './CV.css';

import profileImage from './IMG.jpg';

function CV() {
  return (
    <div className="cv-container">
      <header>
        <div className="profile">
          <img src={profileImage} alt="Profile" className="profile-image" />
          <h1>Najwa Satori</h1>
        </div>
        <div className="contact">
          <p>Email: najwa.satori2001@example.com</p>
          <p>Adresse: Résidence Evariste Galois</p>
          <p>Téléphone: 07-75-95-43-43</p>
        </div>
      </header>
      <section className="resume">
        <div className="Formation universitaire">
          <h2>Formation universitaire</h2>
        <ul>
          <li>2éme année master MIASHS parcours Web Analyst - Université Lille - 2023, En cours</li>
          <li>1ère année master Filière ingénierie des systèmes d’informations - ESISA - 2022, 2023</li>
          <li>Licence en ingénirie de logiciel - ESISA - 2019, 2022</li>
          <li>Baccalauréat en physique chimie - AL Maarifa - 2018, 2019</li>
        </ul> 
        </div>
        <div className="Expérience professionnelle">
          <h2>Expérience professionnelle</h2>
        <ul>
          <li>06/22 – 07/22 | Stage à 3A SOLUTIONS : Corsica - France
              Thème : Conception et réalisation d’une application 
              version desktop et mobile pour la développement 
              des outils de gestion CRM et ERP . 
              Technologies utilisées : WinDev 25, WinDev 25 mobile, Scrum</li>
          <li>07/21 – 09/21 | Stage à CELATEC : Fès - Maroc
            Thème : Conception et réalisation d’une application de gestion de stock 
            Technologies utilisées : C#, MySQL, Excel.</li>
          <li>06/20 – 07/20 | Stage au Centre de référence de santé reproductive 
              Fès - Maroc
              Thème : Gestion de stock, la planification des plannings du 
              personnel, la gestion du flux de patients.</li>  
        </ul> 
        </div>
        <div className="Compétences informatiques">
          <h2>Compétences informatiques</h2>
          <ul>
            <li>Mathématique et statistiques :
                Recherche opérationnelle, Analyse Donnée,
                Analyse numérique</li>
            <li>Langages de programmation :
                Python, Langage R, Java, C/C++, Visual Basic, VB.NET, 
                WLangage</li>
            <li>Business Intelligence (BI) : 
                Data Mining, Data Warehouse</li>
            <li>Technologies Web :
                HTML5, CSS3, JS, PHP, XML, AJAX, jQuery, Bootstrap</li>
            <li>Environnement de développement :
                Pycharm, Eclipse, Microsoft Visual Studio, Android 
                Studio</li>
          </ul>
        </div>
        <div className="Certificats">
          <h2>Certificats</h2> 
          <ul>
            <li>Project Management: Master Project 
                Management - PMP/PMI.</li>
            <li>
              Salesforce CRM Analytics: Einstein & 
              Tableau CRM.
            </li>
            <li>
              Data Analystes Toolbox: Excel, Power BI, 
              Pivot Tables.
            </li>
          </ul>
        </div>
        <div className="Langues">
          <h2>Langues</h2>
          <ul>
            <li>
              Français : DALF C1
            </li>
            <li>
              Anglais : Préparation TOEIC
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default CV;
