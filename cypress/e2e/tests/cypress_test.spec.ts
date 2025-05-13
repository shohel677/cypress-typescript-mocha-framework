import { Home_page } from '../pages/home_page';
import {TestDataStore} from "../../utils/data_store";
import {Utility} from "../../utils/utility";

describe ('Cypress TypeScript Mocha', () => {
    const homepage = new Home_page();

    beforeEach(() => {
        homepage.visit();
    })
    afterEach(() => {
        Utility.wait(1000)
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
    it('Open window', ()=>{
        cy.fixture('window_case').then((window_case) => {
            TestDataStore.loadFixtureData(window_case);
           homepage.openWindow()

            homepage.visit();
            homepage.openTab()

        })

    })
    it('Handle Alert', ()=> {
        cy.fixture('alert_case').then((alert_case) => {
            TestDataStore.loadFixtureData(alert_case);
            homepage.handleAlert()
        })
    })
    it('Mouse hover', ()=>{
        cy.fixture('mouse_hover_case').then((mouse_hover_case) => {
            TestDataStore.loadFixtureData(mouse_hover_case)
            homepage.mouseHoverFunc()

        })
    })
    it('Frame handling', ()=>{
        cy.getIframeBody('#courses-iframe')
            .find('div.header-text > div > h2 > span')
            .invoke('text')
            .then((text) => {
                cy.log(text)
                const cleanedText = text.replace(/\s+/g, ' ').trim();
                expect(cleanedText).to.include('An Academy to Learn Earn & Shine  in your QA Career');

            })
    })

})