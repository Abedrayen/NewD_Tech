export enum ModeGestion {
    DIRECTE = 'directe',
    CONSEILLE = 'conseillée',
    SOUSMANDAT = 'sous mandat',
  }

  export enum Frequence 
  {
    MENSUEL='Mensuel',
    ANNUEL='Annuel'
  }
  
  export enum Status{
    ENCOURS="en cours",
    TERMINE="terminée",
    INACTIF="inactif"
  }

export enum Proprietaire
{
    SELF="self",
    CONJOINT="conjoint",
    COMMUN="commun",
    ENFANT="enfant"
}

export enum ConnaissanceFinancieres
{
    MAUVAISE="mauvaise",
    MOYENNE="moyenne",
    BOONNE="bonne"
}

export enum Connaissance
{
  NOVICE="Novice",
  INFORME="Informé",
  EXPERIMENTE="Expérimenté"
}

export enum Operation
{
  AUCUNE="Aucune",
  DE1A5="De 1 à 5",
  PLUS5="Plus de 5"
}

export enum NiveauPerte
{
  AUCUNE_PERTE="Aucune Perte",
  FAIBLE="Faible",
  MOYENNE="Moyenne",
  ELEVEE="Élevée"
}

export enum Role
{
  CONSULTANT="Consultant",
  ADMIN="Admin"
}

export enum Gestion
{
  LIBRE="Libre",
  SOUS_MANDAT="Sous mandat"
}