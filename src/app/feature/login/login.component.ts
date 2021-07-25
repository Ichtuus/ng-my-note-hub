import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  username: any
  prout: any = [{caca: 1}, {caca:2}]
  info = 'info'
  constructor() { }

  ngOnInit(): void {
  }

  connect () {
// console.log('data', data.value)
  }

}
