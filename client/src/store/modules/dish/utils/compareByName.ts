import { sortDirections } from '../../../../constants/sortDirections';

export const compareDishesByName = (
  { name: nameA } : {name:any},
  { name: nameB } : {name:any},
  sortDirection: any
) => {
  if (nameA < nameB) {
    return sortDirection === sortDirections.asc ? 1 : -1;
  }

  if (nameA > nameB) {
    return sortDirection === sortDirections.desc ? -1 : 1;
  }

  return 0;
};
