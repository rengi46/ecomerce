module.exports = (request, response, delegate, next) => {
  console.log('Auth middleware');
  // Do something
  next();
}