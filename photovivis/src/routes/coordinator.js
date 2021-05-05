export const goToLogin = (history) => {
    history.push("/login")
}

export const goToSignup = (history) => {
    history.push("/signup")
}

export const goToImageList = (history) => {
    history.push("/")
}

export const goToAddImage = (history) => {
    history.push("/create-image")
}

export const goToDetails = (history, id) => {
    history.push(`/detail/${id}`)
}