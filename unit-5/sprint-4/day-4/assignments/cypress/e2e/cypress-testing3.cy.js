describe("Test Todo", () => {
    beforeEach(() => {
        cy.visit("https://example.cypress.io/todo");
    })
    it("should have toggle button", () => {
        cy.get(".todo-list>:nth-child(1) .toggle").check()
    })
    it("should have new class", () => {
        cy.get(".new-todo").type("Automated Input{enter}")
        cy.get(".todo-list>:nth-child(3) .toggle").check()
        cy.get(".todo-list> .completed")
    })

})