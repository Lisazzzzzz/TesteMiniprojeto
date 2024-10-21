const React = require('react');
const { render, screen } = require('@testing-library/react');
const Home = require('../home');

// Testa se o componente Home é renderizado
test('renderiza o componente Home com o texto correto', () => {
  render(React.createElement(Home));
  expect(screen.getByText('Bem-vindo à Home!')).toBeInTheDocument();
});
