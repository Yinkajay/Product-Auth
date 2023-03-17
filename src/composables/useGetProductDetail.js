export default async function (id) {
    const response = await fetch('https://dummyjson.com/products/' + id)
    const responseData = await response.json()
    console.log(responseData)
    const { title, category, description, rating, images } = responseData
    return [
        title,
        category,
        description,
        rating,
        images
    ]
}