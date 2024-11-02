import { redirect } from "react-router-dom";

const isAuthenticated = () => {
    const token = localStorage.getItem('token');

    if(token) {
        throw redirect('/')
    } else {
        return null
    }
}

const handleVerificationProtected = () => {
    const token = localStorage.getItem('token');

    if(!token) {
        throw redirect('/signin')
    } else {
        return null
    }
}

export {
    isAuthenticated,
    handleVerificationProtected
}