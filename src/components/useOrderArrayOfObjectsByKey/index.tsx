interface IUseOrderArrayOfObjectsByKey {
    arr: Array<Object>; 
    key: string;
    deacresing?: boolean
}

export const useOrderArrayOfObjectsByKey = (options: IUseOrderArrayOfObjectsByKey) => {
    const { arr, key, deacresing } = options

    const compare = (options : any) => {
        const {a, b} = options
        const param = key
        return a[param] > b[param] ? 1 : -1 || a[param] < b[param] ? -1 : 1
    }

    const reverseCompare = (options: any) =>{
        const {a, b} = options
        const param = key
        return a[param] > b[param] ? -1 : 1 || a[param] < b[param] ? 1 : -1
    }

    const sortedByKeyMinor = arr.sort(reverseCompare) 
    const sortedByKey = arr.sort(compare)
     
   
    return(
        deacresing ? sortedByKeyMinor : sortedByKey
    )
}
