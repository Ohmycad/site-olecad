# CLAUDE.md : site olecad.com

Mode d'emploi pour un agent IA (Claude Code, Cursor...) qui modifie ce site. Le lire avant toute modification.

## Le site
- Site de OléCAD, membre du réseau Ohmycad. Langue : espagnol (portugais en option sur l'accueil).
- Générateur : Eleventy 2 (`npm run build` → `_site/`, `npm run serve` pour prévisualiser en local).
- Hébergement : GitHub Pages (dépôt public `Ohmycad/site-olecad`, workflow `.github/workflows/pages.yml`). **Chaque push sur `main` met le site en ligne en 1 à 2 minutes** (onglet Actions du dépôt pour suivre la publication).
- Accueil : src/index.html (page unique en espagnol) + src/i18n.js (traductions portugaises, clé par clé).
- Pages légales : src/aviso-legal.html (aviso legal + section Privacidad y cookies, servie sans .html).
- Scripts : src/app.js (constante OLE_FORM), src/consent.js, src/lead-form.js.

## Publier un article de blog
1. Créer `src/blog/<slug-court>.md` avec cet en-tête :
   ```
   ---
   title: "Titre de l'article"
   date: AAAA-MM-JJ
   category: "SOLIDWORKS"
   excerpt: "Une ou deux phrases, reprises dans la liste du blog et par Google."
   author: "Equipo OléCAD"
   cover: "/assets/img/blog/nom-image.webp"   # optionnel
   ---
   ```
2. Écrire le corps en Markdown (intertitres `##`, paragraphes courts, liens vers `/#contact` pour la prise de rendez-vous).
3. Images : `src/assets/img/blog/`, en .webp de préférence, moins de 300 Ko.
4. `npm run build` pour vérifier qu'il n'y a pas d'erreur, puis commit et push sur `main`.
L'article apparaît sur /blog/, dans sa catégorie et dans le sitemap automatiquement.

## Règles à ne jamais enfreindre
- **Aucun prix Dassault Systèmes** sur le site (licences, rôles, remises), sauf Ohmycare à 50 € par mois.
- **Mention réseau** : uniquement celle-ci, ne pas la reformuler en « n°1 Dassault Systèmes » ni l'attribuer à OléCAD :
  « OléCAD se apoya en Ohmycad, red especializada en 3DEXPERIENCE y primer revendedor de 3DEXPERIENCE del mundo en 2025: tienes un interlocutor local, con la fuerza de una red mundial. »
- **Pas d'avis, de note ni de témoignage** qui ne soient pas ceux de OléCAD (les avis Google d'Ohmycad ne sont pas ceux du partner).
- **Ne pas toucher** au formulaire de contact (formulaire HubSpot `2d4abc8c-a319-4faf-86f2-019262870e1e`, qui notifie Arthur Dussaubat et Léo Cosnier), à `consent.js` (bandeau cookies, HubSpot ne se charge qu'après « Accepter ») ni à `lead-form.js`.
- **Ne pas supprimer ni vider** les pages légales.
- Pas d'ajout de traceur, pixel ou script tiers sans passer par le bandeau de consentement.
- Tout texte de l'accueil portant un attribut data-i18n a sa traduction portugaise dans src/i18n.js : modifier les deux.
- Les articles de blog s'écrivent en espagnol.

## En cas de doute
Ne rien publier et demander à Ohmycad (Victor Roux).
