import { ChartForm } from "./chartForm";
import { FormTransaction } from "./form";

export const AddTransaction = () => {
  return (
    <>
      <div >
        <div className="grid lg:grid-cols-2 m-7">
         <ChartForm />
        </div>
      <div className="grid lg:grid-cols-2 m-7">
        <FormTransaction />
      </div>
      </div>
    </>
  );
};

