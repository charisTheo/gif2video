const { 
    REACT_APP_API_URL, 
    REACT_APP_DEV_API_URL, 
    NODE_ENV
} = process.env;

const API_URL = NODE_ENV === 'development' ? REACT_APP_DEV_API_URL : REACT_APP_API_URL

export const fetchVideosFromGif = async file => {
    const data = new FormData();
    data.append('gif', file);

    const response = await fetch(API_URL, {
        method: 'POST',
        body: data
    });

    const results = await response.json();

    return results;
}

export const mapAPIResultsToFiles = (file, inputFile) => {
    const bytes = new Uint8Array(file.convertedFile.data);
    const blob = new Blob([ bytes ], { type: file.mime });
    return {
        ...file,
        blob,
        objectUrl: URL.createObjectURL(blob),
        name: `${inputFile.name.split(/\.gif$/)[0]}.${file.type}`
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
