import { API_URL } from "./constants";

export const fetchVideosFromFile = async file => {
    const data = new FormData();
    data.append(file.fileType, file);

    try {
        const response = await fetch(API_URL + `/convert-${file.fileType}`, {
            method: 'POST',
            body: data,
            credentials: 'include'
        });
        const results = await response.json();
        return results;

    } catch(error) {
        console.log("fetchVideosFromFile: error", error);
        return;
    }
}

export const mapAPIResultsToFiles = (file, inputFile) => {
    const bytes = new Uint8Array(file.convertedFile.data);
    const blob = new Blob([ bytes ], { type: file.mime });
    const regex = new RegExp("." + inputFile.fileType + "$");
    
    return {
        ...file,
        blob,
        objectUrl: URL.createObjectURL(blob),
        name: `${inputFile.name.split(regex)[0]}.${file.type}`
    };
}

// export const bytesToKiloBytes = bytes => ((bytes / (1024 * 1024)).toFixed(2));
export const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}
