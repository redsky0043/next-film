// import { ILanguage, ISettingsData } from 'types'
// import { createSlice } from '@reduxjs/toolkit'
//
// const initialState: ISettingsData = {
//   bundles: [],
//   languages: [],
//   siteName: '',
//   currentLanguage: 'en',
// }
//
// const generateLanguageLabel = (language: string): ILanguage => {
//   let internalLanguage
//
//   if (language === 'en') {
//     internalLanguage = 'gb'
//   } else if (language === 'uk') {
//     internalLanguage = 'ua'
//   } else {
//     internalLanguage = language
//   }
//
//   return {
//     value: language,
//     label: internalLanguage,
//   }
// }
//
// export const mainSlice = createSlice({
//   name: 'mainData',
//   initialState,
//   reducers: {
//     addMainData: (state, {
//       payload: {
//         bundles,
//         siteName,
//         languages,
//       },
//     }) => {
//       state.bundles = bundles
//       state.siteName = siteName
//       state.languages = languages.map(generateLanguageLabel)
//     },
//     setLanguage: (state, { payload: newLang }) => {
//       state.currentLanguage = newLang
//     },
//   },
// })
//
// export const { reducer, actions } = mainSlice
