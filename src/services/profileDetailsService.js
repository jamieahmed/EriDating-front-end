import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/profileDetails`

async function create(profileDetail) {

    console.log(profileDetail)
    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokenService.getToken()}`
        },
        body: JSON.stringify(profileDetail)
    })
    return res.json()
}


async function getAll() {
    const res = await fetch(BASE_URL)
    return res.json()
}

export {
    create, getAll
}