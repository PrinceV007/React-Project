import { render, screen, fireEvent } from '@testing-library/react';
import App, { sum } from './App';

test('renders Hello React heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Hello React/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders welcome paragraph', () => {
  render(<App />);
  const paraElement = screen.getByText(/Welcome to the React Testing World/i);
  expect(paraElement).toBeInTheDocument();
});

test('checks sum function', () => {
  expect(sum(2, 3)).toBe(5);
  expect(sum(-1, 1)).toBe(0);
});

test('button is present', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Click Me/i);
  expect(buttonElement).toBeInTheDocument();
});

test('renders header', () => {
  render(<App />);
  expect(screen.getByText(/learn react/i)).toBeInTheDocument();
});

test('button click works', () => {
  render(<App />);
  const button = screen.getByRole('button');
  fireEvent.click(button);
  expect(screen.getByText(/clicked/i)).toBeInTheDocument();
});
