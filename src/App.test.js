import React from 'react';
import { shallow } from 'enzyme';

import App, { UnconnectedApp } from './App';
import { storeFactory } from '../test/testUtils';


const setup = (state={}) => {
  const store = storeFactory(state);
  let wrapper = shallow(<App store={store} />).dive();
  return wrapper; 
}

describe('redux properties', () => {
  test('has access to "success" state', () => {
    let success = true; 
    let component = setup({ success });
    const prop = component.props().success; 
    expect(prop).toBe(success);
  });

  test('has access to secretWord state', () => {
    let secretWord = 'party'; 
    let component = setup({ secretWord }); 
    const prop = component.props().secretWord; 
    expect(prop).toBe(secretWord);
  });

  test('has access to guessedWords state', () => {
    let guessedWords = [{ guessedWord: 'train', letterMatchCount: 3 }]; 
    const wrapper = setup({ guessedWords }); 
    const prop = wrapper.props().guessedWords; 
    expect(prop).toEqual(guessedWords);
  });

  test('getSecretWord action creator is a function on the props', () => {
    const wrapper = setup(); 
    const prop = wrapper.props().getSecretWord; 
    expect(prop).toBeInstanceOf(Function);
  })

  test('getSecretWord runs on App mount', () => {
    const getSecretWordMock = jest.fn();
    const props = {
      getSecretWord: getSecretWordMock,
      success: false,
      guessedWords: []
    }  
  
    const wrapper = shallow(<UnconnectedApp {...props} />);
    
    //run lifcicle methoc
    wrapper.instance().componentDidMount();

    //check to see if mock ran
    const getSecretWordCallCount = getSecretWordMock.mock.calls.length; 

    expect(getSecretWordCallCount).toBe(1);
  })
})