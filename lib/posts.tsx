import axios from "axios";

const allPostsUrl = 'http://localhost:5000/posts/'

export const getAllPosts = async () => {
    try {
        const response = await axios.get(allPostsUrl)
        return response
    } catch (err) {
        console.error(err)
    }
}