import { ControlBase } from "src/app/control-base";

export interface DropdownControl extends ControlBase {
    options?: {key: string; value:string} [];
}
