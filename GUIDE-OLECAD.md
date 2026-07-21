# OléCAD — Site + Blog : mise en route (Eleventy + Decap CMS)

Ce projet = **ton site olecad.com actuel, inchangé** + un **blog** à la DA olecad, avec un éditeur en ligne (Decap CMS). Gratuit, hébergé chez toi (GitHub + Netlify).

## 1. Mettre le projet sur GitHub
1. Crée un dépôt **`olecad-website`** (Private) sur le compte GitHub olecad.
2. Décompresse ce zip et pousse **tout le contenu** dans le dépôt (via « uploading an existing file » ou git). N'inclus pas `node_modules/` ni `_site/`.

## 2. Régler le fichier de l'éditeur
Ouvre `src/admin/config.yml`, ligne :
```
  repo: TU-USUARIO-GITHUB/olecad-website
```
Remplace `TU-USUARIO-GITHUB` par ton compte GitHub (ex. `olecad/olecad-website`). Commit.

## 3. Connecter le dépôt à ton Netlify olecad (ta question)
Ton projet Netlify olecad est actuellement en **Netlify Drop** (glisser-dépôt). Pour le passer en build automatique depuis GitHub, sur le **même projet** (tu gardes olecad.com dessus) :
1. **Project configuration → Build & deploy → Continuous deployment**
2. Bouton **Link repository** → **GitHub** → autorise → choisis `olecad-website`
3. **Build command** = `npm run build` · **Publish directory** = `_site`
4. **Save / Deploy**

À partir de là, chaque commit GitHub redéploie tout seul, et `/admin` fonctionne.

## 4. Activer l'éditeur (connexion GitHub, gratuit)
1. **GitHub → Settings → Developers → OAuth Apps → New OAuth App**
   - Homepage : `https://olecad.com`
   - Authorization callback URL : `https://api.netlify.com/auth/done`
   - Note le **Client ID** + génère un **Client Secret**
2. **Netlify → Team settings → Access control → OAuth → Install provider → GitHub** → colle Client ID + Secret.
   *(Doc officielle : https://decapcms.org/docs/github-backend/)*

## 5. Publier un article
`olecad.com/admin` → Login with GitHub → **Artículos del blog → New** → Título, Fecha, **Categoría**, Descripción, Imagen (opcional), Contenido → **Publish**. En ligne ~1 min plus tard.

## Notes
- Blog en **espagnol** (marché principal). Version PT ajoutable plus tard.
- Ajouter une catégorie : éditer `options: [...]` dans `src/admin/config.yml`.
- ⚠️ Ton déploiement actuel embarque un panneau de « tweaks » de design (React + Babel + `tweaks-panel.jsx` / `tweaks.jsx`) chargé sur la home. Je l'ai **laissé tel quel**. Quand tu veux, on l'enlève de la prod : ça allège la page et évite d'exposer un panneau d'édition.
