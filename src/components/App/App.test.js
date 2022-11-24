import { render, screen } from '@testing-library/react';
import App from './App';
import CreatePost from '../CreatePost/index'
import ProjectBoard from '../ProjectBoard/index'
import SearchBar from '../SearchBar/index'

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

/* To test:
img logo
p tag text 
button with text
three components, CreatePost, ProjectBoard and SearchBar
*/


test('that each element renders on the screen', () => {
  render(<App />)

  const image = screen.getByRole('img');
  expect(image).toBeInTheDocument();
  expect(image).toBeVisible();

});

test('the text in paragraph', () => {
  render(<App />)

  const paraElement = screen.getByText('collaboration', {exact: false});
  expect(paraElement).toBeInTheDocument();
  expect(paraElement).toBeVisible();

});

test('the text in paragraph again', () => {
  render(<App />)

  const paraElement = screen.getByText('collaboration', {exact: false});
  expect(paraElement).toBeInTheDocument();
  expect(paraElement).toBeVisible();

});





// test('test that each button renders on the screen', () => {
//   render(<App />)

//   const button = screen.getByRole('button', {name:''});
//   expect(button).toBeInTheDocument();
//   expect(button).toBeVisible();

// });

// test('that the paragraph of text renders and contains the right text', () => {
//   render(<App />)

//   let paragraphElement = screen.getByRole('paragraph',  {class:'slogan'});
//   //expect(paragraphElement).toHaveClass("slogan");
//   expect(paragraphElement).toBeVisible();

// });

// test('that it has a button', () => {
//   render(<App/>);
//   const button = screen.getByRole('button');

//   expect(button).toBeVisible();
// })