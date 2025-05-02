/// <reference types="cypress" />

import {TestDataStore} from "../../data/data_store";

export class Home_page {
    dataKey (index: number){
        return TestDataStore.key(index)
    }
    dataValue(index : number){
        return TestDataStore.getData(this.dataKey(index))
    }
    radioButtonXpath(label: string | undefined) { return cy.xpath(`//label[contains(normalize-space(), '${label}')]/input`); }
    suggestiveDropdown(label: string | undefined ){ return cy.xpath(`//legend[text()='${label}']/following-sibling::input`)}
    dropdownOption(label: string | undefined ){ return cy.xpath(`//div[text()='${label}']`)}

    visit(){
        cy.visit('/');
    }

    clickRadioButton() {
       this.radioButtonXpath(TestDataStore.getData('radioOption')).check()
       this.radioButtonXpath(TestDataStore.getData('radioOption')).should('be.checked');
    }

    inputValueInSuggestiveField(){
        this.suggestiveDropdown(this.dataKey(0)).type(<string>this.dataValue(0));
        this.dropdownOption(this.dataValue(0)).click()
    }

}