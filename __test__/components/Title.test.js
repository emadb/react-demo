import React from 'react'
import renderer from 'react-test-renderer'
import Title from '../../src/app/Title'

describe('<Title />', () => {
  
  test('just render with default props', () => {
    const component = renderer.create(<Title />)
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('just render with a custom text', () => {
    const component = renderer.create(<Title text="Hello world" />)
    expect(component.toJSON()).toMatchSnapshot()
  })

})