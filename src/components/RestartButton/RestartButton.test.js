import React, { createFactory } from 'react';
import { shallow } from 'enzyme';

import RestartButton, { UnconnectedRestartButton } from './RestartButton'; 
import { findByTestAttr, storeFactory } from '../../../test/testUtils';

let setup = (state={}) => {
  let store = storeFactory(state); 
  let wrapper = shallow(<RestartButton store={store} />).dive().dive();
  return wrapper;
}

describe('render restart button component with success === true', () => {
  let wrapper; 
  beforeEach(() => {
    wrapper = setup({ success: true }); 
  })

  test('render main containder', () => {
    let main = findByTestAttr(wrapper, 'container'); 
    expect(main.length).toBe(1);
  })

  test('render restart button inside container', () => {
    let button = findByTestAttr(wrapper, 'restart-button');
    expect(button.length).toBe(1);
  })
});

describe('render restart button component with success === false', () => {
  let wrapper; 
  beforeEach(() => {
    wrapper = setup({ success: false }); 
  })

  test('not render main containder', () => {
    let main = findByTestAttr(wrapper, 'container'); 
    expect(main.length).toBe(0);
  })

  test('not render restart button inside container', () => {
    let button = findByTestAttr(wrapper, 'restart-button');
    expect(button.length).toBe(0);
  })
});

describe('simulate restart button click', () => {
  let restartFn = jest.fn(), 
      wrapper; 

  beforeEach(() => {
    let props = {
      restartGame: restartFn,
      success: true
    }

    wrapper = shallow(<UnconnectedRestartButton {...props} />);
    let button = findByTestAttr(wrapper, 'restart-button');
    button.simulate('click');
  })

  test('click is working', () => {
    let clickCount = restartFn.mock.calls.length;
    expect(clickCount).toBe(1);
  })
})