import {FC, PropsWithChildren} from 'react';

import {DepositCardForm} from "@/components/dash/deposit/DepositCardForm";

const DepositCardLayout: FC<PropsWithChildren> = ({children}) => {
  return (
    <DepositCardForm>
      {children}
    </DepositCardForm>
  );
};

export default DepositCardLayout;
