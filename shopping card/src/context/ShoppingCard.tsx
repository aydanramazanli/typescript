import { useContext, createContext, ReactNode } from "react";

type ShoppingCardProviderProps = {
  children: ReactNode;
};

const ShoppingCardContext = createContext({});

export function ShoppingCard() {
  return useContext(ShoppingCardContext);
}
export function ShoppingCardProvider({ children }: ShoppingCardProviderProps) {
  return (
    <ShoppingCardContext.Provider value={{}}>
      {children}
    </ShoppingCardContext.Provider>
  );
}
