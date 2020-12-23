module.exports = {
    CURRENT_YEAR: new Date().getFullYear(),
    AUTHORIZATION: 'Authorization',

    PHOTO_MAX_SIZE: 2 * 1024 * 1024,
    FILE_MAX_SIZE: 5 * 1024 * 1024,
    PHOTOS_MIMETYPES: [
        'image/gif', 
        'image/jpeg', 
        'image/pjpeg', 
        'image/png', 
        'image/tiff', 
        'image/webp'
    ],

    DOCS_MIMETYPES: [
        'application/msword',
        'application/pdf',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document' 
    ]
}
