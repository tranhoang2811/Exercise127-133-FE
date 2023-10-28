import { IStyle } from "./style";

export interface IAdvanceFashion {
  id: string;
  title: string;
  detail: string;
  thumbnail: string;
  styleId: string;
  style?: IStyle[]
}
