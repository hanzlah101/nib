export const MAGIC_LINK_EXPIRATION = 15 // minutes

export const IS_APPLE =
  typeof window !== "undefined" &&
  /Mac|iPod|iPhone|iPad/.test(navigator.platform)
