describe("Test Todo", () => {
    beforeEach(() => {
        cy.visit("https://example.cypress.io/todo");
    })
    it("should remove from list", () => {
        cy.get(".todo-list").children().should("have.length", 2)
        cy.get('.todo-list>:nth-child(1)').trigger('mouseover')
        cy.get(".todo-list>:nth-child(1) .destroy").click()
        cy.get(".todo-list").children().should("have.length", 1)
    })

})
Footer
