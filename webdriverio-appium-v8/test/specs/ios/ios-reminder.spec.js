describe('Reminder', () => {
    before('Open Reminder App', async() => {
        driver.activateApp('com.apple.reminders')
    });

    it('Set new Reminders', async() => {
        // Close PopUps
        const location = '**/XCUIElementTypeStaticText[`label == "Allow “Reminders” to use your location?"`]';
        const locationv2 = await $(`~ios class chain:${location}`).isDisplayed();
        const welcome = await $('//*[@name="Welcome to Reminders"]').isDisplayed();

        // Only if pop-ups are shown
        if(locationv2){
            await $('//*[@name="Allow While Using App"]').click();
        } else if(welcome){
            await $('//*[@name="Continue"]').click();
        }

        // Click on New Reminder
        await $('//*[@name="New Reminder"]').click();

        //Set title, notes, etc
        await $('//*[@name="Quick Entry Title Field"]').click();
        await $('//*[@name="Quick Entry Title Field"]').addValue('Morning Workout');

        await $('//*[@name="Quick Entry Note Field"]').click();
        await $('//*[@name="Quick Entry Note Field"]').addValue('60 min Jog, 4 sets of lateral raises, jump ropes, and jumping jacks');

        // Set date
        await $('//*[@name="Details"]').click();
        const date = '**/XCUIElementTypeSwitch[`label == "Date"`]';
        await $(`-ios class chain:${date}`).click();

        // To close pop-up if needed
        const neverMiss = '**/XCUIElementTypeStaticText[`label == "Never Miss a Reminder"`]';
        const never = await $(`~ios class chain${neverMiss}`).isDisplayed();
        const noti = await $('//*[@name="Reminders” Would Like to Send You Notifications"]').isDisplayed();

        // Used only if pop-ups are displayed
        if(noti){
            await $(`//*[@name="Don't Allow"]`).click();
        } else if(never){
            await $('//*[@name="Continue"]').click();
        }

        await $(`-ios predicate string:${'label == "Never"'}`).click();
        await $(`-ios predicate string:${'label == "Daily"'}`).click();

        // Select time
        await $('//*[@name="Time"]').click();
        await $('~None').click();
        await $('~Medium').click();

        // Go back and add Reminder
        await $('~Add').click();
    });
});
