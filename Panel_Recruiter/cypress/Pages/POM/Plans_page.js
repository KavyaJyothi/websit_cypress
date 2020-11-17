class PlanPurchase{
getMobileNoField() {
    return cy.get("#mob_no")
    }

getOtpField(){
     return cy.get("input[formcontrolname='otp']")
   }
   getHamburgerButton(){
     return cy.get("div > a.sidebar-toggle > nb-icon > svg > g > g > rect:nth-child(1)")
   }
getPlansIcon(){
     return cy.get("body > ngx-app > ngx-wx-recruiter > ngx-one-column-layout > nb-layout > div > div > div > nb-sidebar > div > div > nb-menu > ul > li.menu-item.ng-tns-c18-5.ng-star-inserted > a > nb-icon > svg > g > g > rect")
   }
getBuyNowButton(){
  return  cy.get('div:nth-child(1) > div.recruiter-packages__sla-purchase > button')
}
getMobileField(){
    return cy.get('#contact')
}

}
export default PlanPurchase
