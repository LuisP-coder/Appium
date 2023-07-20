describe('iOS Native Features', () => {
    it('Working with alert box', async() => {
        await $('~Alert Views').click();
        await $('~Okay / Cancel').click();

        // click ok 
        // await $('~Ok').click();

        // accept dismiss alert
        await driver.dismissAlert();

        // assertion 
        await expect($('~Ok')).not.toExist();
    });

    it('Working with Scrollable Elements', async() => {
        // easiest
        await driver.execute('mobile: scroll', { direction: "down" });
        await driver.execute('mobile: scroll', { direction: "up" });

        // complex version
        // await $('~Picker View').click();
        // const redPicker = await $('~Red color component value');
        // const bluePicker = await $('~Blue color component value');
        // await driver.execute('mobile: scroll', { element: redPicker.elementId, direction: "down" });
        // await driver.execute('mobile: scroll', { element: bluePicker.elementId, direction: "down" });
        // await driver.pause(3000);
    });

    it.only('Working with Picker View', async() => {
        await $('~Picker View').click();

        const redPicker = await $('~Red color component value');
        const greenPicker = await $('~Green color component value')
        const bluePicker = await $('~Blue color component value');

        // Make purple
        await redPicker.addValue('125');
        await greenPicker.addValue('0');
        await bluePicker.addValue('125');
        await driver.pause(3000);
    });
});
