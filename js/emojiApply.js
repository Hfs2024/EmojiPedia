const emojiContainer = document.querySelector(".emoji-container");

function applyEmoji(emoji) {
    const capitalizedName = emoji.name ?
        emoji.name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') :
        'Unknown emoji';

    emojiContainer.innerHTML = `
    <div class='emoji-display'>Emoji: ${emoji.emoji}</div>
    <button id='copyBtn'><i class='fas fa-copy'></i> Copy</button>
    <button id='setAsFavorite'><i class='fas fa-star'></i> Set as favorite</button>
    <h3>Emoji meaning: ${capitalizedName}</h3>`;

    const copyBtn = document.getElementById('copyBtn');
    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(emoji.emoji).then(() => {
            alert("Copied!");
        }).catch(err => {
            alert("Failed to copy!");
        });
    });

    const setAsFavoriteBtn = document.getElementById('setAsFavorite');
    setAsFavoriteBtn.addEventListener('click', () => {
        setAsFavorite(emoji.emoji);
    });
}
