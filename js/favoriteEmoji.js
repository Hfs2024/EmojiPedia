function setAsFavorite(emoji) {
    const emojis = JSON.parse(localStorage.getItem("emojis")) || [];
    if (emojis.includes(emoji)) {
        emojis.splice(emojis.indexOf(emoji), 1);
    } else {
        emojis.push(emoji);
    }
    alert("Emoji added to favorites list!");
    localStorage.setItem("emojis", JSON.stringify(emojis));
}