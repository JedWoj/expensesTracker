import { prepareData } from "./prepare-data";

const dataToPrepare = {name:'Mazda MX5', age: 17, engine: 1.6, climatization: false};

describe('prepareData tests', () => {
    it('data returns exact array', () => {
        const prepared = prepareData(dataToPrepare);
        expect(prepared).toStrictEqual(dataToPrepare.name);
    })
})