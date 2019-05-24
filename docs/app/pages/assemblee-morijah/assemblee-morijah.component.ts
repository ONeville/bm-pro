import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-assemblee-morijah',
  templateUrl: './assemblee-morijah.component.html',
  styleUrls: ['./assemblee-morijah.component.css']
})
export class AssembleeMorijahComponent implements OnInit {
  image1: any = 'assets/images/morijah.jpg';

  constructor() { }

  ngOnInit() {
  }

}
