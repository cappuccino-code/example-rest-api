// quick test app, make request to the /users route
// and display all the items on the page
frontend = {
    init: event => {
        console.log('Frontend App loaded')
        document.getElementById('fakePost').addEventListener('click', frontend.createTestUser)
        frontend.fetch()
    },
    fetch: async () => {
        const response = await getFromSkillsGuildAPI({ route: '/users' })
        responseElement = document.getElementById('response')
        responseElement.innerHTML = ''
        response.forEach(item => {
            responseElement.innerHTML += `<br><li>#${item?.id}: ${item?.firstName} ${item?.email}</li>`
        })
    },
    createTestUser: async ev => {
        ev.preventDefault()
        responseElement = document.getElementById('response')
        let fakeData = {
            firstName: faker.fake("{{name.firstName}}"),
            lastName: faker.fake("{{name.lastName}}"),
            email: faker.fake("{{internet.email}}"),
            password: faker.fake("{{internet.password}}"),
        }
        console.log(fakeData)
        const response = await getFromSkillsGuildAPI({ route: '/users', data: fakeData })
        frontend.fetch() // rerun the fetch to display the new item

        // show the last item in the list by scrolling to the end
        responseElement.scrollTop = responseElement.scrollHeight - responseElement.clientHeight
    }
}

document.addEventListener('DOMContentLoaded', frontend.init)