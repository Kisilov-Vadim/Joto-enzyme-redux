export const getLetterMatchCount = (guessedWord, secretWord) => {
  let secretLetterSet = new Set(secretWord.split('')); 
  let guessedLetterSet = new Set(guessedWord.split(''));

  return [...secretLetterSet].filter(letter  => guessedLetterSet.has(letter)).length;
}