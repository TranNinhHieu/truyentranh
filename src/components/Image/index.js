import { getDownloadURL, ref } from 'firebase/storage'
import React, { useEffect, useState } from 'react'
import { firebaseStorage } from '~/config/firebaseConfig'

function Image({ src, alt }) {
    const [imageURL, setImageURL] = useState('')
    useEffect(() => {
        let isSubcribe = true

        if (src)
            getDownloadURL(ref(firebaseStorage, `${src}`))
                .then((url) => {
                    if (isSubcribe) setImageURL(url)
                })
                .catch((error) => console.log(error))
        return () => {
            setImageURL('')
            isSubcribe = false
        }
    }, [src])
    return <img src={imageURL} alt={alt} />
}

export default Image
