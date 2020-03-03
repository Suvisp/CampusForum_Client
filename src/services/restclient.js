import Axios from 'axios';

const dataURL = 'http://localhost:3000/api/postaus';

let getAll = async () => {
    let result = await Axios.get(dataURL)
    // return result.data;
    return result;
}

// let addNew = async (p) => {
//     let newOne = await Axios.post(dataURL, {
//         post_nametag: p.post_nametag,
//         post_content: p.post_content })
//     return newOne;
// }

let addNew = async (p) => {
    let newOne = await Axios.post(dataURL, p)
    return newOne.data;
}

// let deleteOne = async (id) => {
//     let delOne = await Axios.delete(`/api/quotes/${id}`, {
//     })
//     return delOne;
// }

let editPost = async (id, p) => {
    let edited = await Axios.put(dataURL + id, p)
    return edited.data;
}

export { getAll, addNew, editPost }