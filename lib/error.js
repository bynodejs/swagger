'use strict';

exports.get = (status, msg) => {
  const error = new Error();
  error.status = status;
  error.message = msg;

  return error;
};
