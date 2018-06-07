import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import Player from './../../src/components/Player';
import Button from './../../src/components/Button';
import { ButtonValues } from './../../src/components/Button'

describe("Player", function() {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Player/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe("Content", function() {
    beforeEach(() => {
      this.instance = ReactTestUtils.renderIntoDocument(<Player />);
    });

    it('contains a Button for each values', () => {
      let buttons = ReactTestUtils.scryRenderedComponentsWithType(this.instance, Button);
      expect(buttons.length).toBe(Object.values(ButtonValues).length);
    });

    it('contains a div for the buttonList', () => {
      let div = ReactTestUtils.findRenderedDOMComponentWithTag(this.instance, "div");
      expect(div).toBeDefined();
      expect(div.children.length).toBe(Object.values(ButtonValues).length);
    });
  })
});
