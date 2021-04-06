import { PAGINATION_QUERY } from '../api/queries/paginacao-queries';

export default function paginationField() {
  return {
    keyArgs: false,
    read(existing = [], { args, cache }) {
      const { skip, first } = args;

      const tagName = args.where.tags_some.name;
      const data = cache.readQuery({
        query: PAGINATION_QUERY,
        variables: {
          tagDeModa: tagName,
        },
      });
      const count = data?._allProdutosMeta?.count;
      const page = skip / first + 1;
      const pages = Math.ceil(count / first);

      const items = existing.slice(skip, skip + first).filter((x) => x);

      if (items.length && items.length !== first && page === pages)
        return items;

      if (items.length !== first) {
        return false;
      }

      if (items.length) {
        return items;
      }
      return false;
    },
    merge(existing, incoming, { args }) {
      const { skip } = args;
      const merged = existing ? existing.slice(0) : [];
      for (let i = skip; i < skip + incoming.length; i += 1) {
        merged[i] = incoming[i - skip];
      }

      return merged;
    },
  };
}
