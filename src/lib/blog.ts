// Blog helper functions

export const categories = {
  tech: { name: 'Tech', color: 'var(--blue)' },
  creatif: { name: 'Créatif', color: 'var(--blue)' },
  perso: { name: 'Perso', color: 'var(--violet)' },
} as const;

export type CategoryKey = keyof typeof categories;

export function getCategoryName(key: CategoryKey): string {
  return categories[key]?.name || key;
}

export function getCategoryColor(key: CategoryKey): string {
  return categories[key]?.color || 'var(--blue)';
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('fr-CH', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

export function formatDateShort(date: Date): string {
  return new Intl.DateTimeFormat('fr-CH', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date);
}

import type { CollectionEntry } from 'astro:content';

export function getRelatedPosts(
  currentPost: CollectionEntry<'blog'>,
  allPosts: CollectionEntry<'blog'>[],
  limit: number = 3
): CollectionEntry<'blog'>[] {
  const currentCategory = currentPost.data.category;
  const currentTags = currentPost.data.tags;
  const currentSlug = currentPost.slug;

  const scoredPosts = allPosts
    .filter(post => post.slug !== currentSlug && !post.data.draft)
    .map(post => {
      let score = 0;

      // Same category = 3 points
      if (post.data.category === currentCategory) {
        score += 3;
      }

      // Each matching tag = 1 point
      const matchingTags = post.data.tags.filter(tag =>
        currentTags.includes(tag)
      );
      score += matchingTags.length;

      return { post, score };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      return b.post.data.pubDate.getTime() - a.post.data.pubDate.getTime();
    })
    .slice(0, limit)
    .map(item => item.post);

  return scoredPosts;
}
