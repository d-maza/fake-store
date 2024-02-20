export interface FakeStoreResponse {
  id:          number;
  title:       string;
  price:       number;
  description: string;
  category:    string;
  image:       string;
  rating:      Rating;
}

export interface Rating {
  rate:  number;
  count: number;
}

export const Rate = new Map([
  [1, '★'],
  [2, '★★'],
  [3, '★★★'],
  [4, '★★★★'],
  [5, '★★★★★']
]);
