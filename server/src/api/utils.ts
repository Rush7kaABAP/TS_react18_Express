import {TUId} from '../model/backendModel';

const reply = (res:any, body:any, timeout:number = 1000, status:number = 200): NodeJS.Timeout =>
  setTimeout(():any => {
    res.status(status).json(body);
  }, timeout);

const getById = (entities : Array<Object>): (Object | undefined) => 
  (id:TUId): (Object | undefined) =>
  entities.find((entity:any) => entity.id === id);

module.exports = { reply, getById };
