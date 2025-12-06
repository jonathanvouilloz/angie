# 📋 SPEC COMPLÈTE : Page Services - Jon Labs

**Destinataire :** Claude Code  
**Projet :** Jon Labs - Page Services interactive  
**Date :** Décembre 2024

---

## 🎯 VUE D'ENSEMBLE

Créer une page Services ultra-immersive avec :
1. **Hero interactif** : Personnage mascotte + 8 bulles de problématiques cliquables
2. **Modal conversationnel** : Discussions Jon ↔ Client avec overlay immersif
3. **Section détaillée** : Accordéons par service pour approfondir

**Philosophie design :** Ludique, engageant, brutaliste cohérent avec la brand Jon Labs existante.

---

## 📐 STRUCTURE GLOBALE DE LA PAGE

```
/services
│
├─── SECTION 1 : Hero Scenarios (viewport height)
│    ├─ Titre principal
│    ├─ Personnage mascotte (centre)
│    └─ 8 bulles problématiques (disposition circulaire autour)
│
├─── SECTION 2 : Services Détaillés
│    ├─ Développement Web (accordéons)
│    ├─ Automatisation & Processus (accordéons)
│    └─ Applications Sur-Mesure (accordéons)
│
└─── CTA Final : "Prêt à démarrer ?"
```

---

## 🎨 SECTION 1 : HERO SCENARIOS

### Layout

**Desktop (viewport full height) :**
```
┌──────────────────────────────────────────────────┐
│                                                   │
│     Quelle est ta situation actuelle ?           │
│                                                   │
│                                                   │
│    💸          🔗          ⏰          📊        │
│                                                   │
│                      🤖                           │
│    🚀         PERSONNAGE        🎨               │
│                 (JL)                              │
│                                                   │
│    📧          ❓                                 │
│                                                   │
│                                                   │
└──────────────────────────────────────────────────┘
```

**Mobile (stack vertical) :**
```
┌─────────────────┐
│                 │
│ Quelle est ta   │
│  situation ?    │
│                 │
│   💸 💬         │
│   🔗 💬         │
│                 │
│      🤖         │
│   PERSONNAGE    │
│                 │
│   ⏰ 💬         │
│   📊 💬         │
│   ...           │
└─────────────────┘
```

### Personnage Mascotte

**Design :**
- Cercle simple, blanc, bordure noire 3px
- Diamètre : 200px (desktop), 120px (mobile)
- Initiales "JL" au centre ou mini logo Jon Labs
- 2 yeux : petits cercles noirs (8-10px) qui SUIVENT LA SOURIS EN PERMANENCE

**Comportement yeux :**
- Tracking souris continu (smooth, pas saccadé)
- Limite de mouvement : ~10px dans chaque direction depuis le centre
- Angle calculé entre position souris et centre du personnage
- Animation : ease-out 0.1s (réactivité fluide)

**Code concept (pour référence) :**
```javascript
// Les yeux suivent la souris en temps réel
// Calculer angle entre souris et personnage
// Limiter déplacement des pupilles (max 10px)
// Smooth transition
```

### Les 8 Bulles de Problématiques

**Style visuel :**
- Fond blanc, bordure 2px noire
- Border-radius : 20px (exception butaliste pour effet bulle)
- Shadow offset : 4px 4px 0px rgba(0,0,0,0.3)
- Padding : 1rem 1.5rem
- Cursor : pointer

**Contenu de chaque bulle :**

| Emoji | Texte | ID |
|-------|-------|-----|
| 💸 | Cash flow serré | cash-flow |
| 🔗 | Outils désynchronisés | tools-sync |
| ⏰ | Manque de temps | time-lack |
| 📊 | Données éparpillées | data-scattered |
| 🚀 | Lancement urgent | launch-fast |
| 🎨 | Site obsolète | website-old |
| 📧 | Campagnes ratées | email-fails |
| ❓ | Idée non validée | idea-validation |

**Interactions bulle :**

