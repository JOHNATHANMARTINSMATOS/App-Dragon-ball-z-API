export interface Planets {
  id:number,
  name:string,
  isDestroyed:boolean,
  description:string,
  image:string,
  deletedAt:any
}

export interface Meta{
  totalItems:number,
  itemCount:number,
  itemsPerPage:number,
  totalPages:number
}

export interface Links{
  first:string,
  previous:string,
  next:string,
  last:string
}
export interface PaginationPlanets{
  items:Planets[];
  meta: Meta;
  links:Links;
}

