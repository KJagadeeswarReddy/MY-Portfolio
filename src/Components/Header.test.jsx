import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
  test('renders navigation links correctly', () => {
    render(<Header />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /home/i })).toHaveAttribute('href', '#home');

    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /about/i })).toHaveAttribute('href', '#about');

    expect(screen.getByText('Portfolio')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /portfolio/i })).toHaveAttribute('href', '#portfolio');
    
    expect(screen.getByText('Testimonials')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /testimonials/i })).toHaveAttribute('href', '#testimonials');
    
    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /blog/i })).toHaveAttribute('href', '#blog');

    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact/i })).toHaveAttribute('href', '#footer');
  });
});
