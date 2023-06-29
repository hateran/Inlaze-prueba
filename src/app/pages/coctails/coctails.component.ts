import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoctailService } from 'src/app/services/coctail.service';

@Component({
  selector: 'app-coctails',
  templateUrl: './coctails.component.html',
  styleUrls: ['./coctails.component.scss']
})
export class CoctailsComponent implements OnInit {
  coctails: any[] = [];
  char: string | null = 'a';
  ingredient: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private _router: Router,
    private _coctailService: CoctailService
  ) { }

  ngOnInit(): void {
    this.char = this.route.snapshot.paramMap.get('char');
    this.ingredient = this.route.snapshot.paramMap.get('ingredient');

    if (!this.char) {
      if (!this.ingredient) {
        this.navigateHome();
      } else {
        this.listByIngredient(this.ingredient);
      }
    } else {
      this.listCoctails(this.char);
    }
  }

  listCoctails(char: string) {
    this._coctailService.list(char).subscribe({
      next: (response: any) => {
        if (response) {
          this.coctails = response.drinks;
        } else {
          this.navigateHome();
        }
      },
      error: (error: any) => {
        this.navigateHome();
      }
    });
  }

  listByIngredient(ingredient: string) {
    this._coctailService.searchByIngredient(ingredient).subscribe({
      next: (response: any) => {
        if (response) {
          this.coctails = response.drinks;
        } else {
          this.navigateHome();
        }
      },
      error: (error: any) => {
        this.navigateHome();
      }
    });
  }

  navigateToCoctail(name: string) {
    this._router.navigate([`coctail-detail/${name.toLowerCase()}`]);
  }

  navigateHome() {
    this._router.navigate(['']);
  }

}
