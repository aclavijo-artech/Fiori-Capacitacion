sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"fxxglobalctrl/test/integration/pages/ZCDSFXX_GLOBAL_CTRLObjectPage"
], function (JourneyRunner, ZCDSFXX_GLOBAL_CTRLObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('fxxglobalctrl') + '/test/flp.html#app-preview',
        pages: {
			onTheZCDSFXX_GLOBAL_CTRLObjectPage: ZCDSFXX_GLOBAL_CTRLObjectPage
        },
        async: true
    });

    return runner;
});

