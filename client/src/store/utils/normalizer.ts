export const normalizer = (entities:Array<object>, idKey: string = 'id'): object => {
    return {
        entities: entities.reduce((acc:any, entity:{ [key: string]: any }) => {
            acc[entity[idKey]] = entity;

            return acc;
        }, {}),
        ids: entities.map((entity:{ [key: string]: any }) => entity[idKey]),
    }
}