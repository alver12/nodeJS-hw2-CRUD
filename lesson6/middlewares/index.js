module.exports = {

    authMiddleware: require('./auth'),
    carMiddleware: require('./car-validity.middleware'),
    fileMiddleware: require('./file'),
    userMiddleware: require('./user-validity.middleware'),
    
};