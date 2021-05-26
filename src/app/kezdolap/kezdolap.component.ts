import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kezdolap',
  templateUrl: './kezdolap.component.html',
  styleUrls: ['./kezdolap.component.scss']
})
export class KezdolapComponent implements OnInit {
  images = ["slide_motive", "slide_service", "motive"].map((n) => `https://www.enersys.hu/images/${n}.jpg`);
  constructor() { }

  ngOnInit(): void {
  }

}
