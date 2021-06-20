import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { ValidateEmptyValidator } from '../_directives/validate-empty.directive';
import { ContactUsers } from '../_helpers/interfaces/contactUser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  responseMessage: string;
  registerForm: FormGroup;
  submitted:boolean;
  users: ContactUsers;
  contacts = [];
  iterationCount: number = 1;
  @ViewChild('icount', { static: true }) icount: ElementRef;

  constructor(private formBuilder: FormBuilder) {
    this.submitted = false;
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['',Validators.required],
      email: ['',[Validators.required, Validators.email]],
      feedback: ['',Validators.required],
    }, { validators: ValidateEmptyValidator });


    let feedbacks = document.getElementById('feedbacks');
    document.getElementById('showHide').addEventListener('click', function(){
      if (feedbacks.style.display == "none"){
        feedbacks.style.display = "inline";
      }
      else{
        feedbacks.style.display = "none";
      }
    });

    this.contacts = JSON.parse(localStorage.getItem('users')) || []
  }

  get f(){
    return this.registerForm.controls;
  }

  handleSubmit(){
    this.contacts = JSON.parse(localStorage.getItem('users')) || [];
    this.submitted = true;
    if ((this.registerForm.controls.name.errors == null) && (this.registerForm.controls.email.errors == null) && (this.registerForm.controls.feedback.errors == null))
    { 
      let id = 1;
      if (this.contacts.length > 0){
        id = this.contacts.slice(-1)[0].id + 1 || 1;
      }
      this.users = this.registerForm.value;
      this.users.id = id;
      this.contacts.push(this.users);
      console.log(JSON.stringify(this.contacts));
      localStorage.setItem('users',JSON.stringify(this.contacts));
    }
  }

  updateIterate(){
    this.iterationCount = this.icount.nativeElement.value || 0;
    console.log(this.iterationCount + " iterationCount ");
  }

}
