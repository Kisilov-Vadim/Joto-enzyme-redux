import React from 'react';
import {shallow} from 'enzyme';

//import components and utilits
import Congrats from './Congrats'; 
import {findByTestAttr, checkPropsTypes} from '../../../test/testUtils';


//START TESTS
describe('test congrats component', () => {

  const defaultProps = { success: false }; 

  const setup = (props={}) => {
    const setupProps = { ...defaultProps, ...props }; 
    return shallow(<Congrats {...setupProps} />); 
  };

  test('renders without err', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-congrats'); 
    expect(component.length).toBe(1); 
  })

  test('renders no text when "success" prop is false', () => {
    const wrapper = setup({ success: false });
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.length).toBe(1); 
  })

  test('renders non-empty congrats message when "success"', () => {
    const wrapper = setup({ success: true });
    const message = findByTestAttr(wrapper, 'congrats-message');
    expect(message.text().length).not.toBe(0);
  })

  test('does not throw warning with expected props', () => {
    const expectedProps = { success: false }; 
    checkPropsTypes(Congrats, expectedProps);
  })
})