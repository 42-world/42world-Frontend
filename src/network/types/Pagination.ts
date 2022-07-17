export type Meta = {
  page: number;
  take: number;
  totalCount: number;
  pageCount: number;
  hasPreviousPage: Boolean;
  hasNextPage: Boolean;
};

export interface Pagination<T> {
  data: T[];
  meta: Meta;
}
