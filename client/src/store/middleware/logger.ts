import { TFrontendAction } from '../../model/frontendModel';

export const logger = (store:any) => (next: (a:any)=> void) => (action: TFrontendAction) :void => {
  console.log(action);
  next(action);
};
