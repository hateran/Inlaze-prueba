import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoctailService } from 'src/app/services/coctail.service';

@Component({
  selector: 'app-coctail-detail',
  templateUrl: './coctail-detail.component.html',
  styleUrls: ['./coctail-detail.component.scss']
})
export class CoctailDetailComponent implements OnInit {
  coctail: any = {};

  constructor(
    private route: ActivatedRoute,
    private _router: Router,
    private _coctailService: CoctailService
  ) { }

  ngOnInit(): void {
    let coctail_name = this.route.snapshot.paramMap.get('name');

    if (!coctail_name) {
      this.navigateHome();
    } else {
      this.getCoctail(coctail_name);
    }
  }

  getCoctail(name: string) {
    this._coctailService.search(name).subscribe({
      next: (response: any) => {
        let coctail: any = {}, items = [], color: 1 | 2 | 3 = 1;

        if (!response) {
          this.navigateHome();
        }

        if (response.drinks.length > 1) {
          let search = response.drinks.find((element: any) => element.strDrink == name);

          if (search) {
            coctail = search;
          } else {
            coctail = response.drinks[0];
          }
        } else {
          coctail = response.drinks[0];
        }

        this.coctail = coctail;

        for (let key in this.coctail) {
          if (key.includes('strIngredient') && this.coctail[key]) {
            let index = key.split('strIngredient')[1];
            let title = this.coctail['strMeasure' + index] ? this.coctail['strMeasure' + index] + this.coctail[key] : this.coctail[key]

            if (color == 1) {
              color = 2;
            } else if (color == 2) {
              color = 3;
            } else {
              color = 1;
            }

            let entry: any = {
              title: title,
              picture: "",
              color: color,
              ingredient: this.coctail[key]
            };

            if (index == '1') {
              entry = {
                title_float: "Ingredients",
                title: title,
                picture: "",
                color: color,
                ingredient: this.coctail[key]
              }
            }

            items.push(entry);
          }
        }

        this.coctail.items = items;
      },
      error: (error: any) => {
        this.navigateHome();
      }
    });
  }

  navigateHome() {
    this._router.navigate(['']);
  }

}
