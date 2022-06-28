import { render, screen } from '@testing-library/react';
import LoginButton from '../common/TopNav/components/LoginButton';
import { BrowserRouter } from 'react-router-dom';

describe('LoginButton Component', () => {
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
