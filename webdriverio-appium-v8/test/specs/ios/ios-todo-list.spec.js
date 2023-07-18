describe('Todo List', () => {
    it('Create a Todo List', async() => {
        await $('//*[@name="Create list"]').click();
        await $('//*[@value="List Name"]').addValue("Things to do today");
        await $('~Create').click();
        const list = '**/XCUIElementTypeStaticText[`label == "Things to do today"`]';
        await $(`-ios class chain:${list}`).click();

        // Add item to list
        await $('//*[@name="Add"]').click();
        await $('//*[@value="Title"]').click()
        await $('//*[@value="Title"]').addValue('Things');
        await $('~Create').click();

        // Add another Item to list
        await $('//*[@name="Add"]').click();
        await $('//*[@value="Title"]').click()
        await $('//*[@value="Title"]').addValue('To-Do');
        await $('//*[@value="Due"]').addValue('Tomorrow');
        await $('~Create').click();
    });
});
