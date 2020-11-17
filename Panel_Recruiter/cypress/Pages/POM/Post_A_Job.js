class Post_A_Job1{
    
     getMobileNoField() {
       return cy.get("#mob_no")
       }

      getOtpField(){
        return cy.get("input[formcontrolname='otp']")
    
      }
      clickOnPostAjobutton(){
       return cy.get("body > ngx-app > ngx-wx-recruiter > ngx-one-column-layout > nb-layout > div > div > nb-layout-header > nav > ngx-header > div:nth-child(2) > nb-actions > nb-action.user-action.align > button")
      }
      industryField(){
        return cy.get('div.deep.mb-4.position-relative > ng-select > div > div > div.ng-input > input[type=text]')
        }
    selectIndustry(){
        return cy.get(' ng-dropdown-panel.ng-dropdown-panel.ng-star-inserted.ng-select-bottom > div div:nth-child(1) >div:nth-child(1) div div')
    }
    specializationField(){
        return cy.get('div:nth-child(2) > ngx-wx-dropdown > div > ng-select > div > div > div.ng-input > input[type=text]')
    }
    specializationAPI(){
        return cy.request( 'https://apiv2.workex.ai/api/search/hr___office__admin/specialization')
    }

    selectSpecialization(){
        return cy.get('ng-dropdown-panel > div > div > div:nth-child(1)')
    }
    roleField(){
        return cy.get('div:nth-child(3) > ng-select > div > div > div.ng-input > input[type=text]')
    }
    selectRole(){
        return cy.get('ng-dropdown-panel > div > div > div:nth-child(1)')
    }
    nextButton(){
        return cy.get('div > button.appearance-filled.size-medium.status-danger.shape-rectangle.icon-end.transitions')
    }
    publishJobButton(){
        return cy.get('div > nb-card > div > button.appearance-filled.size-medium.status-danger.shape-rectangle.transitions')
    } 
    viewSuggestedCandidates(){
        return cy.get('#cdk-overlay-2 > nb-dialog-container > nb-card > nb-card-body > button')
    }

    
    }
    export default Post_A_Job1