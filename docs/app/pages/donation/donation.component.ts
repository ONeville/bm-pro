import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {
  image1: any = 'assets/images/donation.jpg';

  constructor() { }

  ngOnInit() {
  }

}
