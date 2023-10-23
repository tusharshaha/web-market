interface Search {
  sortBy: string;
  fields: string;
  skip: number;
  limit: number;
}

type Query = {
  filters: string;
  search: Search;
};

export default function flexibleQuery(query: any): Query {
  let filters = { ...query };
  const excludeFields = ["sort", "fields", "limit", "page"];
  // separate filters from query
  excludeFields.forEach((field) => delete filters[field]);
  let filtersString = JSON.stringify(filters);
  // validate operator with $ sign
  filtersString = filtersString.replace(
    /\b(gt|gte|lt|lte)\b/g,
    (match) => `$${match}`,
  );
  filters = JSON.parse(filtersString);

  const search: Search = {} as Search;

  if (query.sort) {
    search.sortBy = query.sort.split(",").join(" ");
  }
  if (query.fields) {
    search.fields = query.fields.split(",").join(" ");
  }
  if (query.page) {
    const { page = 1, limit = 10 } = query;
    search.skip = (page - 1) * parseInt(limit);
    search.limit = limit;
  }
  return { filters, search };
}
