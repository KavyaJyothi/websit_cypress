/// <reference types="Cypress"/>
import PlanPurchse from '../Pages/POM/Plans_page'
describe('test free job posting site',()=>{
    const pp = new PlanPurchse()
    it('open recruiter panel',()=>{
        cy.visit("https://cerebrodev.workex.ai/recruiter/home") 
    })
    it('Login to recruiter panel',()=>{
        pp.getMobileNoField().type("9538596331 {enter}")
        pp.getOtpField().type("495004 {enter}")
    })
    it('click plans icon',()=>{
        // cy.wait(2000)
        // pp.getHamburgerButton().click({force: true})
        cy.wait(3000)
        pp.getPlansIcon().click({force: true})
    })
it('click buy now on any plan',()=>{
    cy.wait(5000)
    pp.getBuyNowButton().click({force: true})
    
})
it('enter mobile no',()=>{
    cy.wait(4000)
    pp.getMobileField().type('8147898903')
})
})