import { emojiData } from './emojiMap.js';

const randomEmojiBtn = get("randomEmojiBtn");

randomEmojiBtn.addEventListener("click", () => {
    getRandomEmoji();
});

function getRandomEmoji() {
    const randomEmoji = emojiData[Math.floor(Math.random() * emojiData.length)];
    console.log(randomEmoji);
    emojiContainer.innerHTML = `
      <div class='emoji-display'>Emoji: ${randomEmoji.emoji}</div>
      <button id='copyBtn'><i class='fas fa-copy'></i> Copy</button>
      <button id='setAsFavorite'><i class='fas fa-star'></i> Set as favorite</button>
      <h3>Emoji meaning: ${randomEmoji.name}</h3>
    `
    const copyBtn = get("copyBtn");
    copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(randomEmoji.emoji).then(() => {
            alert("Copied!");
        }).catch(err => {
            alert("Failed to copy!");
        });
    });

    const setAsFavoriteBtn = document.getElementById('setAsFavorite');
    setAsFavoriteBtn.addEventListener('click', () => {
        setAsFavorite(randomEmoji.emoji);
    });
}   