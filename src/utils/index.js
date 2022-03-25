export const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1)

export const getDataTes = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json()

    return { succes: true, result: data }
}