describe('ios Find Element', () => {
    it('find element by accessibility Id', async() => {
        await $('~Alert Views')
            .click();
        await $('~Simple')
            .click();
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best");
    });

    it('find element by xpath', async() => {
        // xpath - (//tagname[@attribute=value])
        // await $('//XCUIElementTypeStaticText[@name="Alert Views"]').click();
        // await $('//XCUIElementTypeStaticText[@label="Simple"]').click();

        await $('//*[@name="Alert Views"]')
            .click();
        await $('//*[label="Simple"]')
            .click();
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best");
    });

    it('find element by class chain', async() => {
        const alertText = '**/XCUIElementTypeStaticText[`label CONTAINS "Alert Views"`]';
        await $(`-ios class chain:${alertText}`)
            .click();
        await $('//*[@label="Simple"]')
            .click();
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best");   
    });

    it.only('find element by predictable string', async() => {
        const alertText = 'label == "Alert Views"';
        await $(`-ios predicate string:${alertText}`)
            .click();
        await $('//*[@label="Simple"]')
            .click();
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best");
    });
});
