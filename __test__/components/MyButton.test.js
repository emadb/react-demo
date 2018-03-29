import React from 'react'
import renderer from 'react-test-renderer'
import {shallow} from 'enzyme'
import MyButton from '../../src/app/MyButton'

describe('<MyButton />', () => {
  
  test('just render with default props', () => {
    const component = renderer.create(<MyButton />)
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('click should call fn', done => {
    const wrapper = shallow(<MyButton text="Click me" onClick={() => done()} />)
    wrapper.find('button').simulate('click')
  })

})