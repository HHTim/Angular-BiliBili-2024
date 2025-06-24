export interface Course {
  type: string,
  children?: Child[],
}

export interface Child {
  name: string,
  img: string,
  count: number,
  comments: number,
  isFree: boolean,
  price?: number,
}
