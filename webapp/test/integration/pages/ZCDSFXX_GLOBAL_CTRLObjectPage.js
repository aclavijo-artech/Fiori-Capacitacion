sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'fxxglobalctrl',
            componentId: 'ZCDSFXX_GLOBAL_CTRLObjectPage',
            contextPath: '/ZCDSFXX_GLOBAL_CTRL'
        },
        CustomPageDefinitions
    );
});