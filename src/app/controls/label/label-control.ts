import { ControlBase } from "src/app/control-base";

export interface LabelControl extends Omit<ControlBase, 'required' | 'key'> {
    text?:String;
}
