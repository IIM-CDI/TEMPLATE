# 🚀 Bienvenue sur le Template de Projet !

Ce repo est là pour t'aider à bien démarrer ton projet et à adopter les bonnes pratiques dès le début. Suis ce guide pour travailler comme un(e) pro ! 😎

## 1. Création du repository GitHub 🏗️
- Choisis un nom clair et explicite pour ton repo (évite les "test" ou "projet1") !
- Ajoute une description qui explique le but du projet.
- Pense à initialiser avec un fichier README (celui-ci !) et un `.gitignore` adapté à ton techno.

### 📄 Le fichier `.gitignore` :
Le `.gitignore` sert à dire à Git quels fichiers ou dossiers il ne doit pas suivre (ne pas versionner). Par exemple, les fichiers de configuration locaux, les dossiers `node_modules`, ou les fichiers générés automatiquement.

Exemple de `.gitignore` pour un projet Node.js :
```
node_modules/
dist/
.env
```
Quand tu ajoutes un fichier ou dossier dans `.gitignore`, Git l'ignore lors des commits !

## 2. Protection des branches 🛡️
- La branche principale (`main` ou `master`) doit être protégée :
  - Interdiction de push direct dessus !
  - Passe toujours par une Pull Request (PR) pour proposer des changements.
- Si possible, active la vérification automatique (CI/CD) pour éviter les bugs.

### 🔒 Comment fonctionne la protection des branches ?
La protection empêche de modifier la branche principale sans passer par une PR. Pour la configurer :
1. Va dans les "Settings" du repo sur GitHub.
2. Clique sur "Branches" > "Branch protection rules".
3. Ajoute une règle pour `main` :
   - Exiger une PR avant de merger
   - Exiger une review
   - Bloquer le merge si des tests échouent
C'est super utile pour garder un projet propre et éviter les erreurs !

## 3. Bonnes pratiques pour les Pull Requests 🤝
- Crée une branche pour chaque nouvelle fonctionnalité ou correction de bug.
- Donne un nom explicite à ta branche (ex : `feature/login` ou `fix/navbar-bug`).
- Rédige une description claire de ta PR : explique ce que tu as fait et pourquoi.
- Demande une relecture à un(e) camarade avant de merger !
- Ne merge pas si des conflits ou des erreurs sont présents.

### ✨ Exemple de Pull Request :
**Titre** : Ajout de la page de connexion

**Description** :
> Cette PR ajoute la page de connexion avec le formulaire email/mot de passe. Elle corrige aussi un bug d'affichage sur la navbar.

**Checklist** :
- [x] Fonctionnalité testée
- [x] Pas de conflit
- [x] Code relu par un camarade

## 4. Organisation du projet 📁
- Structure bien tes dossiers :
  - `src` pour le code source
  - `docs` pour la documentation
  - `tests` pour les tests
- Utilise des noms explicites pour tes fichiers et dossiers.

> La structure dépend du type de projet, mais voici un exemple pour un projet fullstack React :
```
my-app/
├── backend/
│   ├── src/
│   ├── package.json
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│   ├── public/
│   ├── package.json
│   └── .env
├── README.md
├── .gitignore
└── tests/
```

## 5. Documentation et commentaires 📝
- Complète le README avec : objectifs, installation, utilisation.
- Commente ton code pour expliquer les parties complexes (tes camarades te remercieront !).

## 6. Utilisation des issues 📋
- Crée une issue pour chaque bug ou nouvelle fonctionnalité.
- Assigne et suis l’avancement des tâches.

## 7. Conventions de nommage ✍️
- Respecte les conventions du langage utilisé (camelCase, snake_case, etc.).
- Utilise des noms clairs pour les variables, fonctions et classes.

### 🏷️ Les conventions de nommage les plus courantes :
- **PascalCase** : `MaClasseSuperCool`
- **camelCase** : `maVariableSuperCool`
- **snake_case** : `ma_variable_super_cool`
- **kebab-case** : `ma-variable-super-cool` (surtout pour les noms de fichiers ou dossiers)

Choisis la convention adaptée à ton langage et garde-la tout au long du projet !

---

N’hésite pas à demander de l’aide ! Bonne chance et amuse-toi bien dans ton projet 🚀✨