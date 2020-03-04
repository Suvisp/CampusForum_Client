import Axios from 'axios';

const dataURL = 'http://localhost:3000/api/postaus';

let getAll = async () => {
    let result = await Axios.get(dataURL)
    return result.data;
}

let addNew = async (p) => {
    let newOne = await Axios.post(dataURL, {
        nametag: p.nametag,
        post_content: p.post_content })
    return newOne;
}

export { getAll, addNew }