export interface Data {
  columns: { name: string; title: string; checked?: boolean; id: string }[];
  data: {
    [key: string]: any;
  }[];
}
