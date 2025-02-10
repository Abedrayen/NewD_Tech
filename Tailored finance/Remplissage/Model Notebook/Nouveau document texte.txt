import json
from docx import Document
from gpt4all import GPT4All

# Initialiser GPT4All (ici, on utilise le modèle "gpt4all-j")
gpt = GPT4All("gpt4all-j")  # Vous pouvez spécifier un chemin ou un autre nom de modèle si besoin

def load_json(file_path):
    """Charge un fichier JSON contenant les données ou prompts."""
    with open(file_path, 'r', encoding='utf-8') as f:
        return json.load(f)

def query_local_gpt(prompt):
    """Interroge le modèle GPT4All local en lui envoyant un prompt et retourne la réponse générée."""
    try:
        response = gpt.generate(prompt)
        return response.strip()
    except Exception as e:
        print(f"Erreur GPT4All : {e}")
        return "Erreur : Impossible de générer une réponse."

def fill_document(doc, data):
    """
    Parcourt les paragraphes du document et recherche les champs dynamiques délimités par { }.
    Pour chaque champ :
      - Si une donnée existe dans le JSON, on l’utilise.
      - Sinon, on génère une réponse via GPT4All en fournissant le contexte JSON.
    Puis, le paragraphe est remplacé par la valeur obtenue.
    """
    for paragraph in doc.paragraphs:
        if "{" in paragraph.text and "}" in paragraph.text:
            # Extraire le nom du champ en retirant les accolades et les espaces superflus.
            field_name = paragraph.text.strip("{}").strip()
            if field_name in data:
                # Utilisation de la donnée présente dans le JSON
                value = data[field_name]
            else:
                # Construction d'un prompt pour GPT4All en indiquant le champ et le contexte
                prompt = f"Complétez ce champ : {field_name}. Contexte : {json.dumps(data)}"
                value = query_local_gpt(prompt)
            # Remplacer le contenu du paragraphe par la valeur générée ou extraite
            paragraph.text = value
            print(f"Remplissage : {field_name} -> {value}")

    # Sauvegarder le document modifié
    doc.save("Document_Rempli.docx")
    print("Document sauvegardé : 'Document_Rempli.docx'")

if __name__ == "__main__":
    # Définir les chemins vers les fichiers
    json_file_path = "data.json"                      # Fichier JSON contenant vos données
    doc_file_path = "Document_Connaissance_Client.docx"  # Document Word avec les champs {champ}

    # Charger les données JSON et le document Word
    data = load_json(json_file_path)
    doc = Document(doc_file_path)

    # Remplir le document avec les données ou les réponses générées par GPT4All
    fill_document(doc, data)
