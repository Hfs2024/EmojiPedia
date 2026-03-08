import { emojiData } from './emojiMap.js';

export function findEmoji(emojiArg) {
    const emojiFound = emojiData.find(emoji => emoji.emoji === emojiArg);
    console.log(emojiFound);
    emojiContainer.innerHTML = `
    <div class='emoji-display'>Emoji: ${emojiFound.emoji}</div>
    <button id='copyBtn'><i class='fas fa-copy'></i> Copy</button>
    <button id='setAsFavorite'><i class='fas fa-star'></i> Set as favorite</button>
    <h3>Emoji meaning: ${emojiFound.name}</h3>`;
    
    const copyBtn = document.getElementById('copyBtn');
    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(emojiFound.emoji).then(() => {
            alert("Copied!");
        }).catch(err => {
            alert("Failed to copy!");
        });
    });

    const setAsFavoriteBtn = document.getElementById('setAsFavorite');
    setAsFavoriteBtn.addEventListener('click', () => {
        setAsFavorite(emojiFound.emoji);
    });
}