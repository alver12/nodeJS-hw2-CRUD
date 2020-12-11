module.exports = {
    checkCarValidity: (req, res, next) => {
        try {
            const car = req.body;

            if (!car.model || !car.year || !car.price) {
                throw new Error ('Car is not valid'); 
            }
    
            next();
        }   catch (e) {
            res.json(e.message);
        }

    }
};