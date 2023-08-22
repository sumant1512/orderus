import { ETabCode } from '../enum/tab-code.enum';

export interface ITab {
  id: number;
  name: string;
  code?: ETabCode;
}
