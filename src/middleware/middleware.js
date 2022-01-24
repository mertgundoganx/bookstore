'use strict';

const catchErr = (e, req, res, next) => {
    res.json({
       "error message": e.message
    });
    next();
}

module.exports = catchErr;