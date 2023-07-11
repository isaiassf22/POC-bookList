function invalidBody(){
    return{
        type:"invalidSintax",
        message:"it's information  not in the format, please try again."
    }
}

function userExists(){
    return{
        type:"userExists",
        message: "user already exists, choose another email or user."
    }
}

function userNotFound(){
    return{
        type: "userNotFound",
        message:"user or password are wrong"
    }
}

function deniedAcess (){
    return{
        type: "Unathorized",
        message:"token acess went wrong"
    }
}

export {invalidBody, userExists, userNotFound, deniedAcess}