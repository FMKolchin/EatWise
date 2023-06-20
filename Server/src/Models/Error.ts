export class CustomError extends Error {
    constructor(public readonly statusCode: number, message: string) {
      super(message);
      Object.setPrototypeOf(this, new.target.prototype);
    }
  }
  
 export class NotFoundError extends CustomError {
    constructor(message: string = 'Not found') {
      super(404, message);
    }
  }

  export class AuthenticationError extends CustomError {
    constructor(message: string = 'Authentication faild') {
        super(401, message);
      }
  }

  export class ClientError extends CustomError {
    constructor(message: string = 'Bad Request') {
      super(400,message);
    }
  }
  
  
  