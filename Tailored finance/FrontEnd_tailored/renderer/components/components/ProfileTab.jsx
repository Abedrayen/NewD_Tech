import { useState } from "react";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";

export default function ProfileTab({ state, dispatch, handleNextTab, activeTab }) {
  const [newObjectif, setNewObjectif] = useState({
    objectif: "",
    priorite: "",
    horizon: "",
    status: "",
  });

  const addObjectif = () => {
    if (newObjectif.objectif && newObjectif.priorite && newObjectif.horizon && newObjectif.status) {
      dispatch({ type: "ADD_ITEM", field: "objectif_clients", item: newObjectif });
      setNewObjectif({ objectif: "", priorite: "", horizon: "", status: "" });
    } else {
      alert("Please fill in all required fields.");
    }
  };

  const removeObjectif = (index) => {
    dispatch({ type: "REMOVE_ITEM", field: "objectif_clients", index });
  };

  return (
    <div className="overflow-y-auto p-4">
      <form className="space-y-6">
        {/* Profil Client Section */}
        <h2 className="text-lg font-bold text-customBLUE">Profil Client</h2>
        

        {/* Objectifs Clients Section */}
        <h2 className="text-lg font-bold text-customBLUE">Objectifs Clients</h2>
        <div className="space-y-4">
          <div className="grid grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Objectif"
              className="form-input border p-2"
              value={newObjectif.objectif}
              onChange={(e) => setNewObjectif({ ...newObjectif, objectif: e.target.value })}
            />
            <input
              type="number"
              placeholder="Priorité"
              className="form-input border p-2"
              value={newObjectif.priorite}
              onChange={(e) => setNewObjectif({ ...newObjectif, priorite: e.target.value })}
            />
            <input
              type="number"
              placeholder="Horizon"
              className="form-input border p-2"
              value={newObjectif.horizon}
              onChange={(e) => setNewObjectif({ ...newObjectif, horizon: e.target.value })}
            />
            <select
              className="form-input border p-2"
              value={newObjectif.status}
              onChange={(e) => setNewObjectif({ ...newObjectif, status: e.target.value })}
            >
              <option value="terminée">Terminé</option>
              <option value="en cours">En cours</option>
              <option value="inactif">Inactif</option>
            </select>
          </div>
          <button
            type="button"
            className="bg-customGold text-white px-4 py-2 rounded-md"
            onClick={addObjectif}
          >
            Ajouter Objectif
          </button>
        </div>

        {/* Objectifs Clients Table */}
        <div className="space-y-4 mt-6">
          <h3 className="text-md font-bold text-customBLUE">Objectifs Clients Ajoutés</h3>
          <table className="table-auto w-full border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-100 text-sm font-medium">
                <th className="p-2 text-left">Objectif</th>
                <th className="p-2 text-left">Priorité</th>
                <th className="p-2 text-left">Horizon</th>
                <th className="p-2 text-left">Status</th>
                <th className="p-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {state.objectif_clients.map((item, index) => (
                <tr key={index} className="text-sm border-t">
                  <td className="p-2">{item.objectif}</td>
                  <td className="p-2">{item.priorite}</td>
                  <td className="p-2">{item.horizon}</td>
                  <td className="p-2">{item.status}</td>
                  <td className="p-2 flex justify-center space-x-2">
                    <button
                      className="text-red-600"
                      onClick={() => removeObjectif(index)}
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end items-end">
          <Button onClick={handleNextTab} disabled={activeTab === "revenues"}>
            Suivant
          </Button>
        </div>
      </form>
    </div>
  );
}
