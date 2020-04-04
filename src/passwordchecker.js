function password_is_valid(password){
    let message = "password should";
    try{
    if(password == "") throw `${message } exist`
    if(password.length < 8) throw `${message } atleast 8 characters`
    if (password.match(/[a-z]/g) == null) throw `${message } have one lower character`
    if (password.match(/[A-Z]/g) == null) throw `${message } have uppercase letters`
    if (password.match(/[{(!@#$%^&*.,\')}]/g) == null) throw `${message } have atleast one special character`
    if (password.match(/[0-9]/g) == null) throw `${message } have have atleast one number`
    return `password is valid!`;
    } catch (error) {
    console.error(`Invalid password: ${error}`)
    } return password
    }
    console.log(password_is_valid("Yanga123@"));


    function password_is_Okey(password){
        let message = "password should";
        try{
        if(password == "") throw `${message } exist`
        if(password.length < 8) throw `${message } atleast 8 characters`
        if (password.match(/[a-z]/g) == null) throw `${message } have one lower character`
        if (password.match(/[A-Z]/g) == null) throw `${message } have uppercase letters`
        if (password.match(/[{(!@#$%^&*.,\')}]/g) == null) throw `${message } have atleast one special character`
        if (password.match(/[0-9]/g) == null) throw `${message } have have atleast one number`
        return `password is Okey!`;
        } catch (error) {
        console.error(`Invalid password: ${error}`)
        } return password
        }
        console.log(password_is_Okey("Yanga123@"));

        module.exports 