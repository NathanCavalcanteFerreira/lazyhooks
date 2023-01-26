interface IUseOrderObjectCollectionByKey {
    objectCollection: Object;
    key: string;
    orderByMajorOrMinor: 0 | 1
}

export const useOrderObjectCollectionByKey = (options: IUseOrderObjectCollectionByKey) => {

    const { objectCollection, key, orderByMajorOrMinor = 1 } = options;
    

    const compare = (options: any) => {
        const {a, b} = options;
        const param = key;
        return a[1][param] > b[1][param] ? 1 : -1 || a[1][param] < b[1][param] ? -1 : 1
    }

    const reverseCompare = (options: any) =>{
        const {a, b} = options;
        const param = key
        return a[1][param] > b[1][param] ? -1 : 1 || a[1][param] < b[1][param] ? 1 : -1
    }


    const setOrderByKey =  Object.entries(objectCollection).sort(compare).reduce((acc,[k,v])=>(acc[k as keyof Object]=v,acc),{})
    const reverSetOrderByKey = Object.entries(objectCollection).sort(reverseCompare).reduce((acc,[k,v])=>(acc[k as keyof Object]=v,acc),{})
  

    return ( !orderByMajorOrMinor ? reverSetOrderByKey : setOrderByKey )
}
