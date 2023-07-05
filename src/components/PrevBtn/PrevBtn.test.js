import React from 'react';
import { shallow, render, mount } from 'enzyme';
import PrevBtn from './PrevBtn';

describe('PrevBtn', () => {
  let props;
  let shallowPrevBtn;
  let renderedPrevBtn;
  let mountedPrevBtn;

  const shallowTestComponent = () => {
    if (!shallowPrevBtn) {
      shallowPrevBtn = shallow(<PrevBtn {...props} />);
    }
    return shallowPrevBtn;
  };

  const renderTestComponent = () => {
    if (!renderedPrevBtn) {
      renderedPrevBtn = render(<PrevBtn {...props} />);
    }
    return renderedPrevBtn;
  };

  const mountTestComponent = () => {
    if (!mountedPrevBtn) {
      mountedPrevBtn = mount(<PrevBtn {...props} />);
    }
    return mountedPrevBtn;
  };  

  beforeEach(() => {
    props = {};
    shallowPrevBtn = undefined;
    renderedPrevBtn = undefined;
    mountedPrevBtn = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
