import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

it('should match the snapshot', () => {
  const renderedComponent = shallow(<App />, { disableLifecycleMethods: true });

  expect(renderedComponent).toMatchSnapshot();
});
