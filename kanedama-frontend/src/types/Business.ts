export interface Business {
  id: number;
  date_creation: string;
  etablissement_siege: {
    siren: string;
    siret: string;
  };
}
