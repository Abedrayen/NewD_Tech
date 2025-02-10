'use client'
import { Button } from '../ui/button'

export default function ClientPatrimoine({ handleNextTab, activeTab, client }) {
  const {
    immobilier = [],
    autrePF = [],
    autreEmprunts = [],
    projet = [],
    liquidite = [],
    placementFinancier = [],
    autresBienSP = [],
    patrimoineProfessionnel = []
  } = client

  return (
    <div className="space-y-6">
      <h1 className="text-customBLUE text-lg font-bold">
        Situation Patrimoniale
      </h1>

      {/* Immobilier Section */}
      <h2 className="text-customBLUE text-lg font-bold">Immobilier</h2>
      <table className="w-full table-auto rounded-lg border border-gray-300">
        <thead>
          <tr className="bg-gray-100 text-center text-sm font-medium">
            <th className="p-2">Localisation</th>
            <th className="p-2">Valeur</th>
            <th className="p-2">Date Fin</th>
            <th className="p-2">Emprunt</th>
            <th className="p-2">Mensualité ou Loyer payé</th>
            <th className="p-2">Date Acquisition</th>
            <th className="p-2">Estimation</th>
            <th className="p-2">Restant Du</th>
            <th className="p-2">Taux</th>
            <th className="p-2">Durée</th>
          </tr>
        </thead>
        <tbody>
          {immobilier.length > 0 ? (
            immobilier.map((item, index) => (
              <tr
                key={index}
                className="border-t text-center text-sm">
                <td className="p-2">{item.localisation}</td>
                <td className="p-2">{item.valeur}</td>
                <td className="p-2">{item.dateFin}</td>
                <td className="p-2">{item.emprunt}</td>
                <td className="p-2">{item.mensualite}</td>
                <td className="p-2">{item.dateAcq}</td>
                <td className="p-2">{item.estimation}</td>
                <td className="p-2">{item.restant}</td>
                <td className="p-2">{item.taux}</td>
                <td className="p-2">{item.duree}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="10"
                className="p-2 text-center">
                Aucune donnée disponible.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Autres Biens Section */}
      <h2 className="text-customBLUE text-lg font-bold">Autres Biens</h2>
      <table className="w-full table-auto rounded-lg border border-gray-300">
        <thead>
          <tr className="bg-gray-100 text-center text-sm font-medium">
            <th className="p-2">Biens</th>
            <th className="p-2">Valeur d'achat</th>
            <th className="p-2">Valeur actuelle</th>
            <th className="p-2">Date Fin</th>
            <th className="p-2">Emprunt</th>
            <th className="p-2">Mensualité</th>
            <th className="p-2">Loyer</th>
            <th className="p-2">Rapport Locatif</th>
            <th className="p-2">Date Acquisition</th>
            <th className="p-2">Rentabilité</th>
            <th className="p-2">Restant Du</th>
            <th className="p-2">Taux</th>
            <th className="p-2">Estimation</th>
          </tr>
        </thead>
        <tbody>
          {autresBienSP.length > 0 ? (
            autresBienSP.map((item, index) => (
              <tr
                key={index}
                className="border-t text-center text-sm">
                <td className="p-2">{item.biens}</td>
                <td className="p-2">{item.valeurAchat}</td>
                <td className="p-2">{item.valeurActuelle}</td>
                <td className="p-2">{item.dateFin}</td>
                <td className="p-2">{item.emprunt}</td>
                <td className="p-2">{item.mensualite}</td>
                <td className="p-2">{item.loyer}</td>
                <td className="p-2">{item.rapportLocatif}</td>
                <td className="p-2">{item.dateAcq}</td>
                <td className="p-2">{item.rentabilite}</td>
                <td className="p-2">{item.restant}</td>
                <td className="p-2">{item.taux}</td>
                <td className="p-2">{item.estimation}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="13"
                className="p-2 text-center">
                Aucune donnée disponible.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Autres Emprunts Section */}
      <h2 className="text-customBLUE text-lg font-bold">Autres Emprunts</h2>
      <table className="w-full table-auto rounded-lg border border-gray-300">
        <thead>
          <tr className="bg-gray-100 text-center text-sm font-medium">
            <th className="p-2">Destination</th>
            <th className="p-2">Montant</th>
            <th className="p-2">Date Fin</th>
            <th className="p-2">Taux</th>
            <th className="p-2">Mensualité</th>
            <th className="p-2">Restant</th>
            <th className="p-2">Commentaires</th>
          </tr>
        </thead>
        <tbody>
          {autreEmprunts.length > 0 ? (
            autreEmprunts.map((item, index) => (
              <tr
                key={index}
                className="border-t text-center text-sm">
                <td className="p-2">{item.destination}</td>
                <td className="p-2">{item.montant}</td>
                <td className="p-2">{item.dateFin}</td>
                <td className="p-2">{item.taux}</td>
                <td className="p-2">{item.mensualite}</td>
                <td className="p-2">{item.restant}</td>
                <td className="max-w-[250px] break-words p-2">
                  {item.commentaires}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="7"
                className="p-2 text-center">
                Aucune donnée disponible.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Projets Section */}
      <h2 className="text-customBLUE text-lg font-bold">Projets</h2>
      <table className="w-full table-auto rounded-lg border border-gray-300">
        <thead>
          <tr className="bg-gray-100 text-center text-sm font-medium">
            <th className="p-2">Type</th>
            <th className="p-2">Valeur d'achat</th>
            <th className="p-2">Emprunt</th>
            <th className="p-2">Date Fin</th>
            <th className="p-2">Mensualité</th>
            <th className="p-2">Loyer</th>
            <th className="p-2">Rapport Lucatif</th>
            <th className="p-2">Taux</th>
            <th className="p-2">Durée</th>
            <th className="p-2">Rentabilité</th>
          </tr>
        </thead>
        <tbody>
          {projet.length > 0 ? (
            projet.map((item, index) => (
              <tr
                key={index}
                className="border-t text-center text-sm">
                <td className="p-2">{item.type}</td>
                <td className="p-2">{item.valeurAchat}</td>
                <td className="p-2">{item.emprunt}</td>
                <td className="p-2">{item.dateFin}</td>
                <td className="p-2">{item.mensualite}</td>
                <td className="p-2">{item.loyer}</td>
                <td className="p-2">{item.rapportLocatif}</td>
                <td className="p-2">{item.taux}</td>
                <td className="p-2">{item.duree}</td>
                <td className="p-2">{item.rentabilite}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="10"
                className="p-2 text-center">
                Aucune donnée disponible.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <h1 className="text-customBLUE text-lg font-bold">
        Patrimoine Financier
      </h1>

      {/* Liquidité Section */}
      <h2 className="text-customBLUE text-lg font-bold">Liquidité</h2>
      <table className="w-full table-auto rounded-lg border border-gray-300">
        <thead>
          <tr className="bg-gray-100 text-center text-sm font-medium">
            <th className="p-2">Nom</th>
            <th className="p-2">Valeur</th>
            <th className="p-2">Rentabilité</th>
            <th className="p-2">Risque</th>
            <th className="p-2">Disponible</th>
            <th className="p-2">Gestionnaire</th>
            <th className="p-2">Gestion</th>
            <th className="p-2">Objectif</th>
            <th className="p-2">Date Ouverture</th>
            <th className="p-2">Organisme</th>
            <th className="p-2">Support</th>
            <th className="p-2">Satisfait</th>
          </tr>
        </thead>
        <tbody>
          {liquidite.length > 0 ? (
            liquidite.map((item, index) => (
              <tr
                key={index}
                className="border-t text-center text-sm">
                <td className="p-2">{item.nom}</td>
                <td className="p-2">{item.valeur}</td>
                <td className="p-2">{item.rentabilite}</td>
                <td className="p-2">{item.risque}</td>
                <td className="p-2">{item.disponible}</td>
                <td className="p-2">{item.gestionnaire}</td>
                <td className="p-2">{item.gestion}</td>
                <td className="p-2">{item.objectif}</td>
                <td className="p-2">{item.dateOuverture}</td>
                <td className="p-2">{item.organisme}</td>
                <td className="p-2">{item.support}</td>
                <td className="p-2">{item.satisfait}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="12"
                className="p-2 text-center">
                Aucune donnée disponible.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Placement Financier Section */}
      <h2 className="text-customBLUE text-lg font-bold">Placement Financier</h2>
      <table className="w-full table-auto rounded-lg border border-gray-300">
        <thead>
          <tr className="bg-gray-100 text-center text-sm font-medium">
            <th className="p-2">Nom</th>
            <th className="p-2">Valeur</th>
            <th className="p-2">Rentabilité</th>
            <th className="p-2">Risque</th>
            <th className="p-2">Disponible</th>
            <th className="p-2">Gestionnaire</th>
            <th className="p-2">Gestion</th>
            <th className="p-2">Objectif</th>
            <th className="p-2">Date Ouverture</th>
            <th className="p-2">Organisme</th>
            <th className="p-2">Support</th>
            <th className="p-2">Satisfait</th>
          </tr>
        </thead>
        <tbody>
          {placementFinancier.length > 0 ? (
            placementFinancier.map((item, index) => (
              <tr
                key={index}
                className="border-t text-center text-sm">
                <td className="p-2">{item.nom}</td>
                <td className="p-2">{item.valeur}</td>
                <td className="p-2">{item.rentabilite}</td>
                <td className="p-2">{item.risque}</td>
                <td className="p-2">{item.disponible}</td>
                <td className="p-2">{item.gestionnaire}</td>
                <td className="p-2">{item.gestion}</td>
                <td className="p-2">{item.objectif}</td>
                <td className="p-2">{item.dateOuverture}</td>
                <td className="p-2">{item.organisme}</td>
                <td className="p-2">{item.support}</td>
                <td className="p-2">{item.satisfait}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="12"
                className="p-2 text-center">
                Aucune donnée disponible.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Autre Financier Section */}
      <h2 className="text-customBLUE text-lg font-bold">Autre</h2>
      <table className="w-full table-auto rounded-lg border border-gray-300">
        <thead>
          <tr className="bg-gray-100 text-center text-sm font-medium">
            <th className="p-2">Nom</th>
            <th className="p-2">Valeur</th>
            <th className="p-2">Rentabilité</th>
            <th className="p-2">Risque</th>
            <th className="p-2">Disponible</th>
            <th className="p-2">Gestionnaire</th>
            <th className="p-2">Gestion</th>
            <th className="p-2">Objectif</th>
            <th className="p-2">Date Ouverture</th>
            <th className="p-2">Organisme</th>
            <th className="p-2">Support</th>
            <th className="p-2">Satisfait</th>
          </tr>
        </thead>
        <tbody>
          {autrePF.length > 0 ? (
            autrePF.map((item, index) => (
              <tr
                key={index}
                className="border-t text-center text-sm">
                <td className="p-2">{item.nom}</td>
                <td className="p-2">{item.valeur}</td>
                <td className="p-2">{item.rentabilite}</td>
                <td className="p-2">{item.risque}</td>
                <td className="p-2">{item.disponible}</td>
                <td className="p-2">{item.gestionnaire}</td>
                <td className="p-2">{item.gestion}</td>
                <td className="p-2">{item.objectif}</td>
                <td className="p-2">{item.dateOuverture}</td>
                <td className="p-2">{item.organisme}</td>
                <td className="p-2">{item.support}</td>
                <td className="p-2">{item.satisfait}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="12"
                className="p-2 text-center">
                Aucune donnée disponible.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Patrimoine Professionnel Section */}
      <h1 className="text-customBLUE text-lg font-bold">
        Patrimoine Professionnel
      </h1>
      <table className="w-full table-auto rounded-lg border border-gray-300">
        <thead>
          <tr className="bg-gray-100 text-center text-sm font-medium">
            <th className="p-2">Forme Juridique</th>
            <th className="p-2">Nb Associés</th>
            <th className="p-2">Détention</th>
            <th className="p-2">Date Création</th>
            <th className="p-2">Valorisation</th>
            <th className="p-2">Passif</th>
            <th className="p-2">Trésorerie</th>
            <th className="p-2">CA</th>
            <th className="p-2">Bénéfice</th>
            <th className="p-2">Activité</th>
          </tr>
        </thead>
        <tbody>
          {patrimoineProfessionnel.length > 0 ? (
            patrimoineProfessionnel.map((item, index) => (
              <tr
                key={index}
                className="border-t text-center text-sm">
                <td className="p-2">{item.formeJuridique}</td>
                <td className="p-2">{item.nombreAssocie}</td>
                <td className="p-2">{item.detention}</td>
                <td className="p-2">{item.dateCreation}</td>
                <td className="p-2">{item.valorisation}</td>
                <td className="p-2">{item.passif}</td>
                <td className="p-2">{item.tresorerie}</td>
                <td className="p-2">{item.CA}</td>
                <td className="p-2">{item.benefice}</td>
                <td className="p-2">{item.activite}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="10"
                className="p-2 text-center">
                Aucune donnée disponible.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Optional: Next Button or Additional Components */}
      <div className="flex justify-end">
        <Button onClick={() => handleNextTab(activeTab + 1)}>Next</Button>
      </div>
    </div>
  )
}
