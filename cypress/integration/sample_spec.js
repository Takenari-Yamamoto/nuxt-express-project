describe('My First Test', () => {
  it('finds the content "type"', () => {
    cy.visit('http://localhost:3000');

    cy.contains('Post').click();
    cy.get('.title').type('タイトルです');
    cy.get('.content').type('内容です');
    cy.get('.button').click();
  });
});
