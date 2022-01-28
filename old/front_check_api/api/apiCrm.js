/**
 * Crm API client
 *
 * @module
 *
 * @param apiOptions
 * @param apiOptions.$axios Axios instance.
 * @param {string} apiOptions.baseUrl Base url of the API.
 * @param {string} apiOptions.apiKey Api secure key
 */
export default ({ $axios, baseUrl, apiKey }) => ({
    /*sendWorkshopAppointmentRequest(params) {
        return $axios.post( baseUrl  / workshop / appointment, params)
    },

    customerInfoRequest(params) {
        return $axios.post( baseUrl  / customers / info, params)
    },

    sendTestDriveRequest(body, params = {}) {
        return $axios.post( baseUrl  / drive / test, body, {
            params,
        })
    },

    getLocationSalesPoints(location) {
        return $axios.post( baseUrl  / locations / sites, {
            location,
        })
    },

    getSalesPointInfos(codeCe) {
        return $axios.post( baseUrl  / selling - sites / info, {
            codeCe,
        })
    },

    insertProspectRequest(body) {
        return $axios.post( baseUrl  / prospect / insert, body)
    },

    getNonAvailableEvents(codeCe) {
        return $axios.post( baseUrl  / events, {
            codeCe,
        })
    },*/
    getLocation(){
        return $axios.get( baseUrl / locations)
    }
})