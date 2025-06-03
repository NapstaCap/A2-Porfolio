const translations = {
    fr: {
        // Navigation
        'nav-home': 'Accueil',
        'nav-projects': 'Projets',
        'nav-contact': 'Contact',
        'nav-about': 'À propos',

        // Page d'accueil
        'hero-subtitle': 'Étudiant en BUT Informatique',
        'projects-title': 'Mes Projets',
        'btn-java': 'Projet Java',
        'btn-php': 'Projet PHP',
        'btn-ndi': 'Projet NDI',
        'btn-stage-ecosm' : 'Stage chez ECOSM',
        'apprentissage-title': `Mon Portfolio d'Apprentissage`,
        'btn-apprentissage2': 'Deuxième année',

        // Page contact
        'contact-title': 'Me Contacter',
        'btn-email': 'Email',
        'btn-linkedin': 'LinkedIn',
        'btn-cv': 'Télécharger CV',

        // Page à propos
        'about-title': 'À propos de moi',
        'skills-title': 'Mes Compétences',

        // Timeline
        'timeline-title': 'Mes formations',
        'timeline-bac': 'BAC STI2D',
        'timeline-but1': 'BUT Informatique - 1ère année',
        'timeline-but2': 'BUT Informatique - 2ème année',
        'timeline-lycee': 'Lycée Jean Lurçat à Martigues',
        'timeline-iut': 'IUT Montpellier-Sète',

        // Footer
        'footer-text': `Étudiant en deuxième année de BUT Informatique à l'IUT Montpellier-Sète`,
        'footer-rights': '© 2025 Dorian BARNIER. Tous droits réservés.',

        // Page projets*
        'project-skills': `Compétences demandées`,
        'project-group': `Travail en groupe`,
        'project-agile': `Méthodes agiles`,
        'project-duo': `Travail en binôme`,

        // Project Php
        'php-title': `Projet Php - Site d'avis de poursuite d'étude`,
        'php-text1': `Dans un contexte où les parcours académiques deviennent de plus en plus diversifiés et compétitifs, 
        les établissements d'enseignement supérieur sont confrontés à devoir évaluer efficacement le candidatures des étudiants 
        en vue de leur admission ou de leur poursuite d'études.`,
        'php-text2': `Les processus d’évaluation actuels sont souvent peu ergonomiques, manuels, et dispersés entre
                    différents
                    outils, ce qui peut engendrer une perte d’efficacité.`,
        'php-text3': `Ce projet vise à répondre à ce besoin en proposant une plateforme numérique sous forme de site web
                    dédiée aux universités ainsi qu’au responsable de poursuite d’études du département Informatique de
                    l’IUT Montpellier-Sète. Celle-ci permet aux jurys d’évaluation d’exprimer leur avis sur la
                    candidature
                    de chaque élève en utilisant des mentions telles que très favorable, favorable ou réservé ainsi
                    qu’un commentaire.`,
        'php-text4': `L'objectif principal de ce projet était à la fois d'appliquer l'apprentissage des méthodes agiles
                    dans
                    un projet, mais aussi d'utiliser l'apprentissage du langage Php et l'utilisation de phpMyAdmin`,
        'php-report': `Rapport de projet`,

        // Projet Java
        'java-title': `Projet Java - Jeu de société "Trains"`,
        'java-text1': `Le but de ce projet est de produire une implémentation en Java du jeu de plateau japonais Trains sur
                    une durée d'un mois.`,
        'java-text2': `Le principe du jeu est de construire un réseau ferroviaire en plaçant des rails sur un plateau
                    réprésentant la région autour de Tokyo ou d'Osaka. Chacun à leur tour les joueurs jouent des cartes
                    qui
                    permettent à la fois d'acheter de nouvelles cartes pour améliorer leur deck et de placer des rails
                    ou des
                    villes sur le plateau de jeu pour améliorer leur réseau ferroviaire.`,
        'java-text3': `Ce projet avait pour but de mettre en œuvre les diverses compétences (développement orienté objets,
                    qualité de développement, algorithmes de graphes et interfaces homme-machine) apprises tout au long
                    de l'année
                    dans un projet d'une plus grande envergure que tout nos autres projets de groupes faits
                    précédemment.`,

        // Projet NDI
        'ndi-title': `Projet NDI - Site web sur l'eau et l'environnement`,
        'ndi-text': `Lors d'un évènement nommé "La nuit de l'info" nous avons du réaliser en groupe un site web dans la nuit sur le
                    thème de l'eau et l'environnement.`,
        'ndi-website': `Le site web`,

        // Apprentissage
        'skill3': 'Compétence 3',
        'skill4': 'Compétence 4',
        'skill5': 'Compétence 5',
        'niv1skill3': 'Niveau 1 : Installer et configurer un poste de travail',
        'niv2skill3': 'Niveau 2 : Déployer des services dans une architecture réseau',
        'niv1skill4': `Niveau 1 : Concevoir et mettre en place une base de données à partir d'un cahier des charges client`,
        'niv2skill4': 'Niveau 2 : Optimiser une base de données, intéragir avec une application et mettre en oeuvre la sécurité',
        'niv1skill5': 'Niveau 1 : Identifier les besoins métiers des clients et des utilisateurs',
        'niv2skill5': 'Niveau 2 : Appliquer une démarche de suivi de projet en fonction des besoins métiers des clients et des utilisateurs',
        'apprentissage-skill1': `Compétence 1 : Réaliser un développement d'application`,
        'apprentissage-skill2': `Compétence 2 : Optimisation des applications`,
        'apprentissage-skill3': `Compétence 3 : Administrer des systèmes informatiques communicants complexes`,
        'apprentissage-skill4': `Compétence 4 : Gérer des données de l’information`,
        'apprentissage-skill5': `Compétence 5 : Conduire un projet`,
        'apprentissage-skill6': `Compétence 6 : Collaborer au sein d’une équipe informatique`,

        // Stage ECOSM
        'ecosm-title': `Stage chez ECOSM - Développement Web/Développement Logiciel`,
        'ecosm-text1': `Lors de ma deuxième année en BUT Informatique à l'IUT Montpellier-Sète, un stage de 10 à 12 semaines m'a été imposé.
        Les contraintes de temps étant très restreintes, je n'ai pu avoir qu'un stage de 8 semaines au sein de l'entreprise ECOSM, 
        une entreprise spécialisée dans la conception de logiciels pour les médias.`,
        'ecosm-text2': `Ce stage s’inscrit donc dans un projet de développement consacré à un logiciel dédié à 
        l’édition de sous-titres ainsi qu’un site web destiné à la gestion de médias. Ces projets m’ont permis 
        d’explorer des défis techniques liés à l’optimisation, l’ergonomie, mais notamment l'expérience du point de vue 
        de l’utilisateur. Tout cela m’a permis de consolider mes compétences en développement informatique, mais aussi 
        dans ma logique et la façon dont j’organise mes chemins de pensées.`,
        'ecosm-text3': `Bien que la durée de ce stage fut courte, ce fut une expérience plus que bénéfique, 
        j'ai pu explorer de multiples compétences, accompagné de personnes très bienveillantes et très pédagogue, avec des projets vraiment intéressants.`,
        'ecosm-solo': 'Travail seul supervisé',
        'ecosm-report': 'Rapport de stage'
    },
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-projects': 'Projects',
        'nav-contact': 'Contact',
        'nav-about': 'About',

        // Page d'accueil
        'hero-subtitle': 'Student in Computer Science BUT',
        'projects-title': 'My Projects',
        'btn-java': 'Java Project',
        'btn-php': 'Php Project',
        'btn-ndi': 'NDI Project',
        'btn-stage-ecosm' : 'Internship at ECOSM',
        'apprentissage-title': `My Learning Portfolio`,
        'btn-apprentissage2': 'Second year',

        // Page contact
        'contact-title': 'Contact Me',
        'btn-email': 'Email',
        'btn-linkedin': 'LinkedIn',
        'btn-cv': 'Download CV',

        // Page à propos
        'about-title': 'About Me',
        'skills-title': 'My Skills',

        // Timeline
        'timeline-title': 'My Courses',
        'timeline-bac': 'STI2D High School Diploma',
        'timeline-but1': 'Computer Science BUT - 1st year',
        'timeline-but2': 'Computer Science BUT - 2nd year',
        'timeline-lycee': 'Jean Lurçat High School in Martigues',
        'timeline-iut': 'IUT Montpellier-Sète',

        // Footer
        'footer-text': `Second year student of Computer Science BUT at the IUT Montpellier-Sète`,
        'footer-rights': '© 2025 Dorian BARNIER. All rights reserved.',

        // Page projets*
        'project-skills': `Skills required`,
        'project-group': `Group work`,
        'project-agile': `Agile methods`,
        'project-duo': `Work in pairs`,

        // Projet Php
        'php-title': `Php Project - Continuing Study Notice Website`,
        'php-text1': `In a context where academic careers are becoming increasingly diverse and competitive, 
        higher education institutions are faced with the need to effectively assess student applications 
        for admission or further study.`,
        'php-text2': `Current assessment processes are often unergonomic, manual and dispersed between
                    different
                    tools, which can lead to a loss of efficiency.`,
        'php-text3': `This project aims to meet this need by offering a digital platform in the form of a website
                    dedicated to universities and the Head of Continuing Studies in the IT Department of
                    the IUT Montpellier-Sète. This allows the evaluation juries to express their opinion on the
                    application
                    of each student using terms such as very favorable, favorable or reserved as well
                    just a comment.`,
        'php-text4': `The main objective of this project was both to apply agile learning methods
                    in
                    a project, but also to use learning the Php language and using phpMyAdmin`,
        'php-report': `Project report`,

        // Projet Java
        'java-title': `Java Project - Board game "Trains"`,
        'java-text1': `The goal of this project is to produce a Java implementation of the Japanese board game Trains on
                    a period of one month.`,
        'java-text2': `The principle of the game is to build a railway network by placing rails on a platform
                    representing the area around Tokyo or Osaka. Players play cards in turn
                    who
                    Allow both to buy new cards to improve their deck and place rails
                    or the
                    cities on the game board to improve their rail network.`,
        'java-text3': `This project aimed to implement the various skills (object-oriented development,
                    development quality, graph algorithms and human-machine interfaces) learned throughout
                    of the year
                    in a larger project than any of our other group projects made
                    previously.`,

        // Projet NDI
        'ndi-title': `NDI Project - Water and environment website`,
        'ndi-text': `During an event called "The night of the info" we had to realize a website in the night on the
                    water and the environment.`,
        'ndi-website': `The website`,

        // Apprentissage
        'skill3': 'Skill 3',
        'skill4': 'Skill 4',
        'skill5': 'Skill 5',
        'niv1skill3': 'Level 1 : Install and configure a workstation',
        'niv2skill3': 'Level 2 : Deploy services in a network architecture',
        'niv1skill4': `Level 1 : Design and implement a database based on a client specification`,
        'niv2skill4': 'Level 2 : Optimize a database, interact with an application and implement security',
        'niv1skill5': 'Level 1 : Identify business needs of customers and users',
        'niv2skill5': 'Level 2 : Apply a project monitoring approach based on the business needs of clients and users',
        'apprentissage-skill1': 'Skill 1 : Develop an application',
        'apprentissage-skill2': `Skill 2 : Optimizing Applications`,
        'apprentissage-skill3': `Skill 3 : Administer complex communicating computer systems`,
        'apprentissage-skill4': `Skill 4 : Manage information data`,
        'apprentissage-skill5': `Skill 5 : Lead a project`,
        'apprentissage-skill6': `Skill 6 : Collaborate as an IT team`,

        // Stage ECOSM
        'ecosm-title': `Internship at ECOSM - Web Development/Software Development`,
        'ecosm-text1': `During my second year in BUT Informatique at the IUT Montpellier-Sète, an internship of 10 to 12 weeks was imposed on me.
        The time constraints being very limited, I was only able to have an 8-week internship at ECOSM, 
        a company specialising in the design of media software.`,
        'ecosm-text2': `This internship is therefore part of a development project dedicated to a software dedicated 
        to the editing of subtitles and a website for media management. These projects allowed me to explore technical 
        challenges related to optimization, ergonomics but especially the experience from the user’s point of view. All 
        this allowed me to consolidate my skills in computer development, but also in my logic and the way I organize my paths of thought.`,
        'ecosm-text3': `Although the duration of this internship was short, it was a more than beneficial experience, 
        I was able to explore multiple skills, accompanied by very caring people and very pedagogue, with really interesting projects.`,
        'ecosm-solo': 'Work alone supervised',
        'ecosm-report': 'Internship report'
    }
};

