import Axios from 'axios';

let getAll = async () => {
    let result = await Axios.get('http://localhost:3000/api/postaus')
    // return result.data;
    return result.data;
}

let getOne = async (id) => {
    let getPost = await Axios.get('http://localhost:3000/api/postaus/' + id, {
    })
    return getPost;
}

let addNew = async (p) => {
    let newOne = await Axios.post('http://localhost:3000/api/postaus', p)
    return newOne;
    // return newOne.data;
}

let deletePost = async (id) => {
    let delOne = await Axios.delete('http://localhost:3000/api/postaus/' + id, {
    })
    return delOne;
}

let editPost = async (id, p) => {
    let edited = await Axios.put('http://localhost:3000/api/postaus/' + id, p)
    // return edited.data;
    return edited.data;
}

// let editPost = async (id, post_nametag, post_content) => {
//     let edited = await Axios.put('http://localhost:3000/api/postaus/' + id, {
//         post_nametag: post_nametag,
//         post_content: post_content
//     })
//     return edited
// }

let editLike = async (id, p) => {
    let edited = await Axios.put('http://localhost:3000/api/postaus/' + id, p)
    return edited.data;
}

export { getAll, getOne, addNew, deletePost, editPost, editLike }
