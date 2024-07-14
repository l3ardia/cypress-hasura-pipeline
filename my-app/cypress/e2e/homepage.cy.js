describe('loading homepage', () => {

  const url = 'http://localhost:8080/api/rest/settings/4dfbf373-18bd-4d76-b2f5-4eccfb9f1c7d';

  it('should find the text "Webite is Running" on the page', () => {

    cy.request({
      method: 'POST',
      url,
      body: {
        object: {
          "is_under_maintenance": false
        }        
      },
      headers: {
        'Content-Type': 'application/json',
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      
      cy.visit('/');
      cy.contains('Webite is Running');
    });
    
  })

  it('should find the text "Website is under maintenance" when the website is in maintenance mode', () => {
    cy.request({
      method: 'POST',
      url,
      body: {
        object: {
          "is_under_maintenance": true
        }        
      },
      headers: {
        'Content-Type': 'application/json',
      }
    }).then((response) => {
      expect(response.status).to.eq(200);

      cy.visit('/');
      cy.contains('Website is under maintenance');
    });
  })
})