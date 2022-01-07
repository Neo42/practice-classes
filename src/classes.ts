export class Fruit {
  constructor(
    public name: string,
    protected sweetness: number = 50,
    private isEdible: boolean = true
  ) {}

  public get tasty(): boolean {
    return this.sweetness > 60;
  }

  static cook(fruit: Fruit): string {
    return `Cooked ${fruit.name}`;
  }
}

export class Apple extends Fruit {
  constructor(public variety: string) {
    super("Apple");
  }
}
