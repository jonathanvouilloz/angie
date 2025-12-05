# Guide d'Intégration - Page CV Jon Labs

## 📦 Fichiers créés

1. **content-cv.md** - Contenu complet structuré de la page CV
2. **cv.astro** - Page Astro complète avec design Jon Labs
3. **cv-integration-guide.md** - Ce guide

---

## 🚀 Installation dans ton projet

### Étape 1 : Copier le fichier Astro

```bash
# Copie le fichier cv.astro dans ton dossier pages
cp cv.astro /chemin/vers/ton-projet/src/pages/
```

La page sera automatiquement accessible à l'URL : `https://jonlabs.ch/cv`

### Étape 2 : Vérifier les dépendances

Le fichier utilise :
- ✅ Layout existant (`../layouts/Layout.astro`)
- ✅ Remix Icon (déjà dans ton template via CDN)
- ✅ Variables CSS de ton style guide (`--blue`, `--yellow`, `--violet`, `--main-bg`, `--text`)
- ✅ Classes Tailwind CSS

**Aucune dépendance supplémentaire nécessaire !**

### Étape 3 : Ajouter le lien dans la navigation

Dans ton composant de navigation (Header.astro ou équivalent), ajoute :

```astro
<li class="border-l-2 border-black p-2 py-3">
  <a href="/cv" class="
    relative flex items-center whitespace-nowrap px-1
    before:absolute before:left-0 before:bottom-1
    before:h-[8px] before:w-0 before:bg-[var(--accent)]
    before:transition-all before:duration-300
    hover:before:w-full
  ">
    CV
  </a>
</li>
```

### Étape 4 : Créer le PDF du CV

Pour que le bouton "Télécharger le CV (PDF)" fonctionne, tu as plusieurs options :

**Option A : Générer manuellement**
1. Ouvre la page `/cv` dans ton navigateur
2. Imprime la page (Ctrl+P / Cmd+P)
3. "Enregistrer au format PDF"
4. Nomme le fichier : `cv-jonathan-vouilloz.pdf`
5. Place-le dans `public/cv-jonathan-vouilloz.pdf`

