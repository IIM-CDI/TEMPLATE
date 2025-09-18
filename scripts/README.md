# Scripts

Ce dossier contient les scripts de build, déploiement et maintenance.

## Scripts Courants

```
scripts/
├── build.sh             # Script de build
├── deploy.sh            # Script de déploiement
├── setup.sh             # Configuration initiale
├── backup.sh            # Sauvegarde de données
├── migrate.sh           # Migrations de base de données
└── cleanup.sh           # Nettoyage des fichiers temporaires
```

## Utilisation

```bash
# Donner les permissions d'exécution
chmod +x scripts/*.sh

# Exécuter un script
./scripts/setup.sh
```

## Bonnes Pratiques

- Scripts idempotents (peuvent être exécutés plusieurs fois)
- Gestion d'erreurs appropriée
- Logs détaillés
- Documentation des paramètres