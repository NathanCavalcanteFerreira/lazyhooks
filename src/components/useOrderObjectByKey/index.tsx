
interface IUseOrderObjectByKey {
    objectCollection: Object;
    key: string;
    orderByMajorOrMinor: 0 | 1
}

export const useOrderObjectByKey = (options: IUseOrderObjectByKey) => {

    const { objectCollection, key, orderByMajorOrMinor = 1 } = options;

    const setOrderByKey = orderByMajorOrMinor != 1 ? Object.entries(objectCollection).sort((a, b) => a.hasOwnProperty(key) > b.hasOwnProperty(key) ? -1 : 1) :
        Object.values(objectCollection).sort((a, b) => a.hasOwnProperty(key) > b.hasOwnProperty(key) ? 1 : -1)

    const setOrderByKeyConverse = setOrderByKey.reduce((acc,[k,v])=>(acc[k]=v,acc),{});

    return setOrderByKeyConverse
}

