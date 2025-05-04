import { Home_page } from '../pages/home_page';
import {TestDataStore} from "../../data/data_store";

describe ('Cypress TypeScript Mocha', () => {
    const homepage = new Home_page();

    beforeEach(() => {
        homepage.visit();
    })

    it('Click radio button', () => {
        cy.fixture('radio_case').then((radio_case) => {
            TestDataStore.loadFixtureData(radio_case);

            homepage.clickRadioButton();
        });
    });

    it('Input value', () => {
        cy.fixture('input_value').then((inputValue) => {
            TestDataStore.loadFixtureData(inputValue);
            homepage.inputValueInSuggestiveField();

        });
    });
    it('Select dropdown', () => {
        cy.fixture('select_dropdown').then((select_dropdown) => {
            TestDataStore.loadFixtureData(select_dropdown);
            homepage.selectDropdownOption();

        });
    });
    it('Check checkbox', () => {
        cy.fixture('checkbox_case').then((checkbox_case) => {
            TestDataStore.loadFixtureData(checkbox_case);
            homepage.checkCheckboxOption()
        })
    })

})