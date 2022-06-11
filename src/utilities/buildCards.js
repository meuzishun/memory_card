const buildCards = (function () {
  const allCards = [];
  const royalty = ['J', 'Q', 'K', 'A'];
  const suits = ['hearts', 'spades', 'clubs', 'diamonds'];

  for (let i = 0; i < 13; i++) {
    const rank = i > 8 ? `${royalty[i - 9]}` : `${i + 2}`;
    for (let j = 0; j < 4; j++) {
      const suit = `${suits[j]}`;
      const card = {
        rank,
        suit,
      };
      allCards.push(card);
    }
  }

  return allCards;
})();

export default buildCards;
