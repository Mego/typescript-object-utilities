import { TestObject } from './common'
import arrayToMap from '../arrayToMap'
import { ObjectMap } from '../types/map'

describe('arrayToMap', () => {
  it('should transform an array to an object map', () => {
    const items: TestObject[] = [
      {
        id: '1',
        foo: 1,
        bar: 'number one',
      },
      {
        id: '2',
        foo: 2,
        bar: 'number 2',
      },
    ]

    const idMapper = arrayToMap('id')
    const objectMap = idMapper(items)

    const expected: ObjectMap<TestObject, 'id'> = {
      '1': {
        id: '1',
        foo: 1,
        bar: 'number one',
      },
      '2': {
        id: '2',
        foo: 2,
        bar: 'number 2',
      },
    }

    expect(objectMap).toEqual(expected)
  })
})
