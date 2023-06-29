import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cards = [
    {
      picture: "assets/water-solid 1.png",
      title: "Versatility",
      content: "The range of flavors in gin is exceptionally wide, thanks to the variety of botanicals that can be used in its production."
    },
    {
      picture: "assets/cocktail-solid 1.png",
      title: "Distiontiv Flavor",
      content: "Bittersweet and slightly woody flavor is the signature of any gin."
    },
    {
      picture: "assets/Vector.png",
      title: "Purity",
      content: "This gives it a clean, pure feel, without the caramel or vanilla notes that come from barrel aging."
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
