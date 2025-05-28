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
    },
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-projects': 'Projects',
        'nav-contact': 'Contact',
        'nav-about': 'About',

        // Page d'accueil
        'hero-subtitle': 'Student in Computer Science BUT',
        'projects-title': 'My projects',
        'btn-java': 'Java Project',
        'btn-php': 'Php Project',
        'btn-ndi': 'NDI Project',

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