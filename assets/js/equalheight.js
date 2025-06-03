function equalizeCarouselCardHeights() {
    const articles = document.querySelectorAll('.carousel article');
    let maxHeight = 0;

    // Reset heights first
    articles.forEach(article => {
        article.style.height = 'auto';
        const height = article.offsetHeight;
        maxHeight = Math.max(maxHeight, height);
    });

    // Set all articles to the maximum height
    articles.forEach(article => {
        article.style.height = maxHeight + 'px';
    });
}

// Run on page load
window.addEventListener('load', equalizeCarouselCardHeights);

// Run on window resize
window.addEventListener('resize', equalizeCarouselCardHeights); 