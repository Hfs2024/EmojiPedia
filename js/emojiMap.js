import emojiJson from 'unicode-emoji-json/data-by-emoji.json' with { type: 'json' };

export const emojiData = Object.entries(emojiJson).map(([emoji, data]) => ({
  name: data.name.toLowerCase(), emoji: emoji
}));

console.log(emojiData.length);
