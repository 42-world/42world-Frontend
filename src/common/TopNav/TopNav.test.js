import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TopNav from './components/TopNav';
import LoginButton from './components/LoginButton';
import { BrowserRouter } from 'react-router-dom';

describe('TopNav Component', () => {
  test('renders LoginButton Component', () => {
    // Arrange
    render(<LoginButton />, { wrapper: BrowserRouter });

    // Act
    // ...nothing

    // Assert
    const loginButtonElement = screen.getByText('로그인');
    expect(loginButtonElement).toBeInTheDocument();
  });
});
