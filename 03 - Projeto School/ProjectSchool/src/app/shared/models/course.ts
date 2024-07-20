export interface Course{
      id: number;
      name: string;
      category: string;
      rating: number;
      year: number;
      teacher: string;
      description: string;
      imgURL: string;

}

export enum Category {
  Tecnologia = 'Tecnologia',
  Arte = 'Arte',
  Culinaria = 'Culinária',
  Financas = 'Finanças',
  Psicologia = 'Psicologia',
  Marketing = 'Marketing',
  Fotografia = 'Fotografia',
  Escrita = 'Escrita',
  Musica = 'Música',
  CienciasAmbientais = 'Ciências Ambientais',
  Moda = 'Moda',
  Comunicação = 'Comunicação',
  Filosofia = 'Filosofia',
  Saude = 'Saúde',
}
