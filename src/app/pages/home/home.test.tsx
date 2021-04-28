import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Home from './home'
import '@testing-library/jest-dom/extend-expect'

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route)
  return render(ui, { wrapper: BrowserRouter })
}

describe('<Home />', () => {
  test('Should render  with correct Title and subtitle', () => {
    renderWithRouter(<Home />);
    expect(screen.getByRole('heading')).toHaveTextContent('Welcome to iClinic')
    expect(screen.getByText('FRONTEND CHALLENGE')).toBeInTheDocument()
  })
})