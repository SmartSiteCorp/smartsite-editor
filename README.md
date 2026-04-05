# SmartSite Editor

**SmartSite Editor** est un éditeur de plans d'intérieur en ligne, libre et gratuit, permettant à tout développeur ou intégrateur de proposer la création de **plans de maison**, **d'appartement** ou de tout autre espace, directement dans le navigateur.

Entièrement en **JavaScript vanilla** — aucune dépendance externe hormis Bootstrap 5 et FontAwesome.

---

## Démo

> Ouvrez simplement `index.html` dans votre navigateur.

---

## Fonctionnalités

- Dessin de murs, pièces et ouvertures (portes, fenêtres)
- Glisser-déposer d'éléments (meubles, équipements)
- Zoom et panoramique à la molette
- Historique des actions (Annuler / Rétablir) via LocalStorage
- Export du plan (JSON / image)
- Interface responsive — Bootstrap 5

---

## Installation

```bash
# Cloner le dépôt
git clone https://github.com/votre-compte/smartsite-editor.git

# Ouvrir le projet
cd smartsite-editor
```

Aucune étape de build n'est nécessaire. Ouvrez `index.html` dans un navigateur moderne (Chrome, Firefox, Edge).

---

## Structure du projet

```
smartsite-editor/
├── index.html       # Point d'entrée
├── editor.js        # Logique principale de l'éditeur
├── engine.js        # Moteur de rendu SVG
├── func.js          # Fonctions utilitaires
├── qSVG.js          # Helpers SVG personnalisés
├── mousewheel.js    # Gestion du zoom/scroll
├── css/
│   └── style.css    # Styles de l'application
└── img/             # Icônes et ressources graphiques
```

---

## Technologies utilisées

| Technologie | Rôle |
|---|---|
| JavaScript (ES6+) | Logique applicative |
| SVG | Rendu du plan |
| [Bootstrap 5](https://getbootstrap.com/) | Interface utilisateur |
| [FontAwesome](https://fontawesome.com/) | Icônes |

---

## Roadmap

- [ ] Support tactile (tablette / smartphone)
- [ ] Compatibilité multi-navigateurs améliorée
- [ ] Raffinement du CSS et des comportements des boutons
- [ ] Amélioration du système d'historique (LocalStorage)
- [ ] Export vers base de données (API personnalisable)
- [ ] Internationalisation (i18n)

---

## Contribution

Les contributions sont les bienvenues !

1. Forkez le dépôt
2. Créez une branche : `git checkout -b feature/ma-fonctionnalite`
3. Committez vos changements : `git commit -m "feat: ajout de ma fonctionnalité"`
4. Poussez la branche : `git push origin feature/ma-fonctionnalite`
5. Ouvrez une Pull Request

---

## Licence

Ce projet est distribué sous licence **MIT**.

```
MIT License

Copyright (c) 2026 SmartSite Editor Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```



