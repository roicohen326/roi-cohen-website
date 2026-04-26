import { render, screen } from '@testing-library/react';
import Home from '../page';

describe('Home page', () => {
  it('renders without crashing', () => {
    render(<Home />);
    expect(document.body).toBeTruthy();
  });

  it('renders the main heading', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('renders the Next.js logo image', () => {
    render(<Home />);
    expect(screen.getByAltText('Next.js logo')).toBeInTheDocument();
  });

  it('renders a link to Templates', () => {
    render(<Home />);
    expect(screen.getByRole('link', { name: /templates/i })).toBeInTheDocument();
  });
});
