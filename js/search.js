import { emojiData } from './emojiMap.js';

const searchInput = get("searchInput");
const searchBtn = get("searchBtn");

searchBtn.addEventListener("click", () => {
    const emojiFound = emojiData.find(emoji => emoji.name === searchInput.value);
    if (emojiFound) console.log(emojiFound);
    else { alert("No emoji found!"); return; }

    applyEmoji(emojiFound);
});