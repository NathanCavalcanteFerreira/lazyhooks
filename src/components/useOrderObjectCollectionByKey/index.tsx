interface IUseOrderObjectCollectionByKey {
    objectCollection: Object;
    key: string;
    order: 'asc' | 'desc'
}

export const useOrderObjectCollectionByKey = (options: IUseOrderObjectCollectionByKey) => {

    const { objectCollection, key, order = 'asc' } = options;
    
    if(Object.entries(objectCollection).length > 1){
    
        const compare = (options: any) => {
            const {a, b} = options;
            const param = key;
            return(
                order != 'asc' ? a[1][param] > b[1][param] ? -1 : 1 || a[1][param] < b[1][param] ? 1 : -1 :
                 a[1][param] > b[1][param] ? 1 : -1 || a[1][param] < b[1][param] ? -1 : 1
            )
        }
          
        const setOrderByKey =  Object.entries(objectCollection).sort(compare).reduce((acc,[k,v])=>(acc[k as keyof Object]=v,acc),{})
        return setOrderByKey

    }
    return
    
}
