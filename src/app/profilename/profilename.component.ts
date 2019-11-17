import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profilename',
  templateUrl: './profilename.component.html',
  styleUrls: ['./profilename.component.scss']
})
export class ProfilenameComponent implements OnInit {
  username: string;
  data;
  isValid = true;
  isLoader = false;
  local;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  search() {
    this.isLoader = true;
    if ( this.local ) {
      this.data = JSON.parse(this.local);
      this.isLoader = true;
    } else {
    this.http.get('https://api.github.com/users/' + this.username + '?access_token=').subscribe(Response => {
      this.data = Response;
      this.local = localStorage.setItem('username', JSON.stringify(this.data));
      this.isValid = true;
      this.isLoader = false;
    }, Error => {
      this.isLoader = false;
      this.isValid  = false;
      this.data = false;
      this.snackBar.open('Bad credentials', 'Close', { duration: 5000, verticalPosition: 'top', horizontalPosition: 'right'
      });
    });
  }
  }
}
