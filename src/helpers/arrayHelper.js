export function insertOrUpdate(items, item, compare) {
    const index = items.findIndex(i => compare(i, item));
    if(index > -1){
        return [...items.slice(0, index), item, ...items.slice(index+1)];
    }
    return [item, ...items.slice(index+1)];
}
