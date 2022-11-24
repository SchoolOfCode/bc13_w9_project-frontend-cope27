import { render, screen } from '@testing-library/react';
//import App from './App';
import CreatePost from './index.js';


test('that each element renders on the screen', () => {
    render(<CreatePost />)
  
    // const h2 = screen.getByRole('h2');
    // expect(h2).toBeInTheDocument();
  
});
  