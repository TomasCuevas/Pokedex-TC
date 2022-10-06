export interface PokemonListResponse {
  count: number;
  next?: string;
  previous?: string;
  results: PokemonList[];
}

export interface PokemonList {
  name: string;
  url: string;
}

export interface Pokemon {
  id: string;
  img: string;
  name: string;
}

export interface PokemonFavorite {
  name: string;
  id: number;
}

export interface PokemonType {
  damage_relations: DamageRelations;
  game_indices: GameIndexx[];
  generation: Generation;
  id: number;
  move_damage_class: Generation;
  moves: Generation[];
  name: string;
  names: Name[];
  past_damage_relations: any[];
  pokemon: PokemonInType[];
}

export interface DamageRelations {
  double_damage_from: Generation[];
  double_damage_to: any[];
  half_damage_from: any[];
  half_damage_to: Generation[];
  no_damage_from: Generation[];
  no_damage_to: Generation[];
}

export interface Generation {
  name: string;
  url: string;
}

export interface GameIndexx {
  game_index: number;
  generation: Generation;
}

export interface Name {
  language: Generation;
  name: string;
}

export interface PokemonInType {
  pokemon: Generation;
  slot: number;
}