1. **Hover :**
   - Scale : 1.05
   - Transform : translateY(-2px)
   - Shadow : 6px 6px 0px rgba(0,0,0,0.3)
   - Background : var(--main-bg)
   - Tooltip apparaît après 300ms : "Découvrir la solution"
   - Transition : 0.2s ease-out

2. **Click :**
   - Trigger ouverture modal
   - Overlay noir apparaît (fade in 0.3s)
   - Modal scale from 0.95 + fade in (0.3s ease-out)

---

## 🪟 MODAL CONVERSATIONNEL

### Structure

**Overlay :**
- Position : fixed, full screen (z-index: 1000)
- Background : rgba(0, 0, 0, 0.9) **ou tester 1.0 (full black)**
- Backdrop-filter : blur(8px) (optionnel selon test overlay)
- Click overlay → ferme modal

**Modal window :**
- Max-width : 800px (desktop), 100vw (mobile)
- Max-height : 90vh
- Background : white
- Border : 3px solid black
- Shadow : 12px 12px 0px rgba(0,0,0,0.5)
- Padding : 2rem
- Overflow-y : auto (scroll interne)
- Position : centered (fixed)

**Header modal :**
```
┌────────────────────────────────────┐
│ 💸 Cash flow serré           [✕]  │
│ ────────────────────────────────   │
```
- Titre avec emoji
- Bouton close (✕) en haut à droite
- Border-bottom 2px black

**Zone conversation :**
- Scroll automatique vers le bas au fur et à mesure des messages
- Padding entre messages : 1.5rem

**Footer modal (apparaît APRÈS la conversation) :**
```
┌─────────────────────────────────────┐
│  [📞 Me contacter]  [📖 En savoir +]│
└─────────────────────────────────────┘
```

### Messages - Style (cohérent avec l'app)

**Format :**
```html
Message Client (gauche) :
┌─────────────────────────────┐
│ 👤  [Bulle grise]           │
│     "Texte du client..."    │
└─────────────────────────────┘

Message Jon (droite) :
┌─────────────────────────────┐
│        [Bulle verte]  📷    │
│     "Texte de Jon..."       │
└─────────────────────────────┘
```

**Specs bulles messages :**

Client :
- Avatar : 👤 (ou icône user générique)
- Bulle : background #F5F5F5, border 2px black
- Border-radius : 12px 12px 12px 0 (queue en bas à gauche)
- Alignement : flex-start (gauche)
- Max-width : 70%

