describe('Cypress Studio Demo', () => {
  beforeEach(() => {
    // Seed database with test data
    //cy.task('db:seed')

    // // Login test user
    // cy.database('find', 'users').then((user) => {
    //   cy.login(user.username, 's3cret', true)
    // })
  })

  it('click create post button', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000');
    cy.get('.create-button > button').click();
    cy.get('.close-btn').click();
    /* ==== End Cypress Studio ==== */
  })

  it('select a search term', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000');
    cy.get('#categories').select('study');
    cy.get('.searchBar > button').click();
    /* ==== End Cypress Studio ==== */
  })

  it('click create post button and create a new post', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000');
    cy.get('.create-button > button').click();
    cy.get('.popup-inner > #categories').select('Pair');
    cy.get('.popup-inner > :nth-child(6)').clear('d');
    cy.get('.popup-inner > :nth-child(6)').type('discover the world of programming with another ');
    cy.get('#Tools').select('Node');
    cy.get('.popup-inner > :nth-child(12)').clear('a');
    cy.get('.popup-inner > :nth-child(12)').type('a curious but hardcore coder');
    cy.get('.popup-inner > :nth-child(14)').click();
    /* ==== End Cypress Studio ==== */
  });
})

// describe('empty spec', () => {
//   it('passes', () => {
//     cy.visit('http://localhost:3000')
//   })
// })
