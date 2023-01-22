
interface IUseOrderAlphabetical{
    arr: Array<string>;
    language?: string 
}

export const useOrderAlphabetical = ({arr, language = "pt-BR"} : IUseOrderAlphabetical) => {
  const primaryArr = arr
  const collator = new Intl.Collator(language)
  const setFilterOrderArr = primaryArr.sort(collator.compare)

  return setFilterOrderArr
}
