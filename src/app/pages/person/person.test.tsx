import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render as rtlRender, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Person from '@/app/pages/person/person';
import reducer from "@/app/redux/root";

function renderWithRedux(
  ui,
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
  test('Should request data and from  ', () => {
    const { getByText } = renderWithRedux(<Person />);
    // expect(screen.getByRole('heading')).toHaveTextContent('Welcome to iClinic')
    // expect(screen.getByText('FRONTEND CHALLENGE')).toBeInTheDocument()
  })
})