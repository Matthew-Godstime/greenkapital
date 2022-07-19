import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  amount: number = 0.00;
  public collpase: boolean = false;
  constructor() { }

  public collpaseMenu() {
    this.collpase = !this.collpase
    setTimeout(() => {this.collpase = false}, 1000)
  }
  ngOnInit(): void {
  }

}
