export class FormSearchPokemon {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  setName = (name: string) => this.name = name;
}
