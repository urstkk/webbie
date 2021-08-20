describe('Navigation', function () {
  it('should navigate to the about page', function () {
    // Start from the index page
    cy.visit('http://localhost:3000/');

    // Visit to works
    cy.visit('http://localhost:3000/works');

    // Visit to about
    cy.visit('http://localhost:3000/about');
  });
});
