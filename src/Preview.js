import React from 'react'
import { useSelector } from 'react-redux'
import { selectCameraImage } from './features/cameraSlice'
import './Preview.css'
function Preview() {
    const cameraImage = useSelector(selectCameraImage)

    return (
        <div className="preview">
            <h1>This is a preview</h1>
            <img src={cameraImage} alt="preview" />

        </div>
    )
}

export default Preview
