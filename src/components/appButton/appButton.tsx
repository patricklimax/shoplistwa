import { ReactNode } from "react";

type Props = {
  // title?: string,
  onClick: () => void;
  children: ReactNode;
}

export const AppButton = ({ onClick, children }: Props) => {
  return (
    <button
      onClick={onClick}>
      {children}
    </button>
  )
}