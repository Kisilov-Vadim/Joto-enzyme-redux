import {getLetterMatchCount} from './index';

describe('getLetterMatchCount', () => {

  let secretWord = 'party';

  test('return correct count when there no matching letters', () => {
    const letterMatchCount = getLetterMatchCount('bones', secretWord);
    expect(letterMatchCount).toBe(0);
  })

  test('returns correct count where there are 3 matching letters', () => {
    const letterMatchCount = getLetterMatchCount('train', secretWord); 
    expect(letterMatchCount).toBe(3)
  })

  test('returns correct count when there are duplicate letters in the guess', () => {
    const letterMatchCount = getLetterMatchCount('parka', secretWord); 
    expect(letterMatchCount).toBe(3);
  })
})