**Option B : Utiliser un service**
- [Printfriendly.com](https://www.printfriendly.com)
- [PDFCrowd](https://pdfcrowd.com)
- Puppeteer (automatisation)

**Option C : Désactiver temporairement**
Si tu n'as pas encore de PDF, tu peux commenter les boutons download :

```astro
<!-- Temporairement désactivé
<a href="/cv-jonathan-vouilloz.pdf" download>
  Télécharger le CV (PDF)
</a>
-->
```

---

## 🎨 Personnalisation

### Changer les couleurs

Les couleurs utilisent tes variables CSS du style guide :
```css
--main-bg    /* Fond principal (blanc cassé) */
--blue       /* Vert labo - boutons, badges tech */
--yellow     /* Vert foncé - hover boutons */
--violet     /* Magenta - badges spéciaux */
--text       /* Noir charbon - texte */
```

Si tu veux personnaliser, modifie ces variables dans ton fichier CSS global.

### Ajuster les espacements

```astro
<!-- Sections principales -->
<section class="py-16 px-4">  <!-- Augmente/diminue py-16 -->

<!-- Cartes projets -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">  <!-- Change gap-6 -->
```

### Modifier les badges

```astro
<!-- Badge vert (tech actuelle) -->
<span class="px-3 py-1 bg-[var(--blue)] border border-black text-sm font-medium">
  React
</span>

<!-- Badge gris (tech passée) -->
<span class="px-3 py-1 bg-gray-200 border border-black text-sm font-medium">
  Solidity
</span>

<!-- Badge violet (spécial/nouveau) -->
<span class="px-3 py-1 bg-[var(--violet)] text-white border border-black text-sm font-medium">
  En cours
</span>

<!-- Badge marketing (jaune) -->
<span class="px-3 py-1 bg-[var(--yellow)] border border-black text-sm font-medium">
  SEO
</span>
```

---

## 📝 Contenu à compléter

### Informations manquantes à ajouter :

1. **Liens sociaux exacts** (ligne 31-39 et 786-812)
   ```astro
   <!-- À remplacer par tes vrais liens -->
   <a href="https://linkedin.com/in/TON-PROFIL">LinkedIn</a>
   <a href="https://github.com/TON-USERNAME">GitHub</a>
   <a href="mailto:TON-EMAIL@jonlabs.ch">Email</a>
   ```

2. **Photo professionnelle** (optionnel)
   Si tu veux ajouter ta photo dans le hero :
   ```astro
   <!-- Ajoute après le titre, avant les badges -->
   <div class="flex items-center gap-6">
     <img 
       src="/images/jonathan-vouilloz-cv.jpg" 
       alt="Jonathan Vouilloz"
       class="w-24 h-24 md:w-32 md:h-32 rounded-full border-3 border-black"
     />
     <div>
       <h1>CV - Jonathan Vouilloz</h1>
       <!-- ... -->
     </div>
   </div>
   ```

3. **Détails projets** (si tu veux préciser)
   - Nom exact du cabinet juridique (si mentionnable)
   - Plus de détails sur projets Kusari
   - Screenshots projets (optionnel)

---

## ✅ Checklist de lancement

Avant de publier la page :

- [ ] Fichier `cv.astro` copié dans `src/pages/`
- [ ] Lien "CV" ajouté dans la navigation
- [ ] Liens sociaux mis à jour (LinkedIn, GitHub, Email)
- [ ] PDF généré et placé dans `public/`
- [ ] Test responsive (mobile, tablet, desktop)
- [ ] Vérification orthographe/typos
- [ ] Test des liens internes (/contact, /portfolio)
- [ ] Meta description/SEO vérifiée

---

## 🎯 Points forts de cette page CV

### Design cohérent Jon Labs
✅ Style brutaliste avec bordures épaisses
✅ Palette "Lab Scientifique" (vert + magenta)
✅ Ombres offset 3D
✅ Badges colorés par catégorie

### Structure efficace
✅ Timeline visuelle pour expériences
✅ Section "Projets Clés" avec résultats chiffrés
✅ Compétences catégorisées et visuelles
✅ Download PDF accessible partout

### Optimisé recrutement
✅ Format hybride : chrono + projets
✅ Résultats mesurables mis en avant
✅ Soft skills clairement énoncées
✅ Langues et centres d'intérêt professionnels

### Responsive
✅ Mobile-first
✅ Stack vertical mobile, grid desktop
✅ Boutons tactiles facilement cliquables
✅ Texte lisible sur tous devices

---

## 🔧 Maintenance future

### Ajouter une expérience

1. Trouve la section "Expérience Professionnelle" (ligne ~250)
2. Copie un bloc d'expérience existant
3. Modifie les infos (dates, titre, entreprise, missions)
4. Ajuste les badges technos

### Ajouter un projet

1. Trouve la section "Projets Marquants" (ligne ~490)
2. Copie une carte projet existante
3. Modifie le contenu
4. Change les badges selon la catégorie

### Ajouter une compétence

1. Trouve la section "Stack & Compétences" (ligne ~650)
2. Ajoute un badge dans la catégorie appropriée :
   ```astro
   <span class="px-3 py-1 bg-[var(--blue)] border border-black text-sm font-medium">
     Nouvelle techno
   </span>
   ```

---

## 📊 SEO de la page

La page est optimisée pour :

**Title :** "CV - Jonathan Vouilloz | Développeur & Créateur Digital"
**Description :** "CV de Jonathan Vouilloz, informaticien de gestion et créateur digital. Développement web, automatisation, applications sur-mesure. Basé à Genève."

**Keywords visés :**
- cv développeur genève
- informaticien de gestion suisse
- développeur full-stack genève
- freelance développeur automatisation

---

## 🆘 Support & Questions

Si tu rencontres des problèmes :

1. **Erreur de build** → Vérifie que le fichier Layout.astro existe
2. **Styles cassés** → Vérifie que les variables CSS sont définies
3. **Responsive bizarre** → Teste sur un vrai device, pas juste DevTools
4. **PDF ne fonctionne pas** → Vérifie le chemin `/cv-jonathan-vouilloz.pdf` dans `public/`

---

## 🎨 Variantes possibles

### Version minimaliste
Si tu veux une version plus sobre, enlève :
- Les ombres offset (`shadow-[...]`)
- Les bordures épaisses (`border-3` → `border`)
- Les badges colorés (garde juste du texte)

### Version avec photos
Ajoute des screenshots de projets :
```astro
<div class="aspect-video overflow-hidden border-2 border-black mb-4">
  <img src="/images/projet-barber.jpg" alt="Barber Concept" class="w-full h-full object-cover">
</div>
```

### Version multilingue
Crée `cv-en.astro` pour une version anglaise.

---

## 📌 Next Steps

Après avoir intégré cette page :

1. **Créer le PDF** (prioritaire pour les entretiens)
2. **Ajouter à la navigation** (visible partout)
3. **Tester responsive** (sur vrai mobile)
4. **Partager le lien** (LinkedIn, emails)
5. **Analytics** (tracker les vues avec Google Analytics)

---

Bonne chance pour tes entretiens ! 🚀
