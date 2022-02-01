context("Login", () => {
  it("Enters the landing page and tries to go to the login page", () => {
    cy.visit("http://localhost:3000");
    cy.viewport(1440, 900);

    cy.get(".css-b93e9j").click();
  });

  it("Tries to login in to dashboard", () => {
    cy.viewport(1440, 900);

    cy.get("#email").type("kenzinho@mail.com");
    cy.get("#password").type("123456");

    cy.intercept("POST", "/login", {
      statusCode: 200,
      body: {
        user: {
          email: "kenzinho@mail.com",
          password: "123456",
          id: 2,
        },
        accessToken: "f4f4f4f4",
      },
    }).as("login");

    cy.get(".chakra-button").click();

    cy.contains("Ver meu perfil");
  });
});
