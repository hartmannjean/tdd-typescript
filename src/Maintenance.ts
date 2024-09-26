import { MaintenanceEntity } from "./MaintenanceEntity";

export class Maintenance {

  public scheduleMaintenance(params: MaintenanceEntity): boolean {
    console.log(params)
    return params.date < new Date(Date.now()) ? false : true
  }
}