const {
  OK,
  INTERNAL_SERVER_ERROR,
  INVALID_PAYLOAD
} = require('@evershop/evershop/src/lib/util/httpStatus');

// eslint-disable-next-line no-unused-vars
module.exports = async (request, response, delegate, next) => {
  const { age } = request.body;
  try {
    // Verify if age is above 18
    if (age && age >= 18) {
      // Set the age verified cookie
      response.cookie('age-verified', 1, {
        maxAge: 1000 * 60 * 60 * 24  * 10
      });
      response.status(OK);
      response.json({
        data: {
          age : age
        }
      });
    } else {
      response.status(INVALID_PAYLOAD);
      response.json({
        error: {
          status: INVALID_PAYLOAD,
          message: 'Age must be above 18'
        }
      });
    }
  } catch (e) {
    response.status(INTERNAL_SERVER_ERROR);
    response.json({
      error: {
        status: INTERNAL_SERVER_ERROR,
        message: e.message
      }
    });
  }
};
