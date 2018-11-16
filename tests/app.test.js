import React from 'react'
import {shallow} from 'enzyme'

import App from '../client/components/App'
import Header from '../client/components/Header';
import LiveStream from '../client/components/LiveStream';
import Weather from '../client/components/LiveStream';


test('<App />', () => {
  const expected = 1
  const wrapper = shallow(<App />)
  const actual = wrapper.find('div.gridcontainer').length
  expect(actual).toBe(expected)
})

test('<App />', () => {
  const expected = 1
  const wrapper = shallow(<Header />)
  const actual = wrapper.find('div').length
  expect(actual).toBe(expected)
})

test('<App />', () => {
  const expected = 1
  const wrapper = shallow(<LiveStream />)
  const actual = wrapper.find('h2').length
  expect(actual).toBe(expected)
})

test('<App />', () => {
  const expected = 1
  const wrapper = shallow(<Weather />)
  const actual = wrapper.find('div').length
  expect(actual).toBe(expected)
})








