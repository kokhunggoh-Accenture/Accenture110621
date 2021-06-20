import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactUsers } from '../_helpers/interfaces/contactUser';

@Component({
  selector: 'app-feedback-detail',
  templateUrl: './feedback-detail.component.html',
  styleUrls: ['./feedback-detail.component.css']
})
export class FeedbackDetailComponent implements OnInit {
  id:string;
  users = [];
  user:ContactUsers;
  constructor(private route: ActivatedRoute) { 
    this.id = route.snapshot.queryParamMap.get('id');
  }

  ngOnInit() {
    this.users = JSON.parse(localStorage.getItem('users'));
    this.user = this.users.find(x => x.id == this.id);
  }

}
