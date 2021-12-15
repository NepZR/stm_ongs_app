import axios from 'axios';

const API_KEY = '28f8bfbc05d9dfac9c6b4f073617654f'
const imgubb = `https://api.imgbb.com/1/upload?key=${API_KEY}`;

export async function uploadImage(image : FileList) {
    let linkImage = '';
    const data = new FormData();
    data.append('image',image[0])

    await axios.post(imgubb, data).then((response) => {
        console.log(response.data)
        // console.log(response.data.data.url)
        linkImage = response.data.data.url
    }).catch(err => console.log(err))
    return linkImage;
}