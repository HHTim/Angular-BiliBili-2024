import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less'],
  standalone: false,
})
export class FooterComponent implements OnInit {

  year: number = new Date().getFullYear();

  constructor() {
  }

  ngOnInit() {
  }

}
