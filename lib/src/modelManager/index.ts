import * as THREE from "three";
import People from "./people";

export default class ModelManager {
  modelMenu: Model.Menu[] = [];

  constructor() {
    this.initModelMenu();
  }
  private initModelMenu() {
    this.modelMenu = [
      {
        name: "李易峰",
        imgSrc: "",
        type: "people",
      },
    ];
  }
  getModelByMenu(menu: Model.Menu) {
    const people = new People(3, 3);
    return people;
  }
  importModel() {}
}
