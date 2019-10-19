import { MapItem, ObjectMap } from './types'
import arrayToMap from './arrayToMap'

const objectFilter = <
  T extends MapItem<K | K2>,
  K extends string,
  K2 extends string = K
>(
  filterFn: (item: T) => boolean
) => (objMap: ObjectMap<T, K>, key: K2) =>
  arrayToMap(key)(Object.values(objMap).filter(filterFn))

export default objectFilter
