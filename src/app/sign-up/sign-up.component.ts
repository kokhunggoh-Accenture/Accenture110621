import { Component, OnInit, Output, EventEmitter,ElementRef,ViewChild,ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { UserDetails } from '../_helpers/interfaces/UserDetails'
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { UsersService } from '../_services/users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpComponent implements OnInit {
  registerForm: FormGroup;
  submitted:boolean;
  userDetails:UserDetails;
  @ViewChild(ToastContainerDirective, { static: true })
  toastContainer: ToastContainerDirective;
  @Output() PostDetails = new EventEmitter<UserDetails>();
  constructor(private formBuilder: FormBuilder, private _services: UsersService, private toastrService: ToastrService) {
    this.submitted = false;
   }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['',Validators.required],
      username: ['',Validators.required],
      address: ['',Validators.required],
      email: ['',[Validators.required, Validators.email]],
      company: ['',Validators.required],
      website: ['',Validators.required],
      phone: ['',Validators.required],
    })
  }

  get f(){
    return this.registerForm.controls;
  }

  handleSubmit(){
    this.submitted = true;
    console.log(this.submitted);
    this.userDetails = this.registerForm.value; // store data from form to Users class
    console.log(this.userDetails);

    this.PostDetails.emit(this.userDetails);
    //console.log(this.PostDetails);
    this.createUser(this.userDetails);
  }

  createUser(user){
    this._services.createUser(user).subscribe({
      next: (data) => {
        this.showSuccess("Create user Success", 200);
      },
      error: err => {
        console.log(err.message);
        if (err.status == 404){
          console.log(err);
          this.showErrors(err.message, err.status);
        }
      }
    });
  }

  showSuccess(message, status) {
    this.toastrService.success(message, status, {
      timeOut: 3000,
    });
  }

  showErrors(message, status) {
    this.toastrService.error(message, status, {
      timeOut: 3000,
    });
  }
}
