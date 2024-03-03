import { createContext } from "react";

interface iSettupContext {
  GetContextSettup: any;
  SetContextSettup: Function | ((data: any) => void);
}

export const SettupContext = createContext<iSettupContext>({
  GetContextSettup: null,
  SetContextSettup: () => { }
});