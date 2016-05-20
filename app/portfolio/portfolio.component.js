System.register(["angular2/core", "../portfolio/portfolio.service"], function(exports_1, context_1) {
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
    var core_1, portfolio_service_1;
    var PortfolioComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (portfolio_service_1_1) {
                portfolio_service_1 = portfolio_service_1_1;
            }],
        execute: function() {
            PortfolioComponent = (function () {
                function PortfolioComponent(portfolioService) {
                    this.portfolioService = portfolioService;
                    //need change start value portfolioItem!!!!!!!!!!!
                    this.portfolioItem = this.portfolioService.portfolioList[0];
                }
                PortfolioComponent.prototype.onClickPortfolioItem = function (clickItem) {
                    this.portfolioItem = clickItem;
                    var closeModal = document.getElementsByClassName('carousel-control')[1];
                    var innerWidthBrowser = window.innerWidth;
                    var clientWidthBrowser = document.documentElement.clientWidth;
                    closeModal.style.width = innerWidthBrowser * 0.15 + (innerWidthBrowser - clientWidthBrowser) + 'px';
                };
                PortfolioComponent.prototype.onClickModalPortfolioItem = function (event, action) {
                    if (event.which != 1)
                        return;
                    var lengthPortfolio = this.portfolioService.portfolioList.length;
                    var positionPortfolioItemClick = this.portfolioService.portfolioList.indexOf(this.portfolioItem);
                    switch (action) {
                        case 'Next':
                            positionPortfolioItemClick == lengthPortfolio - 1 ?
                                this.portfolioItem = this.portfolioService.portfolioList[0] :
                                this.portfolioItem = this.portfolioService.portfolioList[positionPortfolioItemClick + 1];
                            break;
                        case 'Prev':
                            positionPortfolioItemClick == 0 ?
                                this.portfolioItem = this.portfolioService.portfolioList[lengthPortfolio - 1] :
                                this.portfolioItem = this.portfolioService.portfolioList[positionPortfolioItemClick - 1];
                            break;
                    }
                };
                PortfolioComponent = __decorate([
                    core_1.Component({
                        selector: 'portfolio_component',
                        templateUrl: "app/portfolio/portfolio.template.html",
                    }), 
                    __metadata('design:paramtypes', [portfolio_service_1.PortfolioService])
                ], PortfolioComponent);
                return PortfolioComponent;
            }());
            exports_1("PortfolioComponent", PortfolioComponent);
        }
    }
});
//# sourceMappingURL=portfolio.component.js.map