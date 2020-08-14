import checkPropTypes from 'check-prop-types';
import rootReducer from '../src/reducer/index';
import { createStore } from 'redux';

//Return node with the given data-test attribute
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

export const checkPropsTypes = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps, 
    'prop',
    component.name); 

  expect(propError).toBeUndefined();
}

export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState);
}

