import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Button from './../../src/Components/Button';
import sinon from 'sinon';
const { describe, it } = global

// writing mocha's BDD style test cases.
describe('Button', () => {
  it('should handle the click event', () => {
    // create a method stub using sinon. So, we can verify it later on.
    const clickMe = sinon.stub()
    // shallow render our button component.
    const wrapper = shallow(<Button onClick={ clickMe }>Click</Button>)

    // use enzyme to simulate a button click.
    wrapper.find('button').simulate('click')
    
    // assert whether the onClick stub has been called or not.
    expect(clickMe.callCount).to.be.equal(1)
  })
})