import { MapItem, ObjectMap } from './types'
import arrayToMap from './arrayToMap'

const objectMap = <
  T extends MapItem<K>,
  K extends string,
  K2 extends string = K
>(
  mapFn: (item: T) => MapItem<K2>
) => (objMap: ObjectMap<T, K>, key: K2): ObjectMap<MapItem<K2>, K2> =>
  arrayToMap(key)(Object.values(objMap).map(mapFn))

export default objectMap
