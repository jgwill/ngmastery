import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'gix-button-cornecto',
  templateUrl: './gix-button-cornecto.component.html',
  styleUrls: ['./gix-button-cornecto.component.css']
})
export class GixButtonCornectoComponent implements OnInit {
 


  @Input() txt?: string;
  //@STCGoal It Increases its Width according to the Text Input ; STATE: germinating

  @Input() icon?: string;


   @Input() color?:string;

  constructor() {
    //default value for buttons/icon
    if (!this.txt)
      this.txt = "create";
    if (!this.icon) this.icon = "add";

    if (!this.color)this.color = "primary";
  }

  ngOnInit() {
  }

}
