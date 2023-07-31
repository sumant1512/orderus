export interface IRoles {
  id: number;
  name: string;
  description: string;
  img: string;
  imgAlt: string;
}

export interface IRegistrationState {
  rolesList: Array<IRoles>;
}
