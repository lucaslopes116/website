import pt from '../dictionaries/pt.json'
import en from '../dictionaries/en.json'

const dictionaries = { en, pt }

export type Locale = keyof typeof dictionaries
export type Dictionary = typeof pt

export const locales: Locale[] = ['pt', 'en']

export const getDictionary = (locale: Locale): Dictionary => {
  return dictionaries[locale] ?? dictionaries.pt
}
