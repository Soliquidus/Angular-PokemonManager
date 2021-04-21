export class PokemonAPI {
  name: string;
  sprites: {
    back_default: string;
    front_default: string;
  };
  height: number;
  weight: number;
  types: [
    {
      type: {
        name: string;
      }
    }
  ];
  abilities: [
    {
      ability: {
        name: string;
      }
    }
  ];
  stats: [
    {
      base_stat: number;
      stat: {
        name: string;
      }
    }
  ];
}
