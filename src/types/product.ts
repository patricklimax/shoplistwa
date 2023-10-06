import { ReactNode } from 'react';

export type ProductProps = {
  id: string;
  title: string;
  isCompleted: boolean;
  amount: string;
  unit: string;
  category: string;
  check?: ReactNode;
  edit?: ReactNode;
  remove?: ReactNode;
};
