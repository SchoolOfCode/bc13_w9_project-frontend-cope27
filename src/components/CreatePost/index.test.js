import { render, screen } from '@testing-library/react';
//import App from './App';
import CreatePost from './index.js';
import { it, test, expect, describe } from "@jest/globals";


// test('that a post renders on the screen', () => {
//     render(<CreatePost />)
//     const h2 = screen.getByRole('h2');
//     expect(h2).toBeInTheDocument();
// });
  

// test('that a lable element renders on the screen', () => {
//     render(<CreatePost />)
//     const label = screen.getByRole('LabelText');
//     expect(label).toBeInTheDocument();
//     expect(label).toBeVisible();
// });

test('that button element renders on the screen', () => {
    render(<CreatePost trigger ={true} />) 
    const button = screen.getByRole('button', {name: /SUBMIT/i});
    expect(button).toBeInTheDocument();
    expect(button).toBeVisible();
});