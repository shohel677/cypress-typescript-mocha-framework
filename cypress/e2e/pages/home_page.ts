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
    suggestiveDropdownOption(label: string | undefined ){ return cy.xpath(`//div[text()='${label}']`)}
    selectDropdown(label: string | undefined ){ return cy.xpath(`//legend[text()='${label}']/following-sibling::select`)}
    checkboxOption(label: string | undefined, value : string | undefined ){ return cy.xpath(`//legend[text()='${label}']/following-sibling::label[contains(normalize-space(), '${value}')]/input`)}

    visit(){
        cy.visit('/');
    }

    clickRadioButton() {
       this.radioButtonXpath(this.dataValue(0)).check()
       this.radioButtonXpath(this.dataValue(0)).should('be.checked');
    }

    inputValueInSuggestiveField(){
        this.suggestiveDropdown(this.dataKey(0)).type(<string>this.dataValue(0));
        this.suggestiveDropdownOption(this.dataValue(0)).click()
        this.suggestiveDropdown(this.dataKey(0)).should('have.value', this.dataValue(0))
    }
    selectDropdownOption(){
        this.selectDropdown(this.dataKey(0)).select(<string>this.dataValue(0));
        this.selectDropdown(this.dataKey(0)).should('contain.text', 'Option2');
    }
    checkCheckboxOption(){
        const options: string[] | undefined = this.dataValue(0)?.split("&");

        if (options) {
            for (let i = 0; i < options.length; i++)
            {
                this.checkboxOption(this.dataKey(0), options[i]).check()
            }

        }

    }

}