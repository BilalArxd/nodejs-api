import { Router } from "express";
import { IService } from "./Service";
import { BaseModel } from "../../utils/BaseModel";

export interface IBaseController<T> {
  add(req: any, res: any, next: any): any;
  delete(req: any, res: any, next: any): any;
  get(req: any, res: any, next: any): any;
  getSingle(req: any, res: any, next: any): any;
  update(req: any, res: any, next: any): any;
}

export class BaseController<T> implements IBaseController<T> {
  service: IService<T>;
  constructor(service: IService<T>) {
    this.service = service;
  }

  add(req: any, res: any, next: any): any {
    const user = req.body;
    var addedUser = this.service.add(user);
    if (addedUser != null) {
      res.status(201).send(BaseModel.success(addedUser, null));
    } else {
      res.status(404).send(BaseModel.fail("User not found."));
    }
  }
  delete(req: any, res: any, next: any): any {
    const id = parseInt(req.params.id);
    var response = this.service.delete(id);
    if (response) {
      res
        .status(202)
        .send(BaseModel.success(null, "User deleted successfully."));
    } else {
      res.status(404).send(BaseModel.fail("User not found."));
    }
  }
  get(req: any, res: any, next: any): any {
    var collection = this.service.get();
    res.status(200).send(BaseModel.success(collection));
  }
  getSingle(req: any, res: any, next: any): any {
    const id = parseInt(req.params.id);
    var users = this.service.getSingle(id);
    if (users !== null) {
      res.status(200).send(BaseModel.success(users, null));
    } else {
      res.status(404).send(BaseModel.fail("User not found."));
    }
  }
  update(req: any, res: any, next: any): any {
    const id = parseInt(req.params.id);
    const user = req.body;
    const updatedUser: any = this.service.update(id, user);
    if (updatedUser !== null) {
      res.status(200).send(BaseModel.success(updatedUser, null));
    } else {
      res.status(404).send(BaseModel.fail("User not found."));
    }
  }
}
