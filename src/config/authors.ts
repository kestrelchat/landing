export interface Author {
  name: string;
  role?: string;
  avatar?: string;
}

const authorModules = import.meta.glob("../content/authors/*.json", {
  eager: true,
});

const authorMap = new Map<string, Author>();

for (const [, module] of Object.entries(authorModules)) {
  const data = module as Author;
  if (data?.name) {
    authorMap.set(data.name, data);
  }
}

export function getAuthor(name: string): Author | undefined {
  return authorMap.get(name);
}

const AVATAR_SIZE = 32;

export function getAvatarUrl(author?: Author): string {
  if (author?.avatar) return author.avatar;
  const letter = author?.name?.charAt(0)?.toUpperCase() ?? "?";
  return `https://placehold.co/${AVATAR_SIZE}x${AVATAR_SIZE}?text=${letter}`;
}
