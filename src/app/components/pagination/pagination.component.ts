import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() char: string = 'a';

  chars = [
    { char: 'a', active: true },
    { char: 'b', active: false },
    { char: 'c', active: false },
    { char: 'd', active: false },
    { char: 'e', active: false },
    { char: 'f', active: false },
    { char: 'g', active: false },
    { char: 'h', active: false },
    { char: 'i', active: false },
    { char: 'j', active: false },
    { char: 'k', active: false },
    { char: 'l', active: false },
    { char: 'm', active: false },
    { char: 'n', active: false },
    { char: 'ñ', active: false },
    { char: 'o', active: false },
    { char: 'p', active: false },
    { char: 'q', active: false },
    { char: 'r', active: false },
    { char: 's', active: false },
    { char: 't', active: false },
    { char: 'u', active: false },
    { char: 'v', active: false },
    { char: 'w', active: false },
    { char: 'x', active: false },
    { char: 'y', active: false },
    { char: 'z', active: false }
  ];

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      const chng = changes[propName];

      if (propName == 'char') {
        this.char = chng.currentValue;
      }
    }

    this.setActive();
  }

  search(char: string) {
    this._router.navigate([`coctails/${char}`]).then(() => {
      location.reload();
    });
  }

  setActive() {
    let search = this.chars.find(element => element.active == true);

    if (search) {
      search.active = false;
    }

    search = this.chars.find(element => element.char == this.char);

    if (search) {
      search.active = true;
    }
  }

}
