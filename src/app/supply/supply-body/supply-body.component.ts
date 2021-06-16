import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-supply-body',
  templateUrl: './supply-body.component.html',
  styleUrls: ['./supply-body.component.css']
})
export class SupplyBodyComponent implements OnInit {

  @Input() bodyObj = '';
  constructor() { }

  ngOnInit() {
  }

}
