/// <reference types="cypress" />

import {TestDataStore} from "../../data/data_store";

export class Home_page {

    radioButtonXpath(label: string | undefined) { return cy.xpath(`//label[contains(normalize-space(), '${label}')]/input`); }

    visit(){
        cy.visit('/');
    }
    clickRadioButton() {
       this.radioButtonXpath(TestDataStore.getData('radioOption')).click()
    }

}