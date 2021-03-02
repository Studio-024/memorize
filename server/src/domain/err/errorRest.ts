
export class ErrorREST extends Error {
    public response: { status: number; message: string; name: string  };
 
     constructor(error: { status: number, message: string, name: string }, ...args: any) {
        super(...args);
        this.response = {status: error.status, message: error.message, name: error.name};
    }
 }