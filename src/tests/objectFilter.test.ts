import objectFilter from '../objectFilter'
import { TestObject } from './common'
import { ObjectMap } from '../types'

describe('objectFilter', () => {
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
  describe('filter with same key', () => {
    it('should return a subset with same mapping', () => {
      const result = objectFilter<TestObject, 'id'>((obj) => obj.foo === 3)(
        objMap,
        'id'
      )
      const expected: ObjectMap<TestObject, 'id'> = {
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

      expect(result).toEqual(expected)
    })
  })
  describe('filter with different key', () => {
    it('should return a subset with new mapping', () => {
      const result = objectFilter<TestObject, 'id', 'bar'>(
        (obj) => obj.foo === 3
      )(objMap, 'bar')
      const expected: ObjectMap<TestObject, 'bar'> = {
        baz: {
          id: '2',
          foo: 3,
          bar: 'baz',
        },
        baa: {
          id: '3',
          foo: 3,
          bar: 'baa',
        },
      }

      expect(result).toEqual(expected)
    })
  })
})
