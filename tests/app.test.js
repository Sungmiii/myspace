import React from 'react'
import {shallow} from 'enzyme'

import App from '../client/components/App'

test('<App />', () => {
  const expected = 1
  const wrapper = shallow(<App />)
  const actual = wrapper.find('div.gridcontainer').length
  expect(actual).toBe(expected)
})
