import { MapItem, ObjectMap } from './types'

const arrayToMap = <T extends MapItem<K>, K extends string>(key: K) => (
  items: T[]
) =>
  items.reduce<ObjectMap<T, K>>(
    (acc, item) => ({ ...acc, [item[key]]: item }),
    {}
  )

export default arrayToMap