// Fonctions pour gérer les cookies
function creerCookie(nom, contenu, jours = 30) {
    const date = new Date();
    date.setTime(date.getTime() + (jours * 24 * 60 * 60 * 1000));
    const expires = "; expires=" + date.toUTCString();
    document.cookie = nom + "=" + contenu + expires + "; path=/";
}

function recupererCookie(nom) {
    const nomRecherche = nom + "=";
    const cookiesList = document.cookie.split(';');

    for (let i = 0; i < cookiesList.length; i++) {
        let cookie = cookiesList[i].trim();
        if (cookie.indexOf(nomRecherche) === 0) {
            return cookie.substring(nomRecherche.length);
        }
    }
    return null;
}

// Fonction pour changer la langue
function changeLanguage(lang) {
    currentLanguage = lang;

    // Appliquer les traductions
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
            if (key === "btn-cv") {
                element.innerHTML = `<i class="fas fa-file-alt"></i> ` + translations[lang][key];
            }
        }
    });

    // Mettre à jour les boutons de langue
    updateLanguageButtons();

    // Sauvegarder la langue dans un cookie (persistant entre les pages)
    creerCookie('selectedLanguage', lang);

    // Optionnel : garder aussi localStorage pour la compatibilité
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem('selectedLanguage', lang);
    }
}

// Fonction pour mettre à jour l'apparence des boutons de langue
function updateLanguageButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    const activeBtn = document.querySelector(`[onclick="changeLanguage('${currentLanguage}')"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

// Fonction pour récupérer la langue sauvegardée
function getStoredLanguage() {
    // Priorité au cookie (fonctionne entre les pages)
    let savedLang = recupererCookie('selectedLanguage');

    // Si pas de cookie, essayer localStorage
    if (!savedLang && typeof(Storage) !== "undefined") {
        savedLang = localStorage.getItem('selectedLanguage');
    }

    // Si aucune sauvegarde, utiliser la langue par défaut
    return savedLang || 'fr';
}

// Initialiser la traduction au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = getStoredLanguage();
    changeLanguage(savedLanguage);
});

// Fonction utilitaire pour initialiser les traductions sur une nouvelle page
function initTranslations() {
    const savedLanguage = getStoredLanguage();
    changeLanguage(savedLanguage);
}