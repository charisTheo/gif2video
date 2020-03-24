const { 
    REACT_APP_API_URL, 
    REACT_APP_DEV_API_URL, 
    NODE_ENV
} = process.env;

export const API_URL = NODE_ENV === 'development' ? REACT_APP_DEV_API_URL : REACT_APP_API_URL

export const MAX_INPUT_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
export const ACCEPTABLE_FILE_MIME_TYPES = [ 'image/gif','video/webm','video/ogg','video/mp4','video/quicktime' ];
