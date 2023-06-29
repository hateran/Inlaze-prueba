import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  content = [
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

  cards = [
    [
      {
        title_float: "Popular Drinks",
        title: "Mojito",
        picture: "assets/mojito.png",
        color: 1
      },
      {
        title: "Old Fashioned",
        picture: "assets/Old Fashioned.png",
        color: 2
      },
      {
        title: "Long Island Tea",
        picture: "assets/Long Island Tea.png",
        color: 3
      },
      {
        title: "Negroni",
        picture: "assets/Negroni.png",
        color: 1
      },
      {
        title: "Whiskey Sour",
        picture: "assets/Whiskey Sour.png",
        color: 2
      },
      {
        title: "Dry Martini",
        picture: "assets/Dry Martini.png",
        color: 3
      },
      {
        title: "Daiquiri",
        picture: "assets/Daiquiri.png",
        color: 1
      },
      {
        title: "Margarita",
        picture: "assets/Margarita.png",
        color: 2
      }
    ],
    [
      {
        title: "Vodka",
        picture: "assets/Vodka.png",
        color: 1
      },
      {
        title: "Gin",
        picture: "assets/Gin.png",
        color: 2
      },
      {
        title_float: "Popular Ingredients",
        title: "Rum",
        picture: "assets/Rum.png",
        color: 3
      },
      {
        title: "Tequila",
        picture: "assets/Tequila.png",
        color: 1
      }
    ],
    [
      {
        title_float: "Latest Drinks",
        title: "Cocktail Horse’s Neck",
        picture: "assets/Cocktail Horses Neck.png",
        color: 1
      },
      {
        title: "Planter’s Punch",
        picture: "assets/Planters Punch.png",
        color: 2
      },
      {
        title: "Ramos Gin Fizz",
        picture: "assets/Ramos Gin Fizz.png",
        color: 3
      },
      {
        title: "Gin Lemon",
        picture: "assets/Gin Lemon.png",
        color: 1
      },
      {
        title: "Gin Tonic",
        picture: "assets/Gin Tonic.png",
        color: 2
      },
      {
        title: "Vodka Tonic",
        picture: "assets/Vodka Tonic.png",
        color: 3
      },
      {
        title: "Vodka Lemon",
        picture: "assets/Vodka Lemon.png",
        color: 1
      },
      {
        title: "Vodka Slime",
        picture: "assets/Vodka Slime.png",
        color: 2
      }
    ],
    [
      {
        title: "Limeade",
        picture: "assets/Limeade.png",
        color: 1
      },
      {
        title: "Chocolate Syrup",
        picture: "assets/Chocolate Syrup.png",
        color: 2
      },
      {
        title_float: "Random Ingredients",
        title: "Melon Liqueur",
        picture: "assets/Melon Liqueur.png",
        color: 3
      },
      {
        title: "Kiwi Liqueur",
        picture: "assets/Kiwi Liqueur.png",
        color: 1
      }
    ],
    [
      {
        title_float: "Random Drinks",
        title: "Pure Passion",
        picture: "assets/Pure Passion.png",
        color: 1
      },
      {
        title: "Egg Nog #4",
        picture: "assets/Egg Nog 4.png",
        color: 2
      },
      {
        title: "Kiwi Papaya Smoothie",
        picture: "assets/Kiwi Papaya Smoothie.png",
        color: 3
      },
      {
        title: "Wine Punch",
        picture: "assets/Wine Punch.png",
        color: 1
      },
      {
        title: "Arise My Love",
        picture: "assets/Arise My Love.png",
        color: 2
      },
      {
        title: "Screwdriver",
        picture: "assets/Screwdriver.png",
        color: 3
      },
      {
        title: "After Five",
        picture: "assets/After Five.png",
        color: 1
      },
      {
        title: "151 Florida Bushwacker",
        picture: "assets/151 Florida Bushwacker.png",
        color: 2
      }
    ]
  ];

  constructor() { }

  ngOnInit() {
  }

}
