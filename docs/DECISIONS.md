# DECISIONS — jonlabs

> Journal des décisions techniques et éditoriales structurantes. Une ligne par décision.
> Le détail vit dans le feature file concerné — ici on garde la décision, son contexte et
> ce qui a été écarté, pour ne pas la rejouer dans six mois.

Format : `[date] | [décision] | [contexte] | [alternatives considérées]`

---

## 2026

**2026-08-07** | **Le terme « agence » est utilisé comme ce dont Jon Labs est l'alternative, jamais comme revendication d'identité.** | La demande SEO mesurée est massivement formulée en « agence {service} {ville} » (~450 imp/mois sur le silo mobile, ~600 sur les villes frontalières, toutes à 0 clic). Le premier jet des pages posait `title`/`H1` en « Agence application mobile … », ce qui aurait fait revendiquer un statut que le reste du site contredit (home, `/about`, `/developpeur-web-freelance-geneve`, `/tarifs` disent « développeur freelance » ; le guide mobile dit « je travaille en solo ») — et la page s'auto-contredisait deux paragraphes plus bas. | (a) Revendiquer « agence » et reprendre home + about + `/developpeur-web-freelance-geneve` + `freelance-ou-agence-application-mobile` pour rendre le site cohérent — écarté, décision de marque non tranchée par Jonathan. (b) Retirer complètement le terme — écarté, perte de pertinence sur la requête n°1 du site. (c) **Retenu** : le terme reste présent en title/description/H1/corps, avec des formulations variées par page (« sans agence », « freelance, pas une agence », « l'alternative à l'agence », « en direct avec le développeur »…) pour éviter une formule dupliquée en SERP. Réouvrable si Jonathan décide de trader sous l'étiquette agence.

**2026-08-06** | **Hiérarchie d'intent du silo mobile : le pilier service tient le transactionnel, le blog reste informationnel.** | `/blog/developper-application-mobile-suisse` doublait `/services/developpement-application-mobile` sur ses propres requêtes commerciales (pos 7-10 vs 25-35) — hiérarchie inversée. | (a) 301 du guide vers le pilier — écarté, le guide performe et l'autorité serait mal transférée. (b) **Retenu** : différenciation éditoriale du guide + ancres sémantiques descendantes vers le pilier. Corollaire : ne jamais faire cibler une requête portant « agence » par un article comparatif, ça rejoue le problème.

**2026-07-10** (`d247cc7`) | **Les pages géo ne sont pas câblées au méga-menu ni au fat footer.** | Colonne « Zones & régions » jugée sans plus-value ; un lien boilerplate répété sitewide pèse peu. | Maillage éditorial en corps de page (6 à 9 liens par page géo) — retenu. Les exports `footerZonesWeb` / `footerRegionsIA` ne sont plus lus que par `styleguide-nav.astro` : ce n'est pas un oubli de câblage, ne pas les rebrancher sans rouvrir la décision.

**2026-06-25** | **Les pages géo/métiers sont data-driven (1 route dynamique + N entrées), avec garde-fou anti-template.** | Scalabilité des silos IA, web et mobile. | Le garde-fou : chaque entrée porte du contenu réellement local (tissu économique, secteurs, cas d'usage, FAQ propres). Interdit de générer une ville sans légitimité réelle — c'est ce qui bloque Bulle et Fribourg sur le silo mobile. Cf. `/programmatic-seo`.
