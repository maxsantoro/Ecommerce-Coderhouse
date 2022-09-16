let is_ok = true;

const fetchProductos = (time, task) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (is_ok) {
                resolve(task);
            } else {
                reject("Error FetchingProducts");
            }
        }, time);
    });
}

export default fetchProductos;