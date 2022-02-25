
export const local_store = ( key, data) => {

    localStorage.setItem(key, JSON.stringify(data));
}

export const local_get = (key) => {
    return  JSON.parse( localStorage.getItem(key) );
}

