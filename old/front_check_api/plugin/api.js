import apiCrm from '@/api/apiCrm'

export default ( {$axios}, inject ) =>  {
    inject ( 'api', {crm:apiCrm({
        $axios,
        baseURL: 'https://dps-api-crm.herokuapp.com',
        apiKey: null
    })})

}