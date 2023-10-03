describe('Add Notes', () => {
    it('Skip Tutorial', async() => {
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click();

        await expect($('//*[@text="Add note"]')).toBeDisplayed();
    });

    it('add a note, save changes & verify note', async() => {
        await $('//*[@text="Add note"]').click();
        await $('//*[@text="Text"]').click();
        await expect($('//*[@text="Editing"]')).toBeDisplayed();

        // Add title
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')
            .addValue("Fav Games");

        // Add body
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]')
            .addValue("Skyrim\nBattlefield 3\nMinecraft");

        // Save changes
        await driver.back();
        await driver.back();

        // Assertion
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]'))
            .toBeDisplayed();
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]'))
            .toHaveText("Skyrim\nBattlefield 3\nMinecraft");
        await driver.back();

        // Click on side menu
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click();

        // Click on theme
        await $('//*[@text="Theme"]').click();

        // Select Theme
        await $('//android.widget.TextView[@text="Dark"]').click();

        // Search bar
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/main_btn2"]')
            .click();

        await $('//*[@text="Search"]').click();

        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_search"]')
            .addValue("Fav Games");
    });
});
