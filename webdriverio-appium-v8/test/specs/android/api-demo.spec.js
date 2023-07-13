describe('Api demo app', () => {
    it('Game Controller Input', async() => {
        await $('~Views').click();

        await $('//android.widget.TextView[@content-desc="Game Controller Input"]').click();

        const description = $('//android.widget.TextView[@resource-id="io.appium.android.apis:id/description"]'); 
        await expect(description).toHaveText('This activity demonstrates how to process input events received from game controllers. Please connect your game controller now and try moving the joysticks or pressing buttons. If it helps, try to imagine that you are a lone space cowboy in hot pursuit of the aliens who kidnapped your favorite llama on their way back to Andromeda...');

        await expect(('//*[@resource-id="io.appium.android.apis:id/game"]')).not.toBeExisting();
        await driver.back();
        await driver.back();
    });

    it('Adding text', async() => {
        await $('~Text').click();

        await $('//*[@text="KeyEventText"]').click();
        await $('//*[@resource-id="io.appium.android.apis:id/text"]').addValue('Today is a great day');

        const text = $('//android.widget.TextView[@resource-id="io.appium.android.apis:id/text"]')
        await expect(text).toHaveText('Today is a great day');

        await $('//android.widget.Button[@content-desc="Clear"]').click();
        await driver.back();
        await driver.back();
    });
});
