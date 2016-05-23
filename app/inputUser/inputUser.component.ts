import {Component} from "angular2/core";
@Component({
    selector: 'inputUser_component',
    template: `
    <div class="input_log">
        <!-- Nav tabs -->
<ul>
  <li class="active"><a href="#userinput" data-toggle="tab">Вход</a></li>
  <li><a href="#userreg" data-toggle="tab">Регистрация</a></li>
</ul>
</div>
<!-- Tab panes -->
<div class="tab-content">
  <div class="tab-pane active" id="userinput">123</div>
  <div class="tab-pane" id="userreg">...</div>
</div>
<div class="clearBoth"></div>
    `
})
export class InputUserComponent{}