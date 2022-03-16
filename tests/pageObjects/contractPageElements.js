class ContractElements {

    create = () => {
        return 'text=Create A Contract'
    }

    // Click text=Fixed RateFor contracts that have a fixed rate on every payment cycle
    fixedRate = () => {
        return 'text=Fixed RateFor contracts that have a fixed rate on every payment cycle'
    }

    btnCookies = () => {
        return '#CybotCookiebotDialogBodyButtonAccept'
    }

    // Click #root >> text=name >> nth=2
    entityField = () => {
        return '#root >> text=name'
    }

    entityName = () => {
        return '#react-select-2-option-0 >> text=name'
    }
    // Click #react-select-2-option-0 >> text=name
    contractName = () => {
        return 'input[name="name"]'
    }

    countryField = () => {
        return '.deel-ui__select.select .deel-ui__select__input-container .deel-ui__select__control .deel-ui__select__value-container'
    }

    countryName = (country) => {
        return `#react-select-3-option-2-28 >> text=${country}`
    }

    provinceField = () => {
        return '.deel-ui__stack .deel-ui__stack.deel-ui__stack_vertical div:nth-child(2) .deel-ui__select__input-container .deel-ui__select__control .deel-ui__select__value-container'
    }

    provinceName = (province) => {
        return `#react-select-5-option-17 >> text=${province}`
    }

    jobTitle = () => {
        return 'input[name="jobTitle"]'
    }

    seniorityField = () => {
        return '.deel-ui__stack div:nth-child(4) .flex .deel-ui__select .deel-ui__select__input-container .deel-ui__select__control .deel-ui__select__value-container'
    }

    seniority = (roleLevel) => {
        return `#react-select-4-option-2 >> text=${roleLevel}`
    }

    scopeField = () => {
        return 'textarea[name="scope"]'
    }

    btnNext = () => {
        return '[data-qa="next"]'
    }

    todayDay = (month, day, year) => {
        return `text=Today - ${month} ${day}, ${year}`
    }

    yesterday = (day) => {
        return `button:has-text("${day-1}")`
    }

    currency = () => {
        return 'text=BRL - Brazilian Real'
    }

    gbpCurrency = () => {
        return '#react-select-6-option-37 >> text=GBP - British Pound'
    }

    rate = () => {
        return 'input[name="rate"]'
    }

    paymentMethod = () => {
        return 'text=Monthly'
    }

    weeklyPayment = () => {
        return '#react-select-7-option-0'
    }

    btnSpecialClause = () => {
        return '[data-qa="add-a-special-clause"]'
    }

    specialClauseField = () => {
        return 'textarea'
    }

    btnNextspecialClause = () => {
        return 'button:has-text("next")'
    }

}

module.exports = {ContractElements}