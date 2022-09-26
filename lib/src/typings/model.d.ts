declare namespace Model {
  type ModelType = "people" | "car";
  interface Menu {
    name: string;
    imgSrc: string;
    type: ModelType;
  }
}
