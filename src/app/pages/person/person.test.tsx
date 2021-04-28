import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { render as rtlRender } from '@testing-library/react';
import configureStore from 'redux-mock-store';

import '@testing-library/jest-dom/extend-expect'
import Person from '@/app/pages/person/person';

const mockStore = configureStore([thunk])
function renderWithRedux(
  ui: any,
  {
    initialState = {},
    store = mockStore(initialState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

describe('<Person />', () => {
  test('Should request user data and render on screen', () => {
    const user = {
      name: 'Luck Skywalker',
      url: '/api/people/1'
    }
    const { getByText } = renderWithRedux(<Person />, {
      initialState: {
       user: {
         user
       }
      }
    });
    expect(getByText(/Your master is Luck Skywalker/i)).toBeInTheDocument()
  })
})