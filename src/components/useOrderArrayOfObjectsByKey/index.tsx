interface IUseOrderArrayOfObjectsByKey {
    arr: Array<Object>; 
    key: string;
    order: 'asc' | 'desc'
}

export const useOrderArrayOfObjectsByKey = (options: IUseOrderArrayOfObjectsByKey) => {
    const { arr, key, order = 'asc' } = options

    if(arr.length > 1){
        const compare = (options : any) => {
            const {a, b} = options
            const param = key
            return(
                order != 'asc' ?  a[param] > b[param] ? -1 : 1 || a[param] < b[param] ? 1 : -1 : 
                a[param] > b[param] ? 1 : -1 || a[param] < b[param] ? -1 : 1
            )
        }    
        const sortedByKey = arr.sort(compare)       
        return sortedByKey
    }
    return
    
}
