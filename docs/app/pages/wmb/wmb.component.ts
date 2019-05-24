import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-wmb',
  templateUrl: './wmb.component.html',
  styleUrls: ['./wmb.component.css']
})
export class WmbComponent implements OnInit {

  image: any = 'assets/images/prophet1.jpg';

  constructor() { }

  ngOnInit() {
  }

}
