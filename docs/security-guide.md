# Guide de Sécurité - Gestion des Secrets

## Règles d'or

1. **Ne jamais commit de secrets** dans un repository git
2. **Toujours vérifier** `git status` avant de commit
3. **Utiliser `.gitignore`** pour exclure les fichiers sensibles

---

## Clés SSH

### Où les stocker
```
~/.ssh/id_ed25519      # Clé privée (permissions 600)
~/.ssh/id_ed25519.pub  # Clé publique (permissions 644)
```

### Générer une nouvelle clé
```bash
ssh-keygen -t ed25519 -C "ton@email.com"
```

### Ajouter à GitHub
1. Copier la clé publique: `cat ~/.ssh/id_ed25519.pub`
2. Aller sur https://github.com/settings/keys
3. "New SSH key" > Coller > Sauvegarder

### Si une clé est exposée
1. **Révoquer immédiatement** sur GitHub/services concernés
2. Générer une nouvelle paire de clés
3. Mettre à jour partout où l'ancienne était utilisée

---

## Clés API

### Où les stocker

**Option 1 - Variables d'environnement (recommandé):**
```bash
# Dans ~/.bashrc ou ~/.zshrc
export GEMINI_API_KEY="ta-clé-ici"
```

**Option 2 - Fichier .env (gitignored):**
```
# .env (DOIT être dans .gitignore)
GEMINI_API_KEY=ta-clé-ici
```

### Services courants

| Service | Où gérer les clés |
|---------|-------------------|
| Google AI (Gemini) | https://aistudio.google.com/apikey |
| GitHub | https://github.com/settings/tokens |
| Vercel | https://vercel.com/account/tokens |

### Si une clé API est exposée
1. **Révoquer immédiatement** dans la console du service
2. Créer une nouvelle clé
3. Mettre à jour la configuration locale

---

## Fichiers à toujours ignorer

Le `.gitignore` doit contenir:
```gitignore
# Environment
.env
.env.local
.env.*.local
.env.production

# API configs
.mcp.json
.nano-banana-config.json
*-config.json

# SSH/Secrets
*.pem
*.key
id_*
file
file.pub
```

---

## Avant chaque commit

1. `git status` - Vérifier les fichiers qui seront commités
2. `git diff` - Vérifier le contenu des modifications
3. Chercher des patterns sensibles:
   - `API_KEY`, `SECRET`, `TOKEN`, `PASSWORD`
   - Clés commençant par `sk-`, `pk-`, `AIza`, `ghp_`

---

## Si un secret est déjà dans l'historique git

### Nettoyer avec git-filter-repo
```bash
# Installer
pip install git-filter-repo

# Supprimer un fichier de tout l'historique
git filter-repo --path fichier-sensible --invert-paths --force

# Réajouter le remote et force push
git remote add origin git@github.com:user/repo.git
git push --force origin main
```

**Important:** Après un force push, tous les collaborateurs doivent re-cloner le repo.

---

## Outils recommandés

- **git-secrets** - Scan automatique avant commit
- **detect-secrets** - Détection de secrets dans le code
- **GitHub Secret Scanning** - Alertes automatiques (activé par défaut)
