export interface IUseRemoveDuplicate {
    arr: Array<string | number>
}

export const useRemoveDuplicate = (arr: IUseRemoveDuplicate) => {
  const arrayDuplicates = arr
  const arrayFilters = Array.from(new Set([arrayDuplicates]))
  return arrayFilters
}

