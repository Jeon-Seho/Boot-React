interface LoginResult {
    email: string,
    signed: boolean
}

const initState: LoginResult = {
    email: '',
    signed: false
}

async function loginAction (state:LoginResult, formData:FormData) {
    await new Promise(resolve =>setTimeout(resolve, 2000));
    const email = formData.get('email') as string
    const pw = formData.get("pw") as string
    console.log("email ", email, "pw ", pw)
    return{email: email, signed:true}
}

export default loginAction;
