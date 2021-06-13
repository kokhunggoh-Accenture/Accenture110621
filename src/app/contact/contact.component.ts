import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  responseMessage: string;

  constructor() {
    
  }
  ngOnInit(): void {
      
  }
  onSubmit() {

    //document.getElementById('submit').addEventListener('click', function(){
      alert("submitted!");
    //});
    //alert("Submitted");
  }

}
