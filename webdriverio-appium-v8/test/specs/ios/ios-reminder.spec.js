describe('Reminder', () => {
    before('Open Reminder App', async() => {
        driver.activateApp('com.apple.reminders')
    });

    it('Set new Reminders', async() => {
        // Click on New Reminder
        const newRem = '**/XCUIElementTypeButton[`label == "New Reminder"`]';
        await $(`~ios class chain:${newRem}`).click();

        //Set title, notes, etc
        await $('//*[label="Title"]').click();
        await $('//*[label="Title"]').addValue('Morning Workout');

        await $('//*[@name="Quick Entry Note Field"]').click();
        await $('//*[@name="Quick Entry Note Field"]').addValue('60 min Jog, 4 sets of lateral raises, jump ropes, and jumping jacks');

        // Set date
        await $('//*[label="Details"]').click();
        const date = '**/XCUIElementTypeSwitch[`label == "Date"`]'
        await $(`~ios class chain:${date}`).click();

        await $('//*[label="Continue"]').click();
        await $(`//*[label="Don't Allow"]`).click();

        const repeat = 'label == "Repeat" AND name == "Repeat" AND value == "Repeat"';
        await $(`-ios predicate string:${repeat}`).click();
        await $(`-ios predicate string:${'label == "Daily"'}`).click();

        await $('//*[@name="Time"]').click();
        await $('~None').click();
        await $('~Medium').click();

        // Go back and add Reminder
        await $('~Add').click();

    });
});