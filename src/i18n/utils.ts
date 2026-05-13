export type Lang = 'fr';

export const supportedLangs: Lang[] = ['fr'];

export const defaultLang: Lang = 'fr';

export function getLangFromParam(_param: string | undefined): Lang {
  return 'fr';
}
