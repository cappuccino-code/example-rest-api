const BASE_URL = `http://localhost:3000`
/**
 * @typedef {Object} APIOptions
 * @property {string} route the route url for the requested resource ex: route: '/users'
 * @property {string} data he request body to be JSON.stringified
 */

/**
* Get the data from the supplied route
* @param {APIOptions} options
* @returns {Object} Data Source Results
*/
async function getFromSkillsGuildAPI(options) {
    // get the route from the options
    const { route, data } = options

    // fetch the datasource with the supplied route
    const response = await fetchData({ route, data })
    console.log(response)
    return response
}

async function fetchData({ route, data }) {
    const url = `${BASE_URL}${route}`
    // create headers to define that we will be accepting json data
    let headerParams = new Headers()
    headerParams.append('Content-Type', 'application/json')
    headerParams.append('Accept', 'application/json')
    // if we were supplied data we create a POST request otherwise we create a get request
    let request = (!data)
        ? new Request(url, {
            headers: headerParams,
            method: 'GET'
        })
        : new Request(url, {
            headers: headerParams,
            method: 'POST',
            body: JSON.stringify(data)
        })

    // preform the fetch if the response is not ok, throw an error with the response text
    const response = await fetch(request)
    // if (!response.ok) throw new (response.statusText) // in react 
    if (!response.ok) console.error(response.statusText)

    return response.json()
}