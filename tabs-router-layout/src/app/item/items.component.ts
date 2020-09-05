import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";
import { RouterExtensions } from "@nativescript/angular";

@Component({
  selector: "ns-items",
  templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
  items: Array<Item>;

  constructor(
    private itemService: ItemService,
    private router: RouterExtensions
  ) {}

  ngOnInit(): void {
    this.items = this.itemService.getItems();
  }

  onTap() {
    this.router.navigate(["item/1"]);
  }
}
