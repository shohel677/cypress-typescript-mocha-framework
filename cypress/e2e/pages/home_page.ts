/// <reference types="cypress" />

import {TestDataStore} from "../../utils/data_store";
import {Utility} from "../../utils/utility";


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
    windowOpen(label: string | undefined, value : string | undefined ){ return cy.xpath(`//legend[text()='${label}']/following-sibling::button[text()='${value}']`)}
    tabOpen(label: string | undefined, value : string | undefined ){ return cy.xpath(`//legend[text()='${label}']/following-sibling::a[text()='${value}']`)}
    alertInput(label: string | undefined) { return cy.xpath(`//legend[text()='${label}']/following-sibling::input[@class='inputs']`); }
    alertButton(label: string | undefined) { return cy.xpath(`//legend[text()='${label}']/following-sibling::input[@value='Confirm']`); }
    mouseHover(label: string | undefined, value : string | undefined ){ return cy.xpath(`//legend[text()='${label}']/following-sibling::div/button[text()='${value}']`)}
    reloadButton(){ return cy.xpath("//a[text()='Reload']")}





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
    openWindow() {
        let targetUrl = '';

        cy.window().then((win) => {
            const openStub = cy.stub(win, 'open').callsFake((url: string) => {
                targetUrl = url;
            });
        });

        cy.then(() => {
            this.windowOpen(this.dataKey(0), this.dataValue(0)).click();
        });

        cy.then(() => {
            if (targetUrl) {
                // Convert http to https if needed to avoid mixed content issues
                if (targetUrl.startsWith('http://')) {
                    targetUrl = targetUrl.replace('http://', 'https://');
                }

                cy.origin(new URL(targetUrl).origin, () => {
                    // Prevent the test from failing on uncaught exceptions
                    Cypress.on('uncaught:exception', () => false);

                    cy.visit('/');
                    cy.wait(5000)
                    cy.get('div.logo > a > img').should('be.visible');
                });
            }
        });
    }

    openTab() {
        let targetTabUrl = '';

        // 1. Stub window.open to capture the target URL
        cy.window().then((win) => {
            const openStub = cy.stub(win, 'open').callsFake((url: string) => {
                targetTabUrl = url; // Save the URL that would be opened in a new tab
            });
            cy.wrap(openStub).as('windowOpen');
        });

        // 2. Modify the link to remove target="_blank" before clicking
        this.tabOpen(this.dataKey(1), this.dataValue(1))
            .invoke('removeAttr', 'target')  // Remove target="_blank"
            .click();  // Now it will open in the same tab

        // 3. Visit the captured URL in the same tab (instead of opening a real new tab)
        cy.then(() => {
            if (targetTabUrl) {
                cy.visit(targetTabUrl); // Open the captured URL in the same tab

            }
        });

    }

    handleAlert(){
        let confirmCount = 0;
        cy.on('window:confirm', (message) => {
            //for single alert
            // expect(message).to.contain('Are you sure you want to continue?');
            // return true; // Accept second confirm
            confirmCount++;
            if (confirmCount === 1) {
                expect(message).to.contain('Hello Shohel, Are you sure you want to confirm?');
                return false; // Dismiss first confirm
            } else if (confirmCount === 2) {
                expect(message).to.contain('Hello Shohel, Are you sure you want to confirm?');
                return true; // Accept second confirm
            }
        })
        this.alertInput(this.dataKey(0)).type(<string>this.dataValue(0))
        this.alertButton(this.dataKey(0)).click()

        this.alertInput(this.dataKey(0)).type(<string>this.dataValue(0))
        this.alertButton(this.dataKey(0)).click()
    }
    mouseHoverFunc() {
        cy.get('.mouse-hover-content')
            .invoke('show') // Removes display: none
            .should('be.visible') // Ensure it's visible
            .contains('Reload') // Find the 'Reload' link
            .click()

    }









}