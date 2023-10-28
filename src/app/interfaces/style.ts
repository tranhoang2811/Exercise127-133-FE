import { IAdvanceFashion } from "./advance-fashion";

export interface IStyle {
  id: string;
  name: string;
  fashions: IAdvanceFashion[];
}
