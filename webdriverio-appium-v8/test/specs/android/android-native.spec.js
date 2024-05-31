describe('Android Native Features Tests', () => {
    it('Access an Activity directly', async() => {
        // access activity
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");

        // assertion
        await driver.pause(3000);
        await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
    });

    it('Working with Dialog Boxes', async() => {
        // click on first dialog
        await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click();

        // accept Alert
        // await driver.acceptAlert();

        // dismiss alert
        // await driver.dismissAlert();

        // click Ok
        await $('//*[@resource-id="android:id/button1"]').click();

        await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();
    });

    it.only('Vertical Scrolling', async() => {
        await $('~App').click();
        await $('~Activity').click();

        //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
        // More stable
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();

        await $('~Secure Surfaces').click();    

        await expect($('~Secure Surfaces')).toExist();  
    });

    it.only('Horizontal Scrolling', async() => {
        await driver.startActivity(
            "io.appium.android.apis",
            "io.appium.android.apis.view.Gallery1"
        );

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollFoward()');

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');
        await driver.pause(3000);
    });
});
