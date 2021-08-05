# Backend-end
Backend-end nodejs de l'application qui effectue des recherches sur des  documents indexés sur elasticsearch  

## Installer les dépendances 
```
npm install
```
## Fichier d'environement
créer un fichier d'environnement (.env)
```
touch .env
```
Ajouter ces variables dans le fichier
```
ELASTICSEARCH_HOST=adresse_de_votre_service_elasticsearch
INDEX_NAME=nom_de_votre_index

```

### Lancer l'applciation sur un serveur
```
nodemon ./src/app.js
```

