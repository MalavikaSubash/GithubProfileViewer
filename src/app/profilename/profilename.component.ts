import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profilename',
  templateUrl: './profilename.component.html',
  styleUrls: ['./profilename.component.scss']
})
export class ProfilenameComponent implements OnInit {
  username: string;
  data;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  search() {
    this.http.get('https://api.github.com/users/' + this.username+'?access_token=beba3c150021bfb49769385927dfa59fac2cdf04').subscribe(Response => {
      this.data = Response;
    });
  }
}
