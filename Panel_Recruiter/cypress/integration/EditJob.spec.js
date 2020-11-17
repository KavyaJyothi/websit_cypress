/// <reference types="Cypress"/>
import EditJob from '../Pages/POM/EditJob'
describe('edit a job',()=>{
const ej=new EditJob()
it('open recruiter panel',()=>{
    cy.visit("https://cerebrodev.workex.ai/") 
})
it('Login to recruiter panel',()=>{
    
    ej.getMobileNoField().type("9538596331 {enter}")
    ej.getOtpField().type("495004 {enter}")
})
    it('click on job card and select edit job',()=>{
cy.wait(2000)
ej.getJobCard().click()
cy.wait(3000)
ej.getActionsButton().click()
cy.wait(2000)
ej.getEditJobButton().click()
    })
it('edit job',()=>{
ej.getHires1_2().click()
ej.getIntershipChip().click()
ej.getMastersQualification().click()
ej.getMaxExp().click()
ej.getFemaleChip().click()

    })
it('click save button',()=>{
    ej.getSaveButton().click({force: true})
})
})