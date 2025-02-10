import { Trash2, Edit } from "lucide-react";
import { useState } from "react";

export default function TableDynamic({ title, data, setData, fields }) {
    const [newEntry, setNewEntry] = useState({});

    const addEntry = (e) => {
        e.preventDefault();
        const isValid = Object.values(newEntry).every((value) => value.trim() !== "");
        if (!isValid) {
            alert("Veuillez remplir tous les champs avant d'ajouter une nouvelle entrée.");
            return;
        }
        setData((prevData) => [...prevData, { ...newEntry, id: prevData.length + 1 }]);
        setNewEntry({});
    };

    const removeEntry = (id) => {
        setData((prevData) => prevData.filter((entry) => entry.id !== id));
    };

    return (
        <div className="space-y-6">
            <h2 className="text-lg font-bold text-customBLUE">{title}</h2>
            <table className="table-auto w-full border border-gray-300 rounded-lg">
                <thead>
                    <tr className="bg-gray-100 text-sm font-medium">
                        {fields.map((field) => (
                            <th key={field} className="p-2 text-left">
                                {field}
                            </th>
                        ))}
                        <th className="p-2 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((entry) => (
                        <tr key={entry.id} className="text-sm border-t">
                            {fields.map((field) => (
                                <td key={field} className="p-2">
                                    {entry[field.toLowerCase()]}
                                </td>
                            ))}
                            <td className="p-2 flex justify-center space-x-2">
                                <button
                                    className="text-red-600"
                                    onClick={() => removeEntry(entry.id)}
                                >
                                    <Trash2 size={18} />
                                </button>
                                <button className="text-blue-600">
                                    <Edit size={18} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="space-y-4">
                <h3 className="text-md font-bold text-customBLUE">Ajouter une entrée</h3>
                <div className="grid grid-cols-3 gap-4">
                    {fields.map((field) => (
                        <input
                            key={field}
                            type={field.toLowerCase().includes("date") ? "date" : "text"}
                            placeholder={field}
                            className="form-input"
                            value={newEntry[field.toLowerCase()] || ""}
                            onChange={(e) =>
                                setNewEntry({ ...newEntry, [field.toLowerCase()]: e.target.value })
                            }
                        />
                    ))}
                </div>
                <button
                    type="button"
                    className="bg-customGold text-white px-4 py-2 rounded-md"
                    onClick={addEntry}
                >
                    Ajouter
                </button>
            </div>
        </div>
    );
}
