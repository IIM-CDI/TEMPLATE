# Guide de Contribution

Merci de votre intérêt pour contribuer à ce projet ! Ce guide vous aidera à comprendre comment participer efficacement.

## 🚀 Démarrage Rapide

1. **Fork** le dépôt
2. **Clone** votre fork localement
3. **Créer** une branche pour votre contribution
4. **Effectuer** vos changements
5. **Tester** vos modifications
6. **Commit** avec un message descriptif
7. **Push** vers votre fork
8. **Créer** une Pull Request

## 📋 Types de Contributions

Nous accueillons plusieurs types de contributions :

- 🐛 **Corrections de bugs**
- ✨ **Nouvelles fonctionnalités**
- 📚 **Améliorations de documentation**
- 🧪 **Ajout de tests**
- 🔧 **Améliorations d'infrastructure**
- 🎨 **Améliorations UX/UI**

## 🛠️ Configuration de l'Environnement de Développement

```bash
# Cloner le dépôt
git clone https://github.com/IIM-CDI/TEMPLATE.git
cd TEMPLATE

# Installer les dépendances (si applicable)
npm install

# Copier le fichier d'environnement
cp .env.example .env

# Lancer les tests
npm test

# Lancer le projet en mode développement
npm run dev
```

## 📝 Conventions de Code

### Style de Code

- Utilisez **2 espaces** pour l'indentation
- Suivez les règles **ESLint** configurées
- Utilisez **Prettier** pour le formatage automatique
- Commentez le code complexe en **français** ou **anglais**

### Conventions de Nommage

```javascript
// Variables et fonctions : camelCase
const userName = 'john';
function getUserData() {}

// Constantes : UPPER_SNAKE_CASE
const API_ENDPOINT = 'https://api.example.com';

// Classes : PascalCase
class UserService {}

// Fichiers : kebab-case
user-service.js
auth-middleware.js
```

### Conventions de Commit

