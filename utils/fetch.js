const api_key = 'r9OIvBqLVf0lmufgFeioV5cNjatxp1UmDvz6J4JR'
const api_url = 'https://api.nasa.gov/planetary/apod?api_key=' + api_key

export default async (urlParams) => {
    try {
        const response = await fetch(api_url+(urlParams?urlParams:''));
        const data = await response.json();
        return data;
    } catch (e) {
        console.error(e)
    }
}