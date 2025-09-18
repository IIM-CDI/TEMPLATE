# Configuration

Ce dossier contient les fichiers de configuration pour différents environnements et services.

## Structure

```
config/
├── database.js          # Configuration base de données
├── redis.js             # Configuration Redis
├── email.js             # Configuration email
├── storage.js           # Configuration stockage (S3, etc.)
└── environments/
    ├── development.js   # Config développement
    ├── staging.js       # Config staging
    └── production.js    # Config production
```

## Sécurité

⚠️ **Important** : Ne jamais committer de secrets dans ces fichiers !

- Utiliser des variables d'environnement
- Fournir des exemples avec des valeurs par défaut
- Documenter chaque paramètre de configuration