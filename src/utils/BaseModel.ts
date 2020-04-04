export interface IBaseModel {
  success: boolean;
  data?: any;
  message?: string;
}
export class BaseModel implements IBaseModel {
  success: boolean;
  data?: any;
  message?: string;

  constructor(success: boolean, data?: any, message?: string) {
    this.success = success;
    this.data = data;
    this.message = message;
  }

  static success(data?: any, message?: string): IBaseModel {
    return new BaseModel(true, data, message);
  }
  static fail(message?: string, data?: any) {
    return new BaseModel(false, data, message);
  }
}
