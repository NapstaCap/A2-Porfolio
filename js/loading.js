// Script de gestion du chargement
document.addEventListener('DOMContentLoaded', function() {
    const loadingOverlay = document.getElementById('loadingOverlay');

    // Simuler un temps de chargement (vous pouvez ajuster)
    const loadingTime = 1500; // 1.5 secondes

    // Alternative: attendre que toutes les ressources soient chargées
    window.addEventListener('load', function() {
        setTimeout(hideLoading, 500); // Petit délai pour voir l'animation
    });

    // Ou utiliser un timer fixe
    // setTimeout(hideLoading, loadingTime);

    function hideLoading() {
        loadingOverlay.classList.add('hidden');

        // Supprimer complètement l'overlay après l'animation
        setTimeout(() => {
            loadingOverlay.style.display = 'none';
        }, 500);
    }
});