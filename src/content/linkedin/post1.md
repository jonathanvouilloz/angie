- accroche

J'utilise 2 outils IA. Claude Projects et Claude Code.

Même modèle. Même entreprise.
Contexte partagé ? Zéro.

C'est pas un bug.
C'est le symptôme d'un problème que 90% des utilisateurs d'IA ignorent.

- corps

Après des mois à tester des setups IA, j'ai identifié le vrai goulot d'étranglement.

C'est pas les outils.
C'est pas les prompts.
C'est la couche de données en dessous.

Mon exemple :
→ Claude Projects pour la stratégie et la rédaction
→ Claude Code pour le déploiement technique

Même modèle. Contexte cloisonné.

Pourquoi ? Parce que chaque outil travaille sur sa propre copie de l'information.

La solution que je construis :

Un vault Obsidian comme source de vérité unique.
→ Brand voice, templates, archives de contenus, briefs clients
→ Claude Projects y accède via MCP (Model Context Protocol)
→ Claude Code lit le même filesystem

Résultat : un seul endroit où la donnée vit.
Les outils viennent la chercher, pas l'inverse.

Mais avant de choisir Obsidian, Notion ou un CRM :
1. Définir QUOI doit être partagé entre les outils
2. Standardiser les formats (markdown, JSON, peu importe)
3. Documenter la structure

C'est la partie chiante.
C'est aussi celle qui fait que tout le reste fonctionne.

---

Tu bosses sur quoi comme setup de ton côté ?

- Visuel suggéré

[Claude Projects]
            ↓ MCP
      [OBSIDIAN VAULT]  ← Source de vérité
       (Brand voice, templates, data)
            ↓ filesystem
      [Claude Code]


- hashtags

#IA #automatisation #productivité #data