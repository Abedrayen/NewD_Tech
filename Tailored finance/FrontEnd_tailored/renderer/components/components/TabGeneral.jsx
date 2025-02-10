
'use client'

import { React, useState, useReducer } from "react";
import { Button } from "../ui/button";

export default function TabGeneral ({state,dispatch , handleNextTab , activeTab}) {

    const [newChild, setNewChild] = useState({ name: "", dob: "", status: "À charge", remarks: "" });


    const addChild = () => {
        if (newChild.nom && newChild.date_naissance && newChild.statut) {
            dispatch({ type: "ADD_CHILD", child: newChild });
            setNewChild({ nom: "", date_naissance: "", statut: "", remarques: "" }); // Reset form
        } else {
            alert("Please fill in all required fields.");
        }
    };

    const removeChild = (id) => {
        setChildren(children.filter((child) => child.id !== id));
    };
    const [newPersonne, setNewPersonne] = useState({
        nom: "",
        prenom: "",
    });
    const addPersonne = () => {
        if (newPersonne.nom && newPersonne.prenom) {
            dispatch({ type: "ADD_PERSONNE_A_CHARGE", personne: newPersonne });
            setNewPersonne({ nom: "", prenom: "" });
        } else {
            alert("Please fill in all required fields.");
        }
    };

    const [dependents, setDependents] = useState([

    ]);

    return (
   
        <div className=" overflow-y-auto p-4">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <h2 className="text-lg font-bold text-customBLUE">Client</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="nom" className="text-sm font-medium text-customBLUE">Nom</label>
                        <input
                            type="text"
                            id="nom"
                            placeholder="Nom"
                            className="form-input border p-2"
                            value={state.nom}
                            onChange={(e) => dispatch({ type: 'UPDATE_FIELD', field: 'nom', value: e.target.value })}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="prenom" className="text-sm font-medium text-customBLUE">Prénom</label>
                        <input
                            type="text"
                            id="prenom"
                            placeholder="Prénom"
                            className="form-input border p-2"
                            value={state.prenom}
                            onChange={(e) => dispatch({ type: 'UPDATE_FIELD', field: 'prenom', value: e.target.value })}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="date_naissance" className="text-sm font-medium text-customBLUE">Date de Naissance</label>
                        <input
                            type="date"
                            id="date_naissance"
                            className="form-input border p-2"
                            value={state.date_naissance}
                            onChange={(e) => dispatch({ type: 'UPDATE_FIELD', field: 'date_naissance', value: e.target.value })}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="lieu_naissance" className="text-sm font-medium text-customBLUE">Lieu de Naissance</label>
                        <input
                            type="text"
                            id="lieu_naissance"
                            placeholder="Lieu de Naissance"
                            className="form-input border p-2"
                            value={state.lieu_naissance}
                            onChange={(e) => dispatch({ type: 'UPDATE_FIELD', field: 'lieu_naissance', value: e.target.value })}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="profession" className="text-sm font-medium text-customBLUE">Profession</label>
                        <input
                            type="text"
                            id="profession"
                            placeholder="Profession"
                            className="form-input border p-2"
                            value={state.profession}
                            onChange={(e) => dispatch({ type: 'UPDATE_FIELD', field: 'profession', value: e.target.value })}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="adresse_fiscale" className="text-sm font-medium text-customBLUE">Adresse</label>
                        <input
                            type="text"
                            id="adresse_fiscale"
                            placeholder="Adresse"
                            className="form-input border p-2"
                            value={state.adresse_fiscale}
                            onChange={(e) => dispatch({ type: 'UPDATE_FIELD', field: 'adresse_fiscale', value: e.target.value })}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="telephone" className="text-sm font-medium text-customBLUE">Téléphone</label>
                        <input
                            type="text"
                            id="telephone"
                            placeholder="Téléphone"
                            className="form-input border p-2"
                            value={state.telephone}
                            onChange={(e) => dispatch({ type: 'UPDATE_FIELD', field: 'telephone', value: e.target.value })}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-sm font-medium text-customBLUE">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="E-mail"
                            className="form-input border p-2"
                            value={state.email}
                            onChange={(e) => dispatch({ type: 'UPDATE_FIELD', field: 'email', value: e.target.value })}
                        />
                    </div>
                </div>

                <h2 className="text-lg font-bold text-customBLUE">Conjoint</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="conjoint_nom" className="text-sm font-medium text-customBLUE">Nom</label>
                        <input
                            type="text"
                            id="conjoint_nom"
                            placeholder="Nom"
                            className="form-input border p-2"
                            value={state.conjoint.nom}
                            onChange={(e) => dispatch({ type: 'UPDATE_SPOUSE_FIELD', field: 'nom', value: e.target.value })}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="conjoint_prenom" className="text-sm font-medium text-customBLUE">Prénom</label>
                        <input
                            type="text"
                            id="conjoint_prenom"
                            placeholder="Prénom"
                            className="form-input border p-2"
                            value={state.conjoint.prenom}
                            onChange={(e) => dispatch({ type: 'UPDATE_SPOUSE_FIELD', field: 'prenom', value: e.target.value })}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="conjoint_date_naissance" className="text-sm font-medium text-customBLUE">Date de Naissance</label>
                        <input
                            type="date"
                            id="conjoint_date_naissance"
                            className="form-input border p-2"
                            value={state.conjoint.date_naissance}
                            onChange={(e) => dispatch({ type: 'UPDATE_SPOUSE_FIELD', field: 'date_naissance', value: e.target.value })}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="conjoint_lieu_naissance" className="text-sm font-medium text-customBLUE">Lieu de Naissance</label>
                        <input
                            type="text"
                            id="conjoint_lieu_naissance"
                            placeholder="Lieu de Naissance"
                            className="form-input border p-2"
                            value={state.conjoint.lieu_naissance}
                            onChange={(e) => dispatch({ type: 'UPDATE_SPOUSE_FIELD', field: 'lieu_naissance', value: e.target.value })}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="conjoint_profession" className="text-sm font-medium text-customBLUE">Profession</label>
                        <input
                            type="text"
                            id="conjoint_profession"
                            placeholder="Profession"
                            className="form-input border p-2"
                            value={state.conjoint.profession}
                            onChange={(e) => dispatch({ type: 'UPDATE_SPOUSE_FIELD', field: 'profession', value: e.target.value })}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="conjoint_telephone" className="text-sm font-medium text-customBLUE">Téléphone</label>
                        <input
                            type="text"
                            id="conjoint_telephone"
                            placeholder="Téléphone"
                            className="form-input border p-2"
                            value={state.conjoint.telephone}
                            onChange={(e) => dispatch({ type: 'UPDATE_SPOUSE_FIELD', field: 'telephone', value: e.target.value })}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="conjoint_email" className="text-sm font-medium text-customBLUE">E-mail</label>
                        <input
                            type="email"
                            id="conjoint_email"
                            placeholder="E-mail"
                            className="form-input border p-2"
                            value={state.conjoint.email}
                            onChange={(e) => dispatch({ type: 'UPDATE_SPOUSE_FIELD', field: 'email', value: e.target.value })}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="forme_legale" className="text-sm font-medium text-customBLUE">Forme Légale</label>
                        <input
                            type="text"
                            id="forme_legale"
                            placeholder="Forme Légale"
                            className="form-input border p-2"
                            value={state.conjoint.forme_legale}
                            onChange={(e) => dispatch({ type: 'UPDATE_SPOUSE_FIELD', field: 'forme_legale', value: e.target.value })}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="depuis" className="text-sm font-medium text-customBLUE">Depuis</label>
                        <input
                            type="date"
                            id="depuis"
                            className="form-input border p-2"
                            value={state.conjoint.depuis}
                            onChange={(e) => dispatch({ type: 'UPDATE_SPOUSE_FIELD', field: 'depuis', value: e.target.value })}
                        />
                    </div>
                </div>
                <div className="space-y-6">
                    <h2 className="text-lg font-bold text-customBLUE">Vos enfants</h2>
                    <table className="table-auto w-full border border-gray-300 rounded-lg">
                        <thead>
                            <tr className="bg-gray-100 text-sm font-medium">
                                <th className="p-2 text-left">Nom</th>
                                <th className="p-2 text-left">Date de Naissance</th>
                                <th className="p-2 text-left">Statut</th>
                                <th className="p-2 text-left">Remarques</th>
                                <th className="p-2 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {state.enfants.map((child, index) => (
                                <tr key={index} className="text-sm border-t">
                                    <td className="p-2">{child.nom}</td>
                                    <td className="p-2">{child.date_naissance}</td>
                                    <td className="p-2">{child.statut}</td>
                                    <td className="p-2">{child.remarques}</td>
                                    <td className="p-2 flex justify-center space-x-2">
                                        <button
                                            className="text-red-600"
                                            onClick={() => dispatch({ type: "REMOVE_CHILD", index })}
                                        >
                                            Supprimer
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="space-y-4">
                        <h3 className="text-md font-bold text-customBLUE">Ajouter un enfant</h3>
                        <div className="grid grid-cols-4 gap-4">
                            <input
                                type="text"
                                placeholder="Nom"
                                className="form-input border p-2"
                                value={newChild.nom}
                                onChange={(e) => setNewChild({ ...newChild, nom: e.target.value })}
                            />
                            <input
                                type="date"
                                placeholder="Date de Naissance"
                                className="form-input border p-2"
                                value={newChild.date_naissance}
                                onChange={(e) =>
                                    setNewChild({ ...newChild, date_naissance: e.target.value })
                                }
                            />
                            <select
                                className="form-input border p-2"
                                value={newChild.status}
                                onChange={(e) => setNewChild({ ...newChild, statut: e.target.value })}
                            >
                                <option value="">Select</option>
                                <option value="À charge">À charge</option>
                                <option value="Non à charge">Non à charge</option>
                            </select>
                            <input
                                type="text"
                                placeholder="Remarques"
                                className="form-input border p-2"
                                value={newChild.remarques}
                                onChange={(e) =>
                                    setNewChild({ ...newChild, remarques: e.target.value })
                                }
                            />
                        </div>
                        <button
                            className="bg-customGold text-white px-4 py-2 rounded-md"
                            onClick={addChild}
                        >
                            Ajouter
                        </button>
                    </div>
                </div>
                <h2 className="text-lg font-bold text-customBLUE">
                    Autres personnes en charge
                </h2>
                <table className="table-auto w-full border border-gray-300 rounded-lg">
                    <thead>
                        <tr className="bg-gray-100 text-sm font-medium">
                            <th className="p-2 text-left">Nom</th>
                            <th className="p-2 text-left">Prénom</th>
                            <th className="p-2 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.personnes_a_charge.map((personne, index) => (
                            <tr key={index} className="text-sm border-t">
                                <td className="p-2">{personne.nom}</td>
                                <td className="p-2">{personne.prenom}</td>
                                <td className="p-2 flex justify-center space-x-2">
                                    <button
                                        className="text-red-600"
                                        onClick={() =>
                                            dispatch({ type: "REMOVE_PERSONNE_A_CHARGE", index })
                                        }
                                    >
                                        Supprimer
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="space-y-4">
                    <h3 className="text-md font-bold text-customBLUE">
                        Ajouter une personne à charge
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Nom"
                            className="form-input border p-2"
                            value={newPersonne.nom}
                            onChange={(e) =>
                                setNewPersonne({ ...newPersonne, nom: e.target.value })
                            }
                        />
                        <input
                            type="text"
                            placeholder="Prénom"
                            className="form-input border p-2"
                            value={newPersonne.prenom}
                            onChange={(e) =>
                                setNewPersonne({ ...newPersonne, prenom: e.target.value })
                            }
                        />
                    </div>
                    <button
                        className="bg-customGold text-white px-4 py-2 rounded-md"
                        onClick={addPersonne}
                    >
                        Ajouter
                    </button>
                </div>
                <div className="flex justify-end">
                    <Button onClick={handleNextTab} disabled={activeTab === 'revenues'}>
                        Suivant
                    </Button>
                </div>
            </form>


        </div>

    )
}