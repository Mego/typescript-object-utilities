import objectMap from '../objectMap'
import { TestObject } from './common'
import { ObjectMap } from '../types'

describe('objectMap', () => {
  it('should apply map to object and reindex', () => {
    const objMap: ObjectMap<TestObject, 'id'> = {
      '1': {
        id: '1',
        foo: 1,
        bar: 'bar',
      },
      '2': {
        id: '2',
        foo: 3,
        bar: 'baz',
      },
      '3': {
        id: '3',
        foo: 3,
        bar: 'baa',
      },
    }

    const result = objectMap<TestObject, 'id', 'bar'>((item) => ({
      ...item,
      rab: `${item.id}${item.id}`,
    }))(objMap, 'bar')

    const expected: ObjectMap<TestObject & { rab: string }, 'bar'> = {
      bar: {
        id: '1',
        foo: 1,
        bar: 'bar',
        rab: '11',
      },
      baz: {
        id: '2',
        foo: 3,
        bar: 'baz',
        rab: '22',
      },
      baa: {
        id: '3',
        foo: 3,
        bar: 'baa',
        rab: '33',
      },
    }

    expect(result).toEqual(expected)
  })
})
