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

  constructor(
    private route: ActivatedRoute,
    private _router: Router,
    private _coctailService: CoctailService
  ) { }

  ngOnInit(): void {
    this.char = this.route.snapshot.paramMap.get('char');

    if (!this.char) {
      this.navigateHome();
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

  navigateHome() {
    this._router.navigate(['']);
  }

}
