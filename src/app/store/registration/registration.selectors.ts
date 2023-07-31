import { AppState } from '../app.state';

export const fetchRolesList = (state: AppState) =>
  state.registration?.rolesList || [];
