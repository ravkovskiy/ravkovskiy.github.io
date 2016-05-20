import {Component} from "angular2/core";
import {CarouselComponent} from "../carousel/carousel.component";
@Component({
    selector: 'main_component',
    directives: [CarouselComponent],
    templateUrl: "app/main-page/main.template.html",
})
export class MainComponent{}