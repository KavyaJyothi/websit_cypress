class EditJob{
    getMobileNoField() {
        return cy.get("#mob_no")
        }
    
    getOtpField(){
         return cy.get("input[formcontrolname='otp']")
       }
    getJobCard(){
      return  cy.get("div div:nth-child(4) > div:nth-child(1) > ngx-job-stats > div > ngx-wx-job-card > nb-card > div.nb-card-div > div")
    }
    getActionsButton(){
        return cy.get("button.select-button.placeholder[type=button]")
    }
    getEditJobButton(){
        return cy.get("#cdk-overlay-1 > div > ul > nb-option:nth-child(1)")
    }
    getHires1_2(){
        return cy.get(" div > div:nth-child(5) > ngx-new-add-edit-chip > div > span:nth-child(1)")
    }
    getIntershipChip(){
        return cy.get("nb-card-body > div > div:nth-child(6) > ngx-new-add-edit-chip > div > span:nth-child(3)")
    }
    getMastersQualification(){
        return cy.get("nb-card-body > div > div:nth-child(7) > ngx-new-add-edit-chip > div > span:nth-child(2)")
    }
    getAddMoreSkills(){
        return cy.get("div > div:nth-child(8) > ngx-search-add-chip > div:nth-child(2) > span > span:nth-child(2)")
    }
    getAddItem(){
        return cy.get("ng-dropdown-panel > div > div:nth-child(2) > div > span > span")
    }
    getMaxExp(){
        return cy.get("ngx-job-edit > nb-card > nb-card-body > div > div:nth-child(9) > ng5-slider > span.ng5-slider-span.ng5-slider-pointer.ng5-slider-pointer-max")
    }
    getFemaleChip(){
        return cy.get("ngx-job-edit > nb-card > nb-card-body > div > div:nth-child(12) > ngx-new-add-edit-chip > div > span:nth-child(2)")
    }
    getSaveButton(){
        return cy.get("ngx-recruiter-home > ngx-job-edit > nb-card > nb-card-body > button")
    }

}
export default EditJob