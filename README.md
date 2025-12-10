# 🍹 Menu Mille Mercis 2026

Application mobile pour consulter le menu du restaurant Mille Mercis.

## 🚀 Déploiement sur GitHub Pages

### Étape 1 : Créer un repository GitHub

1. Allez sur [github.com](https://github.com) et connectez-vous
2. Cliquez sur **"New repository"** (bouton vert)
3. Nommez-le `menu-mille-mercis`
4. Laissez-le **Public**
5. Ne cochez **rien** (pas de README, pas de .gitignore)
6. Cliquez sur **"Create repository"**

### Étape 2 : Modifier le fichier package.json

Ouvrez `package.json` et remplacez `VOTRE_USERNAME` par votre nom d'utilisateur GitHub :

```json
"homepage": "https://VOTRE_USERNAME.github.io/menu-mille-mercis"
```

Par exemple, si votre username est `mohamedali` :
```json
"homepage": "https://mohamedali.github.io/menu-mille-mercis"
```

### Étape 3 : Uploader et déployer

**Option A - Via ligne de commande (recommandé) :**

```bash
# 1. Décompressez le fichier ZIP téléchargé
# 2. Ouvrez un terminal dans le dossier du projet
# 3. Exécutez ces commandes :

npm install
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/VOTRE_USERNAME/menu-mille-mercis.git
git push -u origin main
npm run deploy
```

**Option B - Via GitHub Desktop :**

1. Téléchargez [GitHub Desktop](https://desktop.github.com/)
2. File > Add local repository > choisissez le dossier du projet
3. Commit et Push vers GitHub
4. Puis dans le terminal : `npm install && npm run deploy`

### Étape 4 : Configurer GitHub Pages

1. Allez sur votre repository GitHub
2. Settings > Pages
3. Source : **Deploy from a branch**
4. Branch : **gh-pages** / **(root)**
5. Cliquez **Save**

### ✅ Votre application sera disponible à :

```
https://VOTRE_USERNAME.github.io/menu-mille-mercis
```

(Attendez 2-3 minutes après le déploiement)

---

## 📱 Fonctionnalités

- ✨ Design élégant et moderne
- 🍹 **Boissons** : Chaudes, Froides, Thés, Jus, Cocktails, Smoothies
- 🍫 **Sucré** : Crêpes, Pancakes, Pain Perdu
- 🧀 **Salé** : Omelettes, Croissants, Toasts
- 🍽️ **Plats & Salades**
- 🌅 **Petit Déjeuner & Brunch**
- 🔍 Recherche dans chaque catégorie
- 📱 Responsive et optimisé mobile

## 🛠️ Développement local

```bash
npm install
npm start
```

L'application sera accessible sur `http://localhost:3000`

---

Fait avec ❤️ pour Mille Mercis
