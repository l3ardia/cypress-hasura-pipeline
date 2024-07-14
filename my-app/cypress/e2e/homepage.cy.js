describe("loading homepage", () => {
  it('should find the text "Webite is Running" on the page', () => {
    cy.request({
      method: "POST",
      url: Cypress.env("HASURA_GRAPHQL_ENDPOINT"),
      body: {
        query: `
          mutation update_settings_by_pk($id: uuid!, $object: settings_set_input!) {
            update_settings_by_pk(pk_columns: {id: $id}, _set: $object) {
              id
              is_under_maintenance
            }
          }
        `,
        variables: {
          id: "4dfbf373-18bd-4d76-b2f5-4eccfb9f1c7d",
          object: {
            is_under_maintenance: false
          }
        }
      },
      headers: {
        "x-hasura-admin-secret": Cypress.env('HASURA_GRAPHQL_ADMIN_SECRET'),
      },
    }).then((response) => {
      expect(response.status).to.eq(200);

      cy.visit("/");
      cy.contains("Webite is Running", { timeout: 1000 }).should('be.visible');;
    });
  });

  it('should find the text "Website is under maintenance" when the website is in maintenance mode', () => {
    cy.request({
      method: "POST",
      url: Cypress.env("HASURA_GRAPHQL_ENDPOINT"),
      body: {
        query: `
          mutation update_settings_by_pk($id: uuid!, $object: settings_set_input!) {
            update_settings_by_pk(pk_columns: {id: $id}, _set: $object) {
              id
              is_under_maintenance
            }
          }
        `,
        variables: {
          id: "4dfbf373-18bd-4d76-b2f5-4eccfb9f1c7d",
          object: {
            is_under_maintenance: true
          }
        }
      },
      headers: {
        "x-hasura-admin-secret": Cypress.env('HASURA_GRAPHQL_ADMIN_SECRET'),
      },
    }).then((response) => {
      expect(response.status).to.eq(200);

      cy.visit("/");
      cy.contains("Website is under maintenance", { timeout: 1000 }).should('be.visible');;
    });
  });
});
