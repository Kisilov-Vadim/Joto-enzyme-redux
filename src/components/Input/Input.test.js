import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../../../test/testUtils';
import Input, { UnconnectedInput } from '../Input/Input';
import { shallowEqual } from 'react-redux';

const setup = (initialState={}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />).dive();
  return wrapper;
};

describe('render', () => {
  describe('word has not been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState).dive();
    })

    test('renders component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });

    test('render input  box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(1);
    });

    test('renders submit button', () => {
      const button = findByTestAttr(wrapper, 'submit-button');
      expect(button.length).toBe(1);
    })
  });
  
  describe('word has been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState).dive();
    })

    test('renders component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(0);
    });

    test('does not render input  box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(0);
    });

    test('does not renders submit button', () => {
      const button = findByTestAttr(wrapper, 'submit-button');
      expect(button.length).toBe(0);
    })
  })
}); 

describe('redux props', () => {
  test('has success piece of state as prop', () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.props().success;
    expect(successProp).toBe(true);
  });
  test('guessWord action creator is a function prop', () => {
    const wrapper = setup();
    const guessWordProp = wrapper.props().guessWord; 
    expect(guessWordProp).toBeInstanceOf(Function);
  })
});

describe('guessWord action creater all', () => {
  let guessWordMock,
      wrapper,
      guessedWord = 'train';
  
  beforeEach(() => {
    guessWordMock = jest.fn();

    const props = {
      guessWord: guessWordMock
    }
  
    wrapper = shallow(<UnconnectedInput {...props} />);

    //add value to input
    wrapper.setState({ currentGuess: guessedWord });
    //simulate click
    const button = findByTestAttr(wrapper, 'submit-button'); 
    button.simulate('click', { preventDefault() {} });
  })

  test('calls "guessWord" when button is clicked', () => {
    const guessWordClickCount = guessWordMock.mock.calls.length; 
    expect(guessWordClickCount).toBe(1);
  });

  test('calls guessWord with input calue as argument', () => {
    const guessWordArg = guessWordMock.mock.calls[0][0];
    expect(guessWordArg).toBe(guessedWord);
  })
})