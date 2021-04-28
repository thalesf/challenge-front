import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render as rtlRender, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Person from '@/app/pages/person/person';
import reducer from "@/app/redux/root";

function renderWithRedux(
  ui: any,
  {
    initialState = {},
    store = createStore(reducer, initialState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

describe('<Home />', () => {
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
    expect(getByText(/Your master is Luck Skywalker/i)).toBeInTheDocument
  })
})