import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  image: any = 'assets/images/pepite.jpg';

  docs: any = [
    {
      img: 'assets/docs/doc1.jpg',
      title: 'MAN-HOU: Que dites-vous que c\'est?',
      src: 'assets/docs/doc1.pdf'
    },
    {
      img: 'assets/docs/doc2.jpg',
      title: 'Quel avenir pour nos enfants?',
      src: 'assets/docs/doc2.pdf'
    },
    {
      img: 'assets/docs/doc3.jpg',
      title: 'Le ministere de la parole de Dieu ||',
      src: 'assets/docs/doc3.pdf'
    },
    {
      img: 'assets/docs/doc4.jpg',
      title: 'La television ou l\'enfer vision',
      src: 'assets/docs/doc4.pdf'
    },
    {
      img: 'assets/docs/doc5.jpg',
      title: 'Israel dans la prophetie ||',
      src: 'assets/docs/doc5.pdf'
    }
  ];

  constructor() {}

  ngOnInit() {}

  download(item) {
    const link = document.createElement('a');
    link.href = item.src;
    link.target = '_blank';
    // link.download=item.title;
    link.click();
  }
}
