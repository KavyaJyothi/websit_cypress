/// <reference types="Cypress"/>
import Post_A_Job1 from '../Pages/POM/Post_A_Job'
describe('test free job posting site',()=>{
    const paj = new Post_A_Job1()

it('open recruiter panel',()=>{
    cy.visit("https://cerebrodev.workex.ai") 
})
it('Login to recruiter panel',()=>{

    paj.getMobileNoField().type("9538596331 {enter}")
    paj.getOtpField().type("495004 {enter}")
})
it('click on post a job button',()=>{
    paj.clickOnPostAjobutton().click()
})
it('First page of job posting flow',()=>{
    paj.industryField().click()
    cy.wait(1000)
    
    paj.selectIndustry().click()
    cy.wait(4000)
    paj.specializationField().click()
    cy.wait(3000)
    
    paj.selectSpecialization().click()
    cy.wait(1000)
    paj.roleField().click()
    paj.selectRole().click()
    
})


})