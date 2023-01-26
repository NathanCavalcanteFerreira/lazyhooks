interface IUseOrderAlphabetical{
    arr: Array<string>;
    language?: string 
}

export const useOrderAlphabetical = (options : IUseOrderAlphabetical) => {
  const {arr, language = "pt-BR"} = options
  const collator = new Intl.Collator(language)
  const setFilterOrderArr = arr.sort(collator.compare)

  return setFilterOrderArr
}
