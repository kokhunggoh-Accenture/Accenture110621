import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-supply-head',
  templateUrl: './supply-head.component.html',
  styleUrls: ['./supply-head.component.css']
})
export class SupplyHeadComponent implements OnInit {

  @Input() title = '';
  constructor() { }

  ngOnInit() {
  }

}
