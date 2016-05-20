System.register(['angular2/core', './header/header.component', './price/price.component', './action/action.component', './portfolio/portfolio.component', './reviews/reviews.component', './contacts/contacts.component', './inputUser/inputUser.component', './footer/footer.component', './main-page/main.component', "angular2/router"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, header_component_1, price_component_1, action_component_1, portfolio_component_1, reviews_component_1, contacts_component_1, inputUser_component_1, footer_component_1, main_component_1, router_1, router_2;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (price_component_1_1) {
                price_component_1 = price_component_1_1;
            },
            function (action_component_1_1) {
                action_component_1 = action_component_1_1;
            },
            function (portfolio_component_1_1) {
                portfolio_component_1 = portfolio_component_1_1;
            },
            function (reviews_component_1_1) {
                reviews_component_1 = reviews_component_1_1;
            },
            function (contacts_component_1_1) {
                contacts_component_1 = contacts_component_1_1;
            },
            function (inputUser_component_1_1) {
                inputUser_component_1 = inputUser_component_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            },
            function (main_component_1_1) {
                main_component_1 = main_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [main_component_1.MainComponent, header_component_1.HeaderComponent, price_component_1.PriceComponent, action_component_1.ActionComponent, portfolio_component_1.PortfolioComponent, reviews_component_1.ReviewsComponent, contacts_component_1.ContactsComponent, inputUser_component_1.InputUserComponent, footer_component_1.FooterComponent, router_1.ROUTER_DIRECTIVES],
                        templateUrl: "./app/header/header.template.html",
                    }),
                    router_2.RouteConfig([
                        { path: '/main', name: 'Main', component: main_component_1.MainComponent, useAsDefault: true },
                        { path: '/price', name: 'Price', component: price_component_1.PriceComponent },
                        { path: '/action', name: 'Action', component: action_component_1.ActionComponent },
                        { path: '/portfolio', name: 'Portfolio', component: portfolio_component_1.PortfolioComponent },
                        { path: '/reviews', name: 'Reviews', component: reviews_component_1.ReviewsComponent },
                        { path: '/contacts', name: 'Contacts', component: contacts_component_1.ContactsComponent },
                        { path: '/input', name: 'InputUser', component: inputUser_component_1.InputUserComponent },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map