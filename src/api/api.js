import axios from "axios"

const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api'
})

export const characters = {
    getAllCharacters(params) {
        return instance.get('/character', { params })
    }
}
