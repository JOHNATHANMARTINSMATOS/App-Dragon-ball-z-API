
export interface Characters {
  //Atributos para acesso itens
  id:number;
  name: string;
  ki:string;
  maxki:string;
  race:string;
  gender:string;
  description:string;
  image:string;
  affiliation:string;
  deletedat:any

}
export interface Meta{
  //Atributos Metas
  totalItems:number;
  itemCount:number;
  itemsPerPage:number;
  totalPages:number;
  currentPage:number

}
export interface Link{
  //Atributos Links
  first:string;
  previous:string;
  next:string;
  last:string
}
export interface PaginationCharacter{
  items:Characters[];
  meta:Meta;
  links:Link;
}
