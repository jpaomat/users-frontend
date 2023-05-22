import { sortDataById } from '../sortDataById';

describe('sortDataById tests', () => { 
    it('should organized data', () => {
        const dataTest = [{id: '1'}, {id: '2'}];
        const result = sortDataById(dataTest);
        expect(result).toStrictEqual([{id: '2'}, {id: '1'}]);
    });

    it('should verify if data is ready', () => {
        const dataTest = [{id: '2'}, {id: '1'}];
        const result = sortDataById(dataTest);
        expect(result).toStrictEqual(dataTest);
    });
 });