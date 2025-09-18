# TEMPLATE - Dépôt Modèle pour Projets Sécurisés

Ce dépôt sert de modèle pour créer et configurer correctement un repository Git sécurisé et bien organisé pour la collaboration en équipe.

## 📋 Table des Matières

1. [Configuration Initiale du Dépôt](#configuration-initiale)
2. [Protection de la Branche Principale](#protection-branche-principale)
3. [Configuration des Pull Requests](#configuration-pull-requests)
4. [Organisation du Projet](#organisation-projet)
5. [Workflow de Collaboration](#workflow-collaboration)
6. [Bonnes Pratiques de Sécurité](#bonnes-pratiques-securite)
7. [Fichiers de Configuration Recommandés](#fichiers-configuration)

---

## 🚀 Configuration Initiale du Dépôt {#configuration-initiale}

### 1. Créer un nouveau dépôt à partir de ce template

1. Cliquez sur "Use this template" sur GitHub
2. Donnez un nom à votre nouveau dépôt
3. Choisissez la visibilité (public/privé)
4. Clonez votre nouveau dépôt localement :

```bash
git clone https://github.com/VOTRE-ORGANISATION/VOTRE-DEPOT.git
cd VOTRE-DEPOT
```

### 2. Configuration Git locale

```bash
# Configurer votre identité
git config user.name "Votre Nom"
git config user.email "votre.email@example.com"

# Configurer la branche par défaut
git config init.defaultBranch main
```

---

## 🛡️ Protection de la Branche Principale {#protection-branche-principale}

La protection de la branche `main` est cruciale pour maintenir la qualité et la sécurité du code.

### Configuration sur GitHub

1. **Accéder aux paramètres du dépôt :**
   - Allez dans `Settings` > `Branches`

2. **Créer une règle de protection :**
   - Cliquez sur "Add rule"
   - Branch name pattern : `main`

3. **Options recommandées à activer :**

   ✅ **Restrict pushes that create files larger than 100 MB**
   - Empêche l'ajout de gros fichiers par accident

   ✅ **Require a pull request before merging**
   - Force l'utilisation de pull requests
   - Sous-options recommandées :
     - ✅ Require approvals (minimum 1-2 reviewers)
     - ✅ Dismiss stale PR approvals when new commits are pushed
     - ✅ Require review from code owners

   ✅ **Require status checks to pass before merging**
   - Assure que les tests passent avant le merge
   - ✅ Require branches to be up to date before merging

   ✅ **Require conversation resolution before merging**
   - Force la résolution de tous les commentaires

   ✅ **Require signed commits** (optionnel mais recommandé)
   - Augmente la sécurité avec des commits signés

   ✅ **Include administrators**
   - Applique les règles même aux administrateurs

4. **Sauvegarder la règle**

### Vérification de la protection

```bash
# Tenter un push direct (devrait échouer)
git push origin main
# Erreur attendue : remote: error: GH006: Protected branch update failed
```

---

## 🔄 Configuration des Pull Requests {#configuration-pull-requests}

### Création d'une Pull Request

1. **Créer une nouvelle branche :**
```bash
# Créer et basculer vers une nouvelle branche
git checkout -b feature/nouvelle-fonctionnalite

# Ou avec la commande moderne
git switch -c feature/nouvelle-fonctionnalite
```

2. **Effectuer vos modifications :**
```bash
# Ajouter vos fichiers modifiés
git add .
git commit -m "feat: ajouter nouvelle fonctionnalité

- Description détaillée des changements
- Impact sur le système
- Tests ajoutés/modifiés"
```

3. **Pousser la branche :**
```bash
git push origin feature/nouvelle-fonctionnalite
```

4. **Créer la Pull Request sur GitHub :**
   - GitHub proposera automatiquement de créer une PR
   - Remplir le titre et la description
   - Assigner des reviewers
   - Ajouter des labels appropriés

### Template de Pull Request

Créez un fichier `.github/pull_request_template.md` :

```markdown
## 📝 Description

Décrivez brièvement les changements apportés.

## 🔧 Type de changement

- [ ] Bug fix (changement qui corrige un problème)
- [ ] Nouvelle fonctionnalité (changement qui ajoute une fonctionnalité)
- [ ] Breaking change (changement qui casse la compatibilité)
- [ ] Documentation (changement de documentation uniquement)

## ✅ Checklist

- [ ] Mon code suit les conventions de style du projet
- [ ] J'ai effectué une auto-review de mon code
- [ ] J'ai commenté mon code dans les parties difficiles à comprendre
- [ ] J'ai mis à jour la documentation si nécessaire
- [ ] Mes changements ne génèrent pas de nouveaux warnings
- [ ] J'ai ajouté des tests qui prouvent que mon fix fonctionne
- [ ] Les tests nouveaux et existants passent tous

## 🧪 Tests

Décrivez les tests que vous avez effectués.

## 📸 Screenshots (si applicable)

Ajoutez des captures d'écran pour illustrer les changements visuels.
```

### Workflow de Review

1. **Assignation automatique :**
   - Configurer CODEOWNERS dans `.github/CODEOWNERS`
   - Exemple :
   ```
   # Global owners
   * @team-lead @senior-dev
   
   # Frontend owners
   /src/frontend/ @frontend-team
   
   # Backend owners
   /src/backend/ @backend-team
   
   # Documentation owners
   *.md @documentation-team
   ```

2. **Process de review :**
   - Le reviewer examine le code
   - Laisse des commentaires constructifs
   - Approuve ou demande des changements
   - L'auteur répond aux commentaires et effectue les corrections

3. **Merge de la PR :**
   - Une fois approuvée et les checks passés
   - Choisir le type de merge approprié :
     - **Squash and merge** : recommandé pour garder un historique propre
     - **Rebase and merge** : pour préserver l'historique des commits
     - **Create a merge commit** : pour les grosses features

---

## 📁 Organisation du Projet {#organisation-projet}

Une structure claire et cohérente facilite la collaboration et la maintenance.

### Structure Recommandée

```
votre-projet/
├── .github/                    # Configuration GitHub
│   ├── workflows/             # GitHub Actions
│   ├── ISSUE_TEMPLATE/        # Templates d'issues
│   ├── pull_request_template.md
│   └── CODEOWNERS
├── docs/                      # Documentation
│   ├── api/                   # Documentation API
│   ├── guides/                # Guides utilisateur
│   └── architecture/          # Documentation technique
├── src/                       # Code source
│   ├── components/            # Composants réutilisables
│   ├── services/              # Services métier
│   ├── utils/                 # Utilitaires
│   ├── types/                 # Définitions de types
│   └── tests/                 # Tests unitaires
├── public/                    # Assets publics
├── config/                    # Fichiers de configuration
├── scripts/                   # Scripts de build/deploy
├── .env.example              # Exemple de variables d'environnement
├── .gitignore                # Fichiers à ignorer
├── .eslintrc.js              # Configuration ESLint
├── .prettierrc               # Configuration Prettier
├── package.json              # Dépendances et scripts
├── README.md                 # Documentation principale
└── CONTRIBUTING.md           # Guide de contribution
```

### Principes d'Organisation

1. **Séparation des préoccupations :**
   - Un dossier = une responsabilité
   - Séparer la logique métier de la présentation
   - Isoler les utilitaires et helpers

2. **Nommage cohérent :**
   - Utiliser des noms explicites et en anglais
   - Convention camelCase pour les fichiers JS/TS
   - Convention kebab-case pour les composants Vue/React
   - Convention snake_case pour les fichiers de configuration

3. **Modularité :**
   - Créer des modules réutilisables
   - Éviter les dépendances circulaires
   - Favoriser la composition over inheritance

4. **Documentation :**
   - README.md à la racine de chaque dossier important
   - Comments dans le code pour les parties complexes
   - Documentation API séparée

### Exemples de Structure par Type de Projet

#### Projet Frontend (React/Vue)
```
src/
├── components/
│   ├── common/               # Composants réutilisables
│   ├── layout/               # Composants de mise en page
│   └── pages/                # Composants de pages
├── hooks/                    # Custom hooks (React)
├── stores/                   # State management
├── services/                 # Appels API
├── assets/                   # Images, fonts, etc.
└── styles/                   # Styles globaux
```

#### Projet Backend (Node.js)
```
src/
├── controllers/              # Contrôleurs de routes
├── models/                   # Modèles de données
├── services/                 # Logique métier
├── middleware/               # Middlewares Express
├── routes/                   # Définition des routes
├── config/                   # Configuration
└── database/                 # Migrations, seeders
```

---

## 🔄 Workflow de Collaboration {#workflow-collaboration}

### Git Flow Simplifié

1. **Branche principale :** `main`
   - Code stable et déployable
   - Protégée contre les push directs

2. **Branches de feature :** `feature/nom-fonctionnalite`
   - Une branche par fonctionnalité
   - Nommage descriptif

3. **Branches de bugfix :** `bugfix/nom-du-bug`
   - Pour corriger des bugs

4. **Branches de hotfix :** `hotfix/nom-du-hotfix`
   - Pour des correctifs urgents en production

### Conventions de Commit

Utiliser la convention [Conventional Commits](https://www.conventionalcommits.org/) :

```
<type>[scope optionnel]: <description>

[corps optionnel]

[footer optionnel]
```

**Types de commits :**
- `feat`: nouvelle fonctionnalité
- `fix`: correction de bug
- `docs`: changements de documentation
- `style`: changements de formatage (espaces, points-virgules, etc.)
- `refactor`: refactoring de code
- `test`: ajout ou modification de tests
- `chore`: tâches de maintenance

**Exemples :**
```bash
git commit -m "feat(auth): ajouter authentification OAuth2"
git commit -m "fix(api): corriger la validation des emails"
git commit -m "docs: mettre à jour le README avec les nouvelles instructions"
```

### Processus de Collaboration

1. **Synchronisation :**
```bash
# Récupérer les dernières modifications
git fetch origin
git checkout main
git pull origin main
```

2. **Création de branche :**
```bash
git checkout -b feature/ma-nouvelle-fonctionnalite
```

3. **Développement :**
   - Commits fréquents avec messages clairs
   - Tests au fur et à mesure
   - Push régulier de la branche

4. **Pull Request :**
   - Description claire des changements
   - Assignment des reviewers appropriés
   - Résolution des conflits si nécessaire

5. **Review et Merge :**
   - Review par les pairs
   - Corrections si nécessaire
   - Merge une fois approuvé

6. **Nettoyage :**
```bash
# Après merge, supprimer la branche locale
git checkout main
git pull origin main
git branch -d feature/ma-nouvelle-fonctionnalite

# Supprimer la branche distante
git push origin --delete feature/ma-nouvelle-fonctionnalite
```

---

## 🔒 Bonnes Pratiques de Sécurité {#bonnes-pratiques-securite}

### 1. Gestion des Secrets

❌ **À ÉVITER :**
```javascript
// Ne JAMAIS committer des secrets
const API_KEY = "sk-1234567890abcdef";
const DATABASE_URL = "postgresql://user:password@localhost:5432/db";
```

✅ **RECOMMANDÉ :**
```javascript
// Utiliser des variables d'environnement
const API_KEY = process.env.API_KEY;
const DATABASE_URL = process.env.DATABASE_URL;
```

### 2. Fichier .env et .env.example

**Créer un `.env.example` :**
```env
# Configuration de base
NODE_ENV=development
PORT=3000

# Base de données
DATABASE_URL=postgresql://username:password@localhost:5432/database_name

# APIs externes
API_KEY=your_api_key_here
SECRET_KEY=your_secret_key_here
```

**Ajouter .env au .gitignore :**
```gitignore
# Fichiers d'environnement
.env
.env.local
.env.production
```

### 3. Commits Signés

Configurer la signature GPG :
```bash
# Générer une clé GPG
gpg --gen-key

# Lister les clés
gpg --list-secret-keys --keyid-format LONG

# Configurer Git
git config --global user.signingkey YOUR_GPG_KEY_ID
git config --global commit.gpgsign true
```

### 4. Scan de Sécurité

Activer les outils de sécurité GitHub :
- **Dependabot** : mise à jour automatique des dépendances
- **CodeQL** : analyse statique du code
- **Secret scanning** : détection de secrets commités

### 5. Permissions et Accès

- Principe du moindre privilège
- Review régulier des accès
- Utilisation de tokens avec scope limité
- Rotation régulière des clés API

---

## ⚙️ Fichiers de Configuration Recommandés {#fichiers-configuration}

### .gitignore

```gitignore
# Dépendances
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Production
/dist
/build

# Environnement
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE
.vscode/
.idea/
*.swp
*.swo
*~

# OS
.DS_Store
Thumbs.db

# Logs
logs
*.log

# Cache
.cache/
.parcel-cache/
.next/
.nuxt/

# Coverage
coverage/
.nyc_output/

# Temporary files
tmp/
temp/
```

### .editorconfig

```ini
root = true

[*]
charset = utf-8
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
indent_style = space
indent_size = 2

[*.md]
trim_trailing_whitespace = false

[*.{yml,yaml}]
indent_size = 2

[*.py]
indent_size = 4
```

### GitHub Actions - CI/CD

Créer `.github/workflows/ci.yml` :

```yaml
name: CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    strategy:
      matrix:
        node-version: [16.x, 18.x, 20.x]
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'
    
    - run: npm ci
    - run: npm run build --if-present
    - run: npm test
    - run: npm run lint
    
    - name: Upload coverage to Codecov
      uses: codecov/codecov-action@v3
      if: matrix.node-version == '18.x'
```

---

## 📚 Ressources Supplémentaires

- [Git Documentation Officielle](https://git-scm.com/doc)
- [GitHub Docs](https://docs.github.com/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [GitFlow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
- [Sécurité GitHub](https://docs.github.com/en/code-security)

---

## 🤝 Contribution

Pour contribuer à ce template :

1. Fork le dépôt
2. Créer une branche feature (`git checkout -b feature/amelioration`)
3. Commit vos changements (`git commit -m 'feat: ajouter amélioration'`)
4. Push vers la branche (`git push origin feature/amelioration`)
5. Créer une Pull Request

---

## 📄 Licence

Ce template est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---

**💡 Conseil :** Adaptez ce template selon les besoins spécifiques de votre projet et de votre équipe. La sécurité et l'organisation sont des processus évolutifs qui s'améliorent avec l'expérience et les retours d'équipe.
