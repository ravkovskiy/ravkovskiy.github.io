import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {ROUTER_PROVIDERS} from "angular2/router";
import {PriceService} from "./price/price.service";
import {PortfolioService} from "./portfolio/portfolio.service";

bootstrap(AppComponent, [ROUTER_PROVIDERS, PriceService, PortfolioService]);