Jon :
- Avatar : Photo Jonathan (ou initiales JV dans cercle)
- Bulle : background var(--blue) (#00D9A3), border 2px black
- Border-radius : 12px 12px 0 12px (queue en bas à droite)
- Alignement : flex-end (droite)
- Max-width : 70%

### Animation des Messages

**Apparition séquentielle :**
1. Modal s'ouvre
2. Premier message fade in + translateY (0 → 0) après 400ms
3. Chaque message suivant apparaît avec delay de 800ms - 1200ms (variable pour naturel)
4. Pas trop rapide (lisibilité), pas trop lent (impatience)
5. Scroll auto vers le bas au fur et à mesure

**Animation individuelle :**
```
État initial : opacity: 0, transform: translateY(20px)
État final : opacity: 1, transform: translateY(0)
Transition : 0.4s ease-out
```

**Apparition CTAs finaux :**
- Apparaissent SEULEMENT après le dernier message
- Delay : 600ms après dernier message
- Animation : fade in + translateY (même style)

### CTAs Modal

**Me contacter (primaire) :**
- Bouton vert (var(--blue))
- Bordure 2px noire
- Shadow offset
- Hover : bg var(--yellow), shadow augmente
- Action : Redirige vers /contact

**En savoir plus (secondaire) :**
- Bouton blanc
- Bordure 2px noire
- Hover : bg var(--main-bg)
- Action :
  1. Ferme le modal (fade out 0.3s)
  2. Scroll smooth vers section service correspondante
  3. Highlight temporaire de la section (border pulse ?)

### Fermeture Modal

**Triggers :**
- Click bouton ✕
- Click overlay noir
- Touche Escape
- Action CTA "En savoir plus"

**Animation :**
- Modal : scale to 0.95 + fade out (0.3s)
- Overlay : fade out (0.3s)
- Body overflow : auto (restauré)

---

## 💬 LES 8 SCÉNARIOS COMPLETS

### Scénario 1 : Cash flow serré 💸

**ID :** `cash-flow`  
**Service lié :** Automatisation  
**Scroll vers :** `#automatisation`

**Conversation :**

```
CLIENT:
On grandit vite mais on est tout le temps à sec. Les paiements clients arrivent trop tard.

JON:
Cash flow problème numéro 1 pour 33% des petites boîtes. T'as combien de délai de paiement en moyenne ?

CLIENT:
30-45 jours... et on paie nos coûts tout de suite.

JON:
Classic. T'as pensé à automatiser tes relances ? La plupart des retards c'est juste parce que les gens oublient.

CLIENT:
On fait ça manuellement, mais on passe à côté de plein de trucs.

JON:
Automatise : facture envoyée automatiquement, relance à J-7, J+3, J+10. Tracking en temps réel de qui a payé, qui tarde. Plus besoin d'y penser, ça tourne tout seul.

CLIENT:
Ça changerait vraiment la donne niveau trésorerie.

JON:
Exactement. Les startups qui automatisent leurs relances réduisent leurs délais de paiement de 40% en moyenne.
```

---

### Scénario 2 : Outils désynchronisés 🔗

**ID :** `tools-sync`  
**Service lié :** Automatisation  
**Scroll vers :** `#automatisation`

**Conversation :**

```
CLIENT:
Jon, j'ai 12 abonnements différents et mes outils ne parlent pas entre eux. C'est le chaos.

JON:
Le syndrome du "app fatigue". Tu passes plus de temps à copier-coller entre tes outils qu'à bosser sur ton business, c'est ça ?

CLIENT:
Exactement ! J'ai Stripe pour les paiements, Notion pour la gestion, Gmail pour les clients... je perds 2h par jour juste à synchroniser tout ça.

JON:
Je vois le truc. On va pas ajouter un 13ème outil. On va plutôt connecter ceux que t'as déjà. Une automatisation bien foutue et tes données circulent toutes seules.

CLIENT:
Genre, mes nouveaux clients Stripe arrivent automatiquement dans mon CRM ?

JON:
Exactement. Avec les tâches de suivi créées automatiquement, l'email de bienvenue envoyé, et même la facture générée. Tu récupères tes 2h par jour.
```

---

### Scénario 3 : Manque de temps ⏰

**ID :** `time-lack`  
**Service lié :** Automatisation  
**Scroll vers :** `#automatisation`

**Conversation :**

```
CLIENT:
Jonathan, je porte 15 casquettes. Dev, commercial, compta, marketing... je dors 4h par nuit.

JON:
60% des entrepreneurs disent avoir sous-estimé le nombre de "chapeaux" à porter. T'es dans quelle phase là ?

CLIENT:
J'ai des clients, ça grandit, mais je peux pas embaucher encore. Budget trop serré.

JON:
Ok, donc on va automatiser ce qui bouffe ton temps sans créer de valeur. C'est quoi tes 3 tâches les plus chronophages ?

CLIENT:
Les relances clients, les rapports mensuels, et gérer les demandes de contact.

JON:
Facile à automatiser tout ça. Relances : workflow automatique. Rapports : dashboard qui se génère tout seul. Demandes de contact : formulaire qui trie et notifie directement.

CLIENT:
Je récupère combien de temps par semaine à ton avis ?

JON:
Conservateur ? 10-15h. Réaliste ? Plutôt 20h. C'est presque un mi-temps.
```

---

### Scénario 4 : Données éparpillées 📊

**ID :** `data-scattered`  
**Service lié :** Applications  
**Scroll vers :** `#applications`

**Conversation :**

```
CLIENT:
Nos données sont éparpillées : Excel ici, Google Sheets là, un vieux CRM qu'on utilise plus... impossible de piloter.

JON:
Data silos. Le cauchemar des PME en croissance. Tu prends tes décisions sur quoi actuellement ?

CLIENT:
Honnêtement ? Mon feeling. J'ai pas de vision claire de ce qui marche ou pas.

JON:
Dangereux. On va centraliser ça. Une source de vérité unique : dashboard qui agrège tout automatiquement.

CLIENT:
Genre je vois mes ventes, mes dépenses, mes clients actifs... en un coup d'œil ?

JON:
Exactement. Mise à jour en temps réel. Plus besoin de passer 3h à faire un rapport pour savoir où t'en es.

CLIENT:
Ça coûte une fortune ce genre de truc non ?

JON:
Moins cher que de prendre des mauvaises décisions parce que t'as pas les bonnes données. Et ça se met en place en 2-3 semaines.
```

---

### Scénario 5 : Lancement urgent 🚀

**ID :** `launch-fast`  
**Service lié :** Applications  
**Scroll vers :** `#applications`

**Conversation :**

```
CLIENT:
On a 6 semaines pour lancer notre MVP avant un salon où on a des investisseurs. C'est jouable ?

JON:
6 semaines c'est serré mais faisable. La vraie question : c'est quoi ton VRAI minimum viable ?

CLIENT:
On a listé 25 features qu'on veut absolument...

JON:
Red flag numéro 2. On va couper 80% de ça. Quelle est LA feature qui résout LE problème principal ?

CLIENT:
La gestion automatisée de nos processus internes.

JON:
Parfait. On se concentre là-dessus. Interface ultra simple, une seule fonction, mais elle marche parfaitement. Le reste ? V2.

CLIENT:
Mais si c'est trop basique, les investisseurs vont penser qu'on est pas sérieux...

JON:
Au contraire. Les investisseurs kiffent voir quelqu'un qui ship vite et teste. Plutôt qu'un projet théorique parfait sur PowerPoint.

CLIENT:
Ok, on fait quoi concrètement ?

JON:
Semaine 1-2 : wireframes + validation avec 5 beta testeurs. Semaine 3-4 : dev de la feature core. Semaine 5-6 : tests + polish. Tu démontres au salon avec des vrais retours utilisateurs.
```

---

### Scénario 6 : Site obsolète 🎨

**ID :** `website-old`  
**Service lié :** Développement Web  
**Scroll vers :** `#dev-web`

**Conversation :**

```
CLIENT:
Mon site date de 2015, il est moche, pas responsive... mais refaire un site ça coûte une blinde non ?

JON:
Dépend de ce que tu veux. Site sur-mesure avec 50 pages et 200 animations ? Oui. Site propre qui convertit ? Non.

CLIENT:
C'est quoi la différence ?

JON:
La plupart des sites ont 80% de contenu inutile. On garde l'essentiel : qui t'es, ce que tu fais, pourquoi te choisir, comment te contacter.

CLIENT:
Mais j'ai besoin d'un portfolio, d'un blog, de 15 pages services...

JON:
Tu penses. En vrai, 90% de tes visiteurs vont sur 3 pages max. On lance avec ça, on itère après si vraiment besoin.

CLIENT:
Délai ?

JON:
3 semaines. Site moderne, rapide, responsive, SEO friendly. Tu fournis le contenu, je gère le reste.

CLIENT:
Et si je veux ajouter des trucs après ?

JON:
C'est prévu dans l'archi. Tu peux faire évoluer facilement. Mais on lance simple et efficace d'abord.
```

---

### Scénario 7 : Campagnes ratées 📧

**ID :** `email-fails`  
**Service lié :** Automatisation  
**Scroll vers :** `#automatisation`

**Conversation :**

```
CLIENT:
J'ai envoyé un email de lancement hier... sans le bouton d'achat. 2000 personnes, zéro conversions.

JON:
Aïe. Le CTA oublié. T'es loin d'être le seul, c'est l'erreur #1 en email marketing.

CLIENT:
J'ai trop de trucs à gérer, je check vite fait et hop. Résultat : des conneries.

JON:
Tu gères ton emailing comment actuellement ?

CLIENT:
Mailchimp. Je fais tout à la main, je teste pas vraiment avant d'envoyer.

JON:
On va te créer un workflow propre : template pré-testé, checklist automatique avant envoi, système de validation. Plus d'emails partis sans CTA, sans lien, ou au mauvais moment.

CLIENT:
Genre un process bête et méchant qui m'empêche de merder ?

JON:
Exactement. Et bonus : tu peux programmer tes séquences à l'avance. Plus de stress de dernière minute.
```

---

### Scénario 8 : Idée non validée ❓

**ID :** `idea-validation`  
**Service lié :** Applications  
**Scroll vers :** `#applications`

**Conversation :**

```
CLIENT:
J'ai un super produit mais je trouve pas mes premiers clients. Aucune visibilité.

JON:
Le problème à 42% : pas de market need VALIDÉ. Avant de parler visibilité, t'as testé ton offre avec qui ?

CLIENT:
Quelques potes, ma famille... ils ont tous dit que c'était cool.

JON:
Red flag. Ils vont jamais te dire que c'est nul. T'as demandé à quelqu'un de PAYER ?

CLIENT:
Euh... pas encore.

JON:
Ok. Avant de te faire un site de ouf ou une stratégie marketing compliquée, on va valider ton concept. Landing page ultra simple, bouton pré-commande, pub ciblée à 100 balles.

CLIENT:
Pour voir si les gens sortent vraiment leur CB ?

JON:
Exactement. Si personne paie même avec 50% de réduc early bird, faut revoir ton concept. Si ça marche, tu lances pour de vrai avec tes premiers clients acquis.
```

---

## 📋 SECTION 2 : SERVICES DÉTAILLÉS (Accordéons)

### Structure

Sous le hero, après transition visuelle (border-top 3px black).

**Layout :**
```
┌────────────────────────────────────────┐
│                                         │
│  Mes Services en Détail                │
│                                         │
│  ┌────────────────────────────────┐   │
│  │ 🌐 Développement Web           │   │
│  │ Sites performants, web apps... │   │
│  │                                 │   │
│  │ ▼ "Mon site date de 2015..."   │   │
│  │ ▼ "Je dois lancer en 6 sem..." │   │
│  │                                 │   │
│  │ [CTA: Projet web →]            │   │
│  └────────────────────────────────┘   │
│                                         │
│  ┌────────────────────────────────┐   │
│  │ ⚙️ Automatisation              │   │
│  │ Gagnez du temps...             │   │
│  │                                 │   │
│  │ ▼ "12 outils désynchronisés"   │   │
│  │ ▼ "Je porte 15 casquettes"     │   │
│  │ ▼ "Cash flow serré"            │   │
│  │ ▼ "Campagnes email ratées"     │   │
│  │                                 │   │
│  │ [CTA: Automatise →]            │   │
│  └────────────────────────────────┘   │
│                                         │
│  ┌────────────────────────────────┐   │
│  │ 📱 Applications Sur-Mesure     │   │
│  │ Solutions uniques...           │   │
│  │                                 │   │
│  │ ▼ "Données éparpillées"        │   │
│  │ ▼ "Lancer MVP urgent"          │   │
│  │ ▼ "Idée non validée"           │   │
│  │                                 │   │
│  │ [CTA: Crée ton app →]          │   │
│  └────────────────────────────────┘   │
│                                         │
└────────────────────────────────────────┘
```

### Contenu des accordéons

**Format accordéon :**
- Border 2px black
- Background white
- Header : padding 1.5rem, clickable
- Icône flèche : rotate(0) → rotate(180deg) quand ouvert
- Content : padding 2rem, animation slide down

**Contenu interne (2 options au choix de Claude Code) :**

**Option A : Format avant/après compact**
```
AVANT
"12 outils, 2h/jour de synchronisation manuelle"

APRÈS  
"1 dashboard centralisé, automatisation complète"

[Lien : Voir la conversation complète →]
(réouvre le modal correspondant)
```

**Option B : Résumé + bullet points**
```
Situation : Tu jongle avec trop d'outils qui ne communiquent pas

Solution :
• Connexion automatique de tes outils existants
• Flux de données bidirectionnel en temps réel
• Dashboard centralisé pour tout piloter

Résultat : 2h/jour récupérées, zéro erreur de sync

[Lien : Voir la conversation →]
```

### Mapping Scénarios → Services

**Développement Web (`#dev-web`) :**
- 🎨 Site obsolète (website-old)
- 🚀 Lancement urgent (launch-fast)

**Automatisation (`#automatisation`) :**
- 🔗 Outils désynchronisés (tools-sync)
- ⏰ Manque de temps (time-lack)
- 💸 Cash flow serré (cash-flow)
- 📧 Campagnes ratées (email-fails)

**Applications (`#applications`) :**
- 📊 Données éparpillées (data-scattered)
- 🚀 Lancement urgent (launch-fast) *[aussi pertinent ici]*
- ❓ Idée non validée (idea-validation)

---

## 🎬 FLOWS D'INTERACTION COMPLETS

### Flow A : Utilisateur clique bulle depuis Hero

```
1. User arrive sur /services
2. Voit personnage + 8 bulles
3. Survole bulle "💸 Cash flow"
   → Bulle scale + shadow
   → Tooltip "Découvrir la solution"
   → Yeux du personnage regardent la bulle
4. Click bulle
   → Overlay noir fade in (0.3s)
   → Modal scale + fade in (0.3s)
   → Titre "💸 Cash flow serré" affiché
5. Messages apparaissent un par un (800ms-1200ms delay)
   → Scroll auto vers le bas
6. Dernier message affiché
   → CTAs apparaissent (600ms delay)
7. User lit, puis soit :
   
   7A. Click "Me contacter"
       → Redirect vers /contact
   
   7B. Click "En savoir plus"
       → Modal close (fade out 0.3s)
       → Overlay close (fade out 0.3s)
       → Scroll smooth vers #automatisation
       → Section highlight temporaire (pulse border ?)
```

### Flow B : Utilisateur explore accordéons

```
1. User scroll jusqu'à section détaillée
2. Clique accordéon "Je jongle avec 12 outils"
   → Arrow rotate 180deg
   → Content slide down (0.3s)
   → Affiche résumé + lien
3. Click "Voir la conversation →"
   → Réouvre modal avec scenario tools-sync
   → Même behaviour que Flow A étape 4-7
```

### Flow C : Fermeture modal

```
Triggers :
- Click ✕ (bouton close)
- Click overlay noir
- Press Escape key
- Click CTA "En savoir plus"

Action :
→ Modal scale to 0.95 + fade out (0.3s)
→ Overlay fade out (0.3s)
→ Body overflow: auto (unlock scroll)
→ Si vient de CTA "En savoir plus" : scroll vers section
```

---

## 🎨 DESIGN TOKENS & COHÉRENCE

### Couleurs (utiliser les variables CSS existantes)

```css
--main-bg: #FAFAFA
--blue: #00D9A3 (vert labo - CTA primaires)
--yellow: #00A87D (vert foncé - hover)
--accent: rgba(163, 0, 217, 0.35) (magenta - highlights)
--violet: #A300D9 (magenta vif - accents)
--text: #0F172A (noir charbon - texte)
```

### Typographie

- Font : Space Grotesk (déjà utilisée)
- Hero titre : text-4xl md:text-5xl, font-bold
- Bulles : text-md, font-medium
- Messages : text-lg, font-normal
- CTAs : text-md, font-medium

### Espacements cohérents

- Section padding : py-20 md:py-32, px-4
- Cards/Bulles padding : 1rem 1.5rem
- Messages padding : 1rem 1.5rem
- Gaps : 1.5rem entre messages, 0.5rem entre éléments serrés

### Ombres brutalistes

- Standard : 4px 4px 0px rgba(0,0,0,0.3)
- Hover : 6px 6px 0px rgba(0,0,0,0.3)
- Modal : 12px 12px 0px rgba(0,0,0,0.5)

---

## 📱 RESPONSIVE

### Breakpoints

- Mobile : < 768px
- Desktop : >= 768px

### Adaptations Mobile

**Hero :**
- Personnage : 120px diameter (vs 200px desktop)
- Bulles : grid 2 colonnes (au lieu de circular)
- Espacement réduit

**Modal :**
- Width : 95vw (au lieu de 800px)
- Max-height : 85vh
- Padding : 1.5rem (au lieu de 2rem)
- Messages max-width : 85% (au lieu de 70%)

**Accordéons :**
- Padding réduit
- Font-size légèrement plus petit si besoin

---

## ♿ ACCESSIBILITÉ

### Impératifs

1. **Modal :**
   - Focus trap (Tab circule dans modal)
   - Escape pour fermer
   - ARIA role="dialog"
   - ARIA-labelledby sur titre

2. **Accordéons :**
   - <details> natif (accessible par défaut)
   - Ou ARIA expanded/collapsed

3. **Bulles cliquables :**
   - Role="button"
   - Keyboard accessible (Enter/Space)

4. **Navigation clavier :**
   - Tous les éléments interactifs accessibles au clavier
   - Focus visible clair

---

## ✅ CHECKLIST AVANT VALIDATION

**Fonctionnel :**
- [ ] Yeux du personnage suivent la souris en continu
- [ ] 8 bulles cliquables ouvrent le bon scénario
- [ ] Modal overlay noir immersif
- [ ] Messages apparaissent de façon fluide et naturelle
- [ ] CTAs finaux n'apparaissent qu'après dernier message
- [ ] "En savoir plus" ferme modal + scroll vers section
- [ ] "Me contacter" redirige vers /contact
- [ ] Accordéons s'ouvrent/ferment proprement
- [ ] Liens dans accordéons réouvrent modal correspondant

**Design :**
- [ ] Style cohérent avec brand Jon Labs existante
- [ ] Bulles messages reprennent le style de l'app
- [ ] Animations fluides (ni trop rapides, ni trop lentes)
- [ ] Overlay assez prononcé (tester noir 90% vs 100%)
- [ ] Responsive mobile impeccable

**UX :**
- [ ] Tooltip sur hover bulles
- [ ] Transitions smooth partout
- [ ] Scroll auto dans modal
- [ ] Focus visible sur navigation clavier
- [ ] Modal ferme avec Esc, overlay click, bouton ✕

---

## 📂 STRUCTURE FICHIERS RECOMMANDÉE

```
src/
├── pages/
│   └── services.astro
├── components/
│   └── services/
│       ├── HeroScenarios.astro
│       ├── Character.astro
│       ├── ScenarioBubble.astro
│       ├── ConversationModal.astro
│       ├── Message.astro
│       └── ServiceAccordion.astro
├── data/
│   └── scenarios.ts (ou .json)
└── scripts/
    ├── eyes-follow.ts
    ├── modal-handler.ts
    └── scroll-handler.ts
```

**scenarios.ts / .json :**
```typescript
export const scenarios = [
  {
    id: 'cash-flow',
    emoji: '💸',
    title: 'Cash flow serré',
    service: 'automatisation',
    scrollTo: 'automatisation',
    messages: [
      { speaker: 'client', text: '...' },
      { speaker: 'jon', text: '...' },
      // ...
    ]
  },
  // ... 7 autres
];
```

---

## 🎯 RÉSUMÉ EXÉCUTIF

**Page Services = 3 niveaux d'engagement :**

1. **Hero ludique** : Personnage + 8 bulles → capture attention immédiate
2. **Modal immersif** : Conversation réelle → identification problème/solution
3. **Détail approfondi** : Accordéons → exploration complète services

**Animations clés :**
- Yeux suivent souris (permanent)
- Messages apparaissent progressivement (800-1200ms)
- CTAs finaux après conversation
- Overlay noir immersif

**Flow optimal :**
Click bulle → Modal → Lecture conversation → Soit contact direct, soit scroll vers détails → Accordéon → Retour modal si besoin

**Résultat attendu :**
Expérience mémorable, engageante, qui démontre la polyvalence et l'approche humaine de Jon Labs.

---

**FIN DU DOCUMENT - Prêt pour implémentation par Claude Code** 🚀