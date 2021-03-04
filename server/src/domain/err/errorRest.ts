
export class ErrorREST extends Error {
    public response: { status: number; message: string; stack: string  };
 
     constructor(error: { status: number, message: string, stack: string }, ...args: any) {
        super(...args);
        this.response = {status: error.status, message: error.message, stack: error.stack || 'undefined'};
    }
    getResponse(){
        return this.response
    }
 }