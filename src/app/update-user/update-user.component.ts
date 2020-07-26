import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  user: any;
  userId: string;
  oldUser: any;
  profileForm: FormGroup;
  constructor(public toastr: ToastrManager,private router: Router,private activatedRoute: ActivatedRoute,private userService:UserService) { }

  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.params['id'];
    this.initialization();
    this.updateProfileControl();
  }
  updateProfileControl() {
    this.profileForm = new FormGroup({
      name: new FormControl(''),
      emailId: new FormControl(''),
      age: new FormControl('')
    });
  }
  initialization() {
    this.userService.getUser(this.userId).subscribe(data => {
      this.user = data[0];
      this.oldUser = data[0];

    });
  }

  updateProfile() {
   
    if (this.profileForm.value.name)
      this.user.name = this.profileForm.value.name;
    else
      this.user.name = this.oldUser.name;
    if (this.profileForm.value.emailId)
      this.user.emailId = this.profileForm.value.emailId;
    else
      this.user.emailId = this.oldUser.emailId;
    if (this.profileForm.value.age)
      this.user.age = this.profileForm.value.age;
    else
      this.user.age = this.oldUser.age;

    this.userService.updateUser(this.user).subscribe(data => {
      this.toastr.successToastr("User updated Successfully!!!","Success");
    });

  }
}
