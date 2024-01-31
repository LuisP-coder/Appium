describe('Settings', () => {
    it('Open Settings app', async() => {
        driver.activateApp('com.apple.Preferences');
        // Open General Settings
        const general = '**/XCUIElementTypeCell[`label == "General"`]';
        await $(`-ios class chain:${general}`).click();
    });

    it('Change Keyboard Settings', async() => {
        // Enter Keyboard Settings
        await $('//*[@name="Keyboard"]').click();
        // Check Keyboards
        const keyboard = '**/XCUIElementTypeStaticText[`label == "Keyboards"`][2]';
        await $(`-ios class chain:${keyboard}`).click();
        await $('//*[@label="Edit"]').click();

        await $('//*[@value="English (US)"]').toContain('English (US)');
        await $('//*[@value="Emoji)"]').toContain('Emoji');

        await $('//*[@name="Done)"]').click();

        // Add new Keyboard
        const addKey = '**/XCUIElementTypeCell[`label == "Add New Keyboard…"`]';
        await $(`-ios class chain:${addKey}`).click();

        await $('~Search').addValue('Japanese');
        await $('//*[@label="Japanese"]').click();
        await $('//*[@label="Kana"]').click();
        await $('//*[@name="Done)"]').click();
        await $('//*[@name="Keyboards"]').click();

        const smartPunc = '**/XCUIElementTypeSwitch[`label == "Smart Punctuation"`]';
        await $(`-ios class chain:${smartPunc}`).click();
        const autoCor = '**/XCUIElementTypeSwitch[`label == "Auto-Correction"`]';
        await $(`-ios class chain:${autoCor}`).click();
    });
});

