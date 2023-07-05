import React from 'react';
import { shallow, render, mount } from 'enzyme';
import NextBtn from './NextBtn';

describe('NextBtn', () => {
  let props;
  let shallowNextBtn;
  let renderedNextBtn;
  let mountedNextBtn;

  const shallowTestComponent = () => {
    if (!shallowNextBtn) {
      shallowNextBtn = shallow(<NextBtn {...props} />);
    }
    return shallowNextBtn;
  };

  const renderTestComponent = () => {
    if (!renderedNextBtn) {
      renderedNextBtn = render(<NextBtn {...props} />);
    }
    return renderedNextBtn;
  };

  const mountTestComponent = () => {
    if (!mountedNextBtn) {
      mountedNextBtn = mount(<NextBtn {...props} />);
    }
    return mountedNextBtn;
  };  

  beforeEach(() => {
    props = {};
    shallowNextBtn = undefined;
    renderedNextBtn = undefined;
    mountedNextBtn = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
