import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  user: any;
  userId: string;
  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.params['id'];
    this.initialization();
  }
  initialization() {
    this.userService.getUser(this.userId).subscribe(data => {
      this.user = data;
    });
  }
  updateProfile() {
    this.router.navigate(['update', this.user.emailId]);
  }

}
