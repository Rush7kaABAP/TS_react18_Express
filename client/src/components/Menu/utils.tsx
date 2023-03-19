import { sortDirections } from '../../constants/sortDirections';

export const getAlternativeSort = (currentSort: string): string =>
  currentSort === sortDirections.asc ? sortDirections.desc : sortDirections.asc;
