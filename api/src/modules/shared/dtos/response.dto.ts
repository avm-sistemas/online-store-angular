import { IResponse } from "../interfaces/iresponse.interface";

export class ResponseDto implements IResponse {
    
    success: boolean;
    data: any;
    error: any;
    message: string;

    constructor() {
        this.success = false;
        this.data = null;
        this.error = null;
        this.message = '';
    }
        
}