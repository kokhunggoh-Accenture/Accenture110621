import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.css']
})
export class FeedbacksComponent implements OnInit {

  count:number;
  @Input() childCount: number;
  users = [];
  @Input('userList') userList ;
  constructor() { }

  ngOnInit() {
    this.users = JSON.parse(localStorage.getItem('users'));
    this.count = this.childCount;
    console.log(this.users);
  }

  ngAfterContentChecked(){
    console.log(this.childCount + " child count");
    this.count = this.childCount;
    this.users = this.userList;
  }

}
