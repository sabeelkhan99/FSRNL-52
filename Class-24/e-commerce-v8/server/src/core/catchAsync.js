function catchAsync(callback) {
    return (req, res, next) => {
        callback(req, res, next)
            .catch((err) => {
                next(err);
            })
    }
}


function catchAsyncV1(callback) {
    return async(req, res, next) => {
        try {
            await callback(req, res, next);
        }
        catch (err) {
            next(err);
        }
    }
}

module.exports = catchAsync;