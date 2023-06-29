import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() change_style: boolean = false;
  @Input() custom: boolean = false;
  @Input() items!: Array<any>;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  navigateToDetails(name: string) {
    this._router.navigate([`coctail-detail/${name.toLowerCase()}`]);
  }

}
