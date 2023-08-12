import { EAction } from '../enum/action.enum';

export interface IAction {
  id: EAction;
  name: string;
  heading: string;
  btn: string;
}
