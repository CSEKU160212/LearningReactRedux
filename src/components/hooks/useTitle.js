import React, {useEffect} from 'react'

function useTitle(title) {
    useEffect(()=>{
        window.document.title = title;
    }, [title])
}

export default useTitle
