
describe('anonymous', function() {

  context('home page', function() {

    beforeEach(function() {
      cy.visit(Cypress.env().base_url)
      cy.screenshot('home--anonymous')
    })

    it('has correct static content', function() {
      cy.title().should('eq', 'MoveOn Petitions - Sign or Start a Petition')
    })

    it('has anonymous nav', function() {
      cy.get('#header').should('contain', 'Manage Petitions')
    })

  })

  context('API', function() {

    it('has anonymous user/session.json response', function() {
      cy.request(Cypress.env().base_url + '/api/v1/user/session.json')
        .its('body')
        .should('deep.eq', {'identifiers': []})
    })

    it('has non-empty top-petitions.json response', function() {
      cy.request(Cypress.env().base_url + '/api/v1/top-petitions.json')
        .its('body')
        .then((response) => {
          const responseObject = JSON.parse(response)
          expect(responseObject)
            .to.have.property('count')
            .and.to.be.above(0)
        })
    })

  })

})

describe('admin', function() {

  context('home page', function() {

    beforeEach(function() {
      // TODO: figure out why this request doesn't successfully login
      cy.request({
        method: 'POST',
        url: Cypress.env().base_login_url + '/login/do_login.html',
        form: true,
        body: {
          email: Cypress.env().users.admin.email,
          password: Cypress.env().users.admin.pass,
          redirect: ''
        }
      })
        .then((resp) => {
          cy.getCookie('SO_DEV_SESSION').should('exist')
          cy.visit(Cypress.env().base_url)
          cy.screenshot('home--admin')
        })
    })

    it('has authenticated nav', function() {
      cy.get('#header').should('contain', Cypress.env().users.admin.first_name + "'s Dashboard")
    })

  })

})
