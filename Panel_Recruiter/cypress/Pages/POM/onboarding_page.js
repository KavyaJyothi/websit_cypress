class Onboarding{
getName(){
    return cy.get("input[formcontrolname='name']")
}
getEmail(){
    return cy.get("#view_container > div > div > div.pwWryf.bxPAYd > div > div.WEQkZc > div > form > span > section > div > div > div > div > ul > li:nth-child(1) > div")
}
getLocation(){
    return cy.get("div.login_container_right.col > div > div.additional-details-form.ng-untouched.ng-pristine.ng-invalid > div.input-3 > ngx-location > input")
}
selectLocation(){
    return cy.get("div > nb-card > nb-list > nb-list-item:nth-child(1) > div:nth-child(1) > b")
}
getCompany(){
    return cy.get("div.ng-input > input[role='combobox']")
}
selectCompany(){
    return cy.get("div.ng-dropdown-panel-items.scroll-host div > div:nth-child(1)> span")
}
getDesignation(){
    return cy.get("div.input-5 > ngx-wx-dropdown > div > ng-select > div > div > div.ng-input > input[type=text]")
}
selectDesignation(){
    return cy.get("div.ng-dropdown-panel-items.scroll-host div > div:nth-child(1) > span")
}
getNextButton(){
    return cy.get("div.desktop.tnc > div:nth-child(2) > button")
}
}
export default Onboarding