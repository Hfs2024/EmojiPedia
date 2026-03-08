import { findEmoji } from './findEmoji.js';

const menuIcon = document.querySelector('.fa-bars');
const menu = document.querySelector(".menu-content");
const menuClose = document.querySelector('.menu-close');
const container = document.querySelector('.emoji-container');

menuIcon.addEventListener('click', function () {
    menu.style.display = "block";
});

menuClose.addEventListener('click', function () {
    menu.style.display = "none";
});

document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        const action = this.dataset.action;
        handleMenuAction(action);
        menu.style.display = "none";
    });
});

function handleMenuAction(action) {
    switch (action) {
        case 'home':
            window.scrollTo({ top: 0, behavior: 'smooth' });
            break;
        case 'categories':
            showCategories();
            break;
        case 'popular':
            showPopularEmojis();
            break;
        case 'recent':
            showRecentSearches();
            break;
        case 'about':
            showAbout();
            break;
        case 'github':
            window.open('https://www.github.com/', '_blank');
            break;
        case 'favorites':
            showFavorites();
            break;
        case 'categories':
            showCategories();
            break;
    }
}

function showPopularEmojis() {
  container.innerHTML = `
    <h3>Popular Emojis</h3>
    <div class="popular-emojis">
      <span class="popular-emoji">😂</span>
      <span class="popular-emoji">❤️</span>
      <span class="popular-emoji">👍</span>
      <span class="popular-emoji">😊</span>
      <span class="popular-emoji">🎉</span>
      <span class="popular-emoji">🔥</span>
      <span class="popular-emoji">✨</span>
      <span class="popular-emoji">💯</span>
    </div>
    <p>Click any emoji to see its meaning!</p>
  `;

  document.querySelectorAll('.popular-emoji').forEach(span => {
    span.addEventListener('click', () => {
      const result = findEmoji(span.textContent);
      if (result) {
        applyEmoji(result);
      } 
    });
  });
}

/* function showRecentSearches() {
    const recentSearches = JSON.parse(localStorage.getItem('recentSearches') || '[]');

    if (recentSearches.length === 0) {
        container.innerHTML = `
                <h3>Recent Searches</h3>
                <p>No recent searches yet. Start searching for emojis!</p>
            `;
    } else {
        container.innerHTML = `
                <h3>Recent Searches</h3>
                <div class="recent-list">
                    ${recentSearches.slice(0, 5).map(emoji =>
            `<span class="recent-emoji">${emoji}</span>`
        ).join('')}
                </div>
                <p>Click any emoji to see its meaning again!</p>
            `;
    }
} */

function showAbout() {
    container.innerHTML = `
            <h3>About Emojipedia</h3>
            <p>This is an open source project built by Codemaster and licensed under MIT.</p>
            <p>Version: 1.0.0</p>
            <p>Made with ❤️ using HTML, CSS, and JavaScript</p>
        `;
}

function showFavorites() {
    const emojis = JSON.parse(localStorage.getItem("emojis")) || [];
    emojiContainer.innerHTML = `
      <h1>Favorite emojis: </h1>
      <div class="favorite-emojis">
        ${emojis.map(emoji => `<span class="favorite-emoji">${emoji}</span>`).join('')}
      </div>
    `;
}

const categories = {
    smileys: ['😀', '😂', '🥰', '😎'],
    animals: ['🐶', '🦁', '🐸', '🦊'],
    food: ['🍕', '🍔', '🍕', '🍰'],
    activities: ['⚽', '🏀', '🎯', '🎮'],
    travel: ['🚗', '✈️', '🚂', '🏝'],
    objects: ['💡', '⏰', '📱', '💻'],
    symbols: ['❤️', '⭐', '✅', '⚠️']
};

function showCategories() {
    const categoryKeys = Object.keys(categories);
    
    emojiContainer.innerHTML = `
        <h3>Browse Categories</h3>
        <div class="categories-grid">
            ${categoryKeys.map(category => `
                <div class="category-card" data-category="${category}">
                    <h4>${category.charAt(0).toUpperCase() + category.slice(1)}</h4>
                    <div class="category-emojis">
                        ${categories[category].map(emoji => 
                            `<span class="category-emoji emojiBtn">${emoji}</span>`
                        ).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    const emojiBtns = document.querySelectorAll(".emojiBtn");
    emojiBtns.forEach(btn => {
        btn.onclick = () => {
            const emoji = btn.textContent;
            const emojiData = findEmoji(emoji);
            if (emojiData) {
                applyEmoji(emojiData);
            }
        }
    })
}
