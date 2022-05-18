/// <reference types="cypress" />

describe('Тестируем валидацию кредитной карты', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234');
  })

  it('Проверка валидной формы', () => {
    cy.get('#name').type('Ivan Petrov');
    cy.get('#cardnumber').type('2222 1111 2222 1111');
    cy.get('#expirationdate').type('1234');
    cy.get('#securitycode').type('958');

    cy.get('#validate-button').click(); 
    cy.get('.validate-result').should('contain.html', '<h2 id="validate-result-text">Card is validate</h2>');
  });

  it('Проверка валидной формы', () => {
    cy.get('#name').type('IvanPetrov');
    cy.get('#cardnumber').type('2222 1111 2222 1111');
    cy.get('#expirationdate').type('1234');
    cy.get('#securitycode').type('958');

    cy.get('#validate-button').click(); 
    cy.get('.validate-result').should('contain.html', '<h2 id="validate-result-text">Card is not validate</h2>');
  });

  it('Проверка валидной формы', () => {
    cy.get('#name').type('Ivan Petrov');
    cy.get('#cardnumber').type('2222 1111 2222');
    cy.get('#expirationdate').type('1234');
    cy.get('#securitycode').type('958');

    cy.get('#validate-button').click(); 
    cy.get('.validate-result').should('contain.html', '<h2 id="validate-result-text">Card is not validate</h2>');
  });

  it('Проверка валидной формы', () => {
    cy.get('#name').type('Ivan Petrov');
    cy.get('#cardnumber').type('2222 1111 2222 1111');
    cy.get('#expirationdate').type('1234');
    cy.get('#securitycode').type('95');

    cy.get('#validate-button').click(); 
    cy.get('.validate-result').should('contain.html', '<h2 id="validate-result-text">Card is not validate</h2>');
  });

  it('Проверка валидной формы', () => {
    cy.get('#name').type('Иван Петров');
    cy.get('#cardnumber').type('2222 1111 2222 1111');
    cy.get('#expirationdate').type('1234');
    cy.get('#securitycode').type('958');

    cy.get('#validate-button').click(); 
    cy.get('.validate-result').should('contain.html', '<h2 id="validate-result-text">Card is not validate</h2>');
  });
})