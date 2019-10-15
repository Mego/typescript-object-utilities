export type MapItem<K extends string> = {
  [key in K]: string
}

export type ObjectMap<T extends MapItem<K>, K extends string> = {
  [key: string]: T
}
