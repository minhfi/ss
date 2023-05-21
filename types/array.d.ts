interface Array<T> {
  /**
   * This method resets the array length to 0.
   */
  clear(): void

  /**
   * This method return random shuffle item.
   */
  random(): T
}

interface ArrayConstructor {
  /**
   * Ensure that an array-like object is an array.
   */
  ensure<T = any>(array: T | T[], defaults?: T[]): T[]

  // TODO: add more methods
  // combine<K extends string | number | symbol, V = any>(keys: K[], values: V[]): Record<K, V>
}
