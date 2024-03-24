
export interface product {
    title: string
    price: number
    imageCover: string
    category: categoryprod
    ratingsAverage: number
    _id?:string
  }
  
  export interface categoryprod {
    name: string
  }
  
