import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://ricardo-carnaval.cdn.prismic.io/',
  headers: {
    'Content-Type': 'application/json',
  },
})
