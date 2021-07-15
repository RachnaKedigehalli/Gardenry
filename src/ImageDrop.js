import close_icon from "./icons/close_icon_green.svg";
import { useRef, useState } from "react";

const ImageDrop = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [imgFile, setImgFile] = useState(null);
    const imageRef = useRef();
    const fileInputRef = useRef();
    const [style, setStyle] = useState({'cursor': 'pointer'});

    const dragOver = (e) => {
        e.preventDefault();
    }

    const dragEnter = (e) => {
        e.preventDefault();
    }
    
    const dragLeave = (e) => {
        e.preventDefault();
    }

    const fileDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        console.log(files);
        if (files.length) {
            handleFiles(files);
        }
    }

    const handleFileInput = () => {
        fileInputRef.current.click();
    }

    const fileSelected = () => {
        if (fileInputRef.current.files.length) {
            handleFiles(fileInputRef.current.files);
        }
    }

    const handleFiles = (files) => {
        if (files.length == 1) {
            const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/x-icon'];
            const file = files[0];
            if (validTypes.indexOf(file.type) === -1) {
                setErrorMessage('File type not permitted');
                console.log('File type not permitted');
                return false;
            }
            var maxSizeInBytes = 10e6;
            if (file.size > maxSizeInBytes) {
                setErrorMessage('File too large');
                console.log('File too large');
                return false;
            }
            previewImage(file);
            setImgFile(file);
        }
        else {
            setErrorMessage("Upload only one image file");
            console.log("Upload only one image file");
            return false;
        }
    }

    const previewImage = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function(e) {
            imageRef.current.src = e.target.result;
        }
        setStyle({});
    }

    const removeImage = (e) => {
        setImgFile(null);
        e.stopPropagation();
    }

    return (
        <div className="drop-container"
            onDragOver={dragOver}
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
            onDrop={fileDrop}
            onClick={handleFileInput}
            style={style}
        >
            <input
                ref={fileInputRef}
                className="file-input"
                type="file"
                onChange={fileSelected}
            />
            {!imgFile && 
            <div className="drop-message">
            Drop an image of the plant here, or select <span>click to browse</span>
            </div>}
            
            {imgFile && 
            <div className="image-preview">
                <img ref={imageRef}></img>
                <div className="image-description">
                    <span>{imgFile.name}</span>
                    <img src={close_icon} onClick={removeImage}/>
                </div>
            </div>}
            
        </div>
    );
}
 
export default ImageDrop;