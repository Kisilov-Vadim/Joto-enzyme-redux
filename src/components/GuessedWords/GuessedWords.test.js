import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr, checkPropsTypes} from '../../../test/testUtils';
import GuessedWords from './GuessedWords';

const defaultProps = {
  guessedWords: [
    {guessedWord: 'train', letterMatchCount: 3}
  ]
}; 

const setup = (props={}) => {
  let setupProps = {...defaultProps, ...props};
  return shallow(<GuessedWords {...setupProps} />); 
}

test('does not throw warning with expected props', () => {
  checkPropsTypes(GuessedWords, defaultProps);
});

describe('if there are no words guessed', () => {
  let wrapper; 
  beforeEach(() => {
    wrapper = setup({guessedWords: []});
  })

  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  })

  test('renders instructions to guess a word', () => {
    const instrucions = findByTestAttr(wrapper, 'guessed-instructions'); 
    expect(instrucions.length).toBe(1)
  })
})

describe('if there are words guessed', () => {
  let wrapper;
  let guessedWords = [
    {guessedWords: 'train', letterMatchCount: 3},
    {guessedWords: 'agile', letterMatchCount: 1},
    {guessedWords: 'party', letterMatchCount: 5}
  ]; 

  beforeEach(() => {
    wrapper = setup({guessedWords})
  })

  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });

  test('renders guessed words section', () => {
    const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words'); 
    expect(guessedWordsNode.length).toBe(1);
  })

  test('correct number of guessed words', () => {
    const guessedWordsNode = findByTestAttr(wrapper, 'guessed-word');
    expect(guessedWordsNode.length).toBe(guessedWords.length);
  })
})