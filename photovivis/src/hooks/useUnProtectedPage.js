import { useHistory } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import { goToImageList } from '../routes/coordinator'

 const useUnProtectedPage = () => {
    const history = useHistory()
    useLayoutEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            goToImageList(history)
        }
    }, [history])
}

export default useUnProtectedPage