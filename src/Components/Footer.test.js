import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Footer from './Footer';

configure({ adapter: new Adapter() });

it('<Footer /> have one header html tag', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.find('header')).to.have.length(1);
});
