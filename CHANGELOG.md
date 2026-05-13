# CHANGELOG

## [Client-Ready] - 2026-01

### TASK A — Language Gating (Ask Once Only)

**Fonctionnalités ajoutées :**
- ✅ Page `/language/` pour sélection unique de la langue avant chargement
- ✅ Middleware Astro (`src/middleware.ts`) gérant les redirections basées sur cookies
- ✅ Cookie `lang` persistant (1 an) avec `SameSite=Lax` et `Secure`
- ✅ Redirection automatique : `/` → `/language/` si pas de cookie, sinon → `/{lang}/`

**Modifications :**
- `src/middleware.ts` : Nouveau middleware pour gérer langue et redirections
- `src/pages/language/index.astro` : Nouvelle page de sélection de langue
- `src/pages/index.astro` : Redirection vers `/language/` ou `/{lang}/` selon cookie
- `src/i18n/utils.ts` : `getLangFromUrl()` utilise maintenant le pathname au lieu de query params

**Suppressions :**
- ❌ Tous les query params `?lang=fr` ou `?lang=en` retirés du code
- ❌ `LanguageModal` retiré de `BaseLayout.astro` (plus nécessaire)
- ❌ Scripts de redirection basés sur `localStorage` et query params supprimés

### TASK B — Copy Polish (+10-20% max)

**Améliorations texte :**
- `siteTitle` : "SIGNATURE" → "PRO+" (cohérence avec le thème)
- `heroDesc` : "puissance du code" → "performance technique" (plus professionnel)
- `aboutPageText` : "âme de votre projet" → "essence de votre projet" (plus précis)
- `services[].desc` : Amélioration de la clarté pour chaque service
- `contactTitle` : "Créons quelque chose de beau" → "Créons quelque chose de remarquable"
- `contactText` : "Parlons-en" → "Discutons de votre vision" (plus engageant)
- `contactInfo` : "Réponse personnelle" → "Réponse personnalisée" (plus précis)

**Structure conservée :**
- Architecture des traductions intacte
- Tous les textes restent cohérents avec le thème "Pro" (pas "Premium")

### TASK C — Placeholder Cleanup

**Placeholders supprimés :**
- `footerText` : "[Votre Nom]" → "Fait main." / "Handcrafted."
- `cgv.astro` : Tous les placeholders remplacés par textes génériques professionnels
  - "[Votre Prénom] [Votre Nom]" → texte générique avec formulaire de contact
  - "[Votre Numéro SIRET]", "[Votre Adresse]", "[Votre Email]" → mentions génériques
  - "[Nom Hébergeur]", "[Adresse Hébergeur]" → texte générique sur infrastructure
- `privacy.astro` : "[Date]" → "2026", "[Votre Email]" → référence au formulaire de contact

### TASK D — Mobile Flash/FOUC Fix

**Corrections FOUC :**
- ✅ Styles critiques inline ajoutés dans `<head>` pour éviter flash de contenu non stylé
- ✅ Préchargement des fonts système avec `preconnect` pour Google Fonts
- ✅ `font-family` définie dans les styles inline critiques
- ✅ Styles de base (background, color) appliqués immédiatement
- ✅ Header positionné et stylé dès le chargement initial

**Optimisations :**
- Styles inline critiques pour `html`, `body`, `header`
- Prévention du flash de scrollbar avec `overflow-x: hidden`

### TASK E — Mobile QA

**Menu mobile ajouté :**
- ✅ Menu hamburger visible sur mobile (`md:hidden`)
- ✅ Overlay full-screen avec navigation complète
- ✅ Boutons de langue FR/EN intégrés dans le menu mobile
- ✅ Fermeture automatique après clic sur un lien
- ✅ Fermeture avec touche Escape
- ✅ Gestion de l'overflow du body pendant ouverture du menu

**CTAs et routes corrigées :**
- ✅ Bouton "Contact" fixe : `#contact` → `/{lang}/contact` (route absolue)
- ✅ Bouton "Lancer la collaboration" : fonctionne comme lien vers `/{lang}/contact`
- ✅ Tous les liens d'ancrage (`#home`, `#about`, etc.) fonctionnent sur mobile
- ✅ Menu desktop : liens d'ancrage corrects
- ✅ Menu mobile : liens d'ancrage corrects avec fermeture automatique

**Navigation cohérente :**
- ✅ Tous les liens utilisent des routes absolues `/{lang}/...` au lieu de relatives
- ✅ Bouton CTA flottant visible sur mobile (icône email au lieu de flèche)
- ✅ Liens de langue FR/EN fonctionnels dans header desktop et mobile

---

## Résumé des fichiers modifiés

### Nouveaux fichiers
- `src/middleware.ts`
- `src/pages/language/index.astro`
- `CHANGELOG.md`

### Fichiers modifiés
- `src/i18n/translations.ts` (copy + placeholders)
- `src/i18n/utils.ts` (utilise pathname au lieu de query params)
- `src/layouts/BaseLayout.astro` (FOUC fix + retrait LanguageModal)
- `src/components/Header.astro` (menu mobile + CTAs corrigés)
- `src/components/Footer.astro` (utilise getLangFromUrl au lieu de query params)
- `src/pages/index.astro` (redirection basée sur cookie)
- `src/pages/[lang]/index.astro` (CTAs corrigés)
- `src/pages/[lang]/legal/cgv.astro` (placeholders supprimés)
- `src/pages/[lang]/legal/privacy.astro` (placeholders supprimés)

### Fichiers supprimés
- Aucun (LanguageModal.astro conservé mais non utilisé)
