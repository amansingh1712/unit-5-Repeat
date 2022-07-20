describe("Test Todo", () => {
    beforeEach(() => {
        cy.visit("https://example.cypress.io/todo");
    })
    it("should add on list", () => {
        cy.get(".todo-list").children().should("have.length", 2)
        cy.get(".new-todo").type("Automated Input{enter}")
        cy.get(".todo-list").children().should("have.length", 3)
    })

})