Nous utilisons la convention [Conventional Commits](https://www.conventionalcommits.org/) :

```
<type>[scope optionnel]: <description>

[corps optionnel]

[footer optionnel]
```

**Types de commits :**
- `feat`: nouvelle fonctionnalité
- `fix`: correction de bug
- `docs`: changements de documentation
- `style`: changements de formatage
- `refactor`: refactoring sans changement de fonctionnalité
- `test`: ajout ou modification de tests
- `chore`: tâches de maintenance

**Exemples :**
```bash
feat(auth): ajouter authentification OAuth2
fix(api): corriger la validation des emails
docs: mettre à jour le guide d'installation
test(user): ajouter tests unitaires pour UserService
```

## 🔄 Processus de Pull Request

### Avant de Créer une PR

1. ✅ Assurez-vous que tous les tests passent
2. ✅ Vérifiez que le code suit les conventions
3. ✅ Mettez à jour la documentation si nécessaire
4. ✅ Ajoutez des tests pour les nouvelles fonctionnalités
5. ✅ Vérifiez qu'il n'y a pas de conflits avec main

### Créer une Pull Request

1. **Titre descriptif** : utilisez les conventions de commit
2. **Description détaillée** : expliquez le "pourquoi" et le "comment"
3. **Lier les issues** : utilisez "Fixes #123" ou "Closes #123"
4. **Assignez des reviewers** appropriés
5. **Ajoutez des labels** pertinents

### Template de PR

Votre PR sera automatiquement créée avec un template. Assurez-vous de :

- [ ] Remplir toutes les sections du template
- [ ] Cocher toutes les cases de la checklist
- [ ] Ajouter des captures d'écran si pertinent
- [ ] Lier les issues associées

## 🧪 Tests

### Lancer les Tests

```bash
# Tous les tests
npm test

# Tests en mode watch
npm run test:watch

# Tests avec coverage
npm run test:coverage

# Tests e2e
npm run test:e2e
```

### Écrire des Tests

- **Tests unitaires** : pour les fonctions et composants isolés
- **Tests d'intégration** : pour les interactions entre modules
- **Tests e2e** : pour les workflows utilisateur complets

```javascript
// Exemple de test unitaire
describe('UserService', () => {
  it('should return user data when valid ID provided', () => {
    // Arrange
    const userId = '123';
    const expectedUser = { id: '123', name: 'John' };
    
    // Act
    const result = UserService.getUser(userId);
    
    // Assert
    expect(result).toEqual(expectedUser);
  });
});
```

## 🚨 Signalement de Problèmes

### Avant de Signaler un Bug

1. ✅ Vérifiez les issues existantes
2. ✅ Testez avec la dernière version
3. ✅ Reproduisez le problème plusieurs fois
4. ✅ Collectez les informations d'environnement

### Créer un Bug Report

Utilisez le template de bug report qui inclut :

- **Description** claire du problème
- **Étapes de reproduction** détaillées
- **Comportement attendu** vs **comportement actuel**
- **Informations d'environnement**
- **Captures d'écran** ou logs si pertinent

## 💡 Suggérer une Fonctionnalité

### Avant de Suggérer

1. ✅ Vérifiez que la fonctionnalité n'existe pas déjà
2. ✅ Recherchez dans les issues existantes
3. ✅ Réfléchissez aux alternatives
4. ✅ Considérez l'impact sur les utilisateurs existants

### Créer une Feature Request

Utilisez le template de feature request qui inclut :

- **Problème à résoudre**
- **Solution proposée**
- **Alternatives considérées**
- **Priorité** estimée
- **Contexte supplémentaire**

## 🏷️ Labels et Organisation

### Labels de Type
- `bug` : problèmes à corriger
- `enhancement` : améliorations
- `feature-request` : nouvelles fonctionnalités
- `documentation` : changements de docs
- `question` : questions et discussions

### Labels de Priorité
- `priority: critical` : problèmes bloquants
- `priority: high` : problèmes importants
- `priority: medium` : problèmes normaux
- `priority: low` : améliorations mineures

### Labels de Statut
- `status: triage` : en attente de classification
- `status: in-progress` : en cours de développement
- `status: review` : en review
- `status: blocked` : bloqué

## 👥 Code Review

### En tant qu'Auteur

- 📝 **Description claire** : expliquez vos changements
- 🧪 **Tests inclus** : ajoutez des tests appropriés
- 📖 **Documentation** : mettez à jour si nécessaire
- 💬 **Réponse aux commentaires** : soyez réactif et constructif

### En tant que Reviewer

- 🎯 **Focus sur le code** : pas sur l'auteur
- 💡 **Suggestions constructives** : proposez des améliorations
- ✅ **Vérifiez la logique** : assurez-vous que ça fonctionne
- 📚 **Vérifiez la documentation** : est-elle à jour ?

### Critères de Review

- [ ] Le code suit les conventions du projet
- [ ] Les tests sont présents et passent
- [ ] La documentation est mise à jour
- [ ] Pas de régression introduite
- [ ] Sécurité : pas de vulnérabilités évidentes
- [ ] Performance : pas d'impact négatif majeur

## 🛡️ Sécurité

### Signaler une Vulnérabilité

Si vous découvrez une vulnérabilité de sécurité :

1. **NE PAS** créer une issue publique
2. **Envoyer** un email à security@example.com
3. **Inclure** une description détaillée
4. **Attendre** notre réponse avant divulgation

### Bonnes Pratiques

- Ne jamais committer de secrets (API keys, mots de passe)
- Utiliser des variables d'environnement
- Valider toutes les entrées utilisateur
- Suivre les principes OWASP

## 📞 Obtenir de l'Aide

- 💬 **Discussions GitHub** : pour les questions générales
- 🐛 **Issues** : pour les bugs et feature requests
- 📧 **Email** : contact@example.com
- 💬 **Chat** : [Discord/Slack link]

## 📄 Licence

En contribuant, vous acceptez que vos contributions soient sous la même licence que le projet (MIT License).

---

**Merci de contribuer !** 🎉

Votre participation aide à améliorer ce projet pour toute la communauté.