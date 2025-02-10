import { IsString, IsDateString, IsEmail, IsOptional, IsNumber, IsBoolean, ValidateNested, IsArray } from 'class-validator';
import { Type } from 'class-transformer';

// CreateClientDto
export class CreateClientDto {
  @IsString()
  readonly nom: string;

  @IsString()
  readonly prenom: string;

  @IsDateString()
  readonly date_naissance: string;

  @IsString()
  readonly lieu_naissance: string;

  @IsString()
  readonly profession: string;

  @IsString()
  readonly adresse_fiscale: string;

  @IsString()
  readonly telephone: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  readonly situation_matrimoniale: string;

  @IsString()
  readonly regime_matrimonial: string;

  @IsDateString()
  readonly date_union: string;

  @IsDateString()
  readonly date_creation: string;

  @IsString()
  readonly profilsClients: string;

  @IsNumber()
  readonly profil_risque: number;

  @IsString()
  readonly connaissance_financieres: string;

  @IsString()
  readonly remarques: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => ConjointDto)
  readonly conjoint?: ConjointDto;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => EnfantDto)
  readonly enfants?: EnfantDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RevenuDto)
  readonly revenus?: RevenuDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PassifDto)
  readonly passifs?: PassifDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImmobilierDto)
  readonly immobilier?: ImmobilierDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ObjectifDto)
  readonly objectifs?: ObjectifDto[];

  @IsOptional()
  @ValidateNested()
  @Type(() => PmiEsgDto)
  readonly pmiesg?: PmiEsgDto;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProduitEpargneDto)
  readonly produits_epargne?: ProduitEpargneDto[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  readonly autres_impots_acquittes?: string[];

  @IsOptional()
  @ValidateNested()
  @Type(() => CapaciteEpargneDto)
  readonly capaciteEpargne?: CapaciteEpargneDto;
}

export class ConjointDto {
  @IsString()
  readonly nom: string;

  @IsString()
  readonly prenom: string;

  @IsDateString()
  readonly date_naissance: string;

  @IsString()
  readonly lieu_naissance: string;

  @IsString()
  readonly profession: string;

  @IsString()
  readonly telephone: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  readonly forme_legale: string;

  @IsDateString()
  readonly depuis: string;
}

export class EnfantDto {
  @IsString()
  readonly nom: string;

  @IsString()
  readonly prenom: string;

  @IsDateString()
  readonly date_naissance: string;

  @IsString()
  readonly a_charge: string;

  @IsString()
  readonly remarques: string;
}

export class RevenuDto {
  @IsNumber()
  readonly montant: number;

  @IsString()
  readonly nature: string;

  @IsString()
  readonly frequence: string;

  @IsBoolean()
  readonly hors_france: boolean;

  @IsString()
  readonly remarques: string;

  @IsString()
  readonly proprietaire: string;
}

export class PassifDto {
  @IsString()
  readonly nature: string;

  @IsNumber()
  readonly capital_restant_du: number;

  @IsNumber()
  readonly remboursement_mensuel: number;

  @IsNumber()
  readonly duree_restante: number;

  @IsString()
  readonly proprietaire: string;
}

export class ImmobilierDto {
  @IsString()
  readonly localisation: string;

  @IsNumber()
  readonly valeur_indicative: number;

  @IsDateString()
  readonly depuis_quand: string;

  @IsString()
  readonly proprietaire: string;
}

export class ObjectifDto {
  @IsString()
  readonly objectif: string;

  @IsNumber()
  readonly priorite: number;

  @IsNumber()
  readonly horizon: number;

  @IsString()
  readonly status: string;
}

export class PmiEsgDto {
  @IsNumber()
  readonly objectif_env_dur_social_souhaite: number;

  @IsNumber()
  readonly patrimoine: number;
}

export class ProduitEpargneDto {
  @IsString()
  readonly mode_gestion: string;

  @IsBoolean()
  readonly est_actuel: boolean;

  @IsString()
  readonly proprietaire: string;
}

export class CapaciteEpargneDto {
  @IsNumber()
  readonly montant: number;

  @IsString()
  readonly periodicite: string;

  @IsNumber()
  readonly quote_part_patrimoine: number;

  @IsNumber()
  readonly endettement_global: number;
}

