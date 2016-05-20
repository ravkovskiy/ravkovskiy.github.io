System.register(['angular2/platform/browser', './app.component', "angular2/router", "./price/price.service", "./portfolio/portfolio.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component_1, router_1, price_service_1, portfolio_service_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (price_service_1_1) {
                price_service_1 = price_service_1_1;
            },
            function (portfolio_service_1_1) {
                portfolio_service_1 = portfolio_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [router_1.ROUTER_PROVIDERS, price_service_1.PriceService, portfolio_service_1.PortfolioService]);
        }
    }
});
//# sourceMappingURL=main.js.map