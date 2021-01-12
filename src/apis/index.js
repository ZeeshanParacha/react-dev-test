import axios from 'axios'
const access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjE3MSwiZXhwIjoxNjM5NDY2NjE1fQ.9vE-glLQtV2NT3gNMkqeRkrWWZAhYCqX-_ibs7lC8GY'

export function getContacts(companyId,page) {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://api.dev.pastorsline.com/api/contacts.json?companyId=${companyId}&page=${page}`, {
        headers: {
          'Authorization': `Bearer ${access_token}`
        }
      })
      .then((res) => {
        resolve(res)
      })
      .catch((error) => {
        reject({ error })
      })
  })
}
export function getUsCountries(companyId, countryId,page) {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://api.dev.pastorsline.com/api/contacts.json?companyId=${companyId}&countryId=${countryId}&page=${page}`, {
        headers: {
          'Authorization': `Bearer ${access_token}`
        }
      })
      .then((res) => {
        resolve(res)
      })
      .catch((error) => {
        reject({ error })
      })
  })
}