it('Test Tesla Link', () => {
  cy.visit('https://www.tesla.com', {
    headers: {
      "Accept-Encoding": "gzip, deflate, br"
    }
  })
})