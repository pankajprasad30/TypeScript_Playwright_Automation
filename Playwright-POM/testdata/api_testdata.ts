export const restful_api = {
    common_url: "https://api.restful-api.dev/objects",
    newObjectRequest : {
                "name": "Apple MacBook Pro 16",
                "data": {
                    "year": 2019,
                    "price": 1849.99,
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "1 TB"
                }
            },
    headers:  {
        "Content-Type" : "application/json"
    }
}

export const sqatoolsAPI = {
    AuthURL : "https://sqatools.in/wp-json/sqa-api/v1/basic/profile",
    basicAuthHeader : {
        "Authorization" : "Basic c3FhX3VzZXI6c3FhQDEyMw=="
    }

}

export const gorestAPI = {
        UsersURL : "https://gorest.co.in/public/v3/users",
        headers : {
            Authorization: "Bearer gorest_LUSr3GC5tkWzA1U7bd7L8bqnwEjGeLHO6ka6x2eudfW0R7QQK"
        }

}   