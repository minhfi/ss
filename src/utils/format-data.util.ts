export const capitalize = (text: string): string => {
  if (!text?.length) {
    return text // Return an empty string if the input is empty
  }

  const firstChar = text.charAt(0).toUpperCase()
  const remainingChars = text.slice(1).toLowerCase()

  return firstChar + remainingChars
}
