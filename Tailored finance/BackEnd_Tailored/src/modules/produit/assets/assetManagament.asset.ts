const contrat=[
{
    type:"Cardif",
    critere:["Sécurisé","Equilibré","Dynamique"]
},
{
    type:"Abeille",
    critere:["Sécurisé","Equilibré","Dynamique"]
},
{
    type:"SwissLife",
    critere:["Sécurisé","Equilibré","Dynamique"]
}
]

const AssetManagementProduct=
{
    product:{
        nom:"Asset Management",
        categorie:
        [
            {
                nom:"Assurance Vie",
                sousCategorie:contrat
            },
            {
                nom:"Plan D'epargne Retraite",
                sousCategorie:contrat
            },
            {
                nom:"PEA",
                sousCategorie:contrat
            },
        ]
    }
}

export default AssetManagementProduct;
