export const goToLogin = (history) => {
    history.pushState("/login")
}

export const goToSignup = (history) => {
    history.pushState("/signup")
}

export const goToImageList = (history) => {
    history.pushState("/")
}

export const goToAddImage = (history) => {
    history.pushState("/create-image")
}

export const goToDetails = (history, id) => {
    history.pushState(`/detail/${id}`)
}