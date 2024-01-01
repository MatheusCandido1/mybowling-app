export const existingSplits = ['6-7','7-10', '7-9', '8-10', '5-7', '5-10', '5-7-10', '3-7', '2-10', '2-7-10', '3-7-10', '4-7-10',  '6-7-10', '4-6-7-10', '3-6-7-10',]

export function isSplit(pins: string) {
  return existingSplits.includes(pins)
}
