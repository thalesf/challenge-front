import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Title from "@/app/components/typography/title/title";
import Subtitle from "@/app/components/typography/subtitle/subtitle";
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup);

describe('<Home />', () => {
  test('Should render with correct Title', () => {
    render(<Title />);
    expect(screen.getByRole('heading')).toHaveTextContent('Welcome to iClinic')
  })

  test('Should render with correct Subtitle', () => {
    render(<Subtitle />);
    expect(screen.getByText('FRONTEND CHALLENGE')).toBeInTheDocument()
  })

})