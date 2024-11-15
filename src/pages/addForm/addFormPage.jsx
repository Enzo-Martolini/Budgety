import { ChartForm } from "./chartForm";
import { FormTransaction } from "./form";

export const AddTransaction = () => {
  return (
    <>
      <div className="sm:m-4 flex-col items-center justify-center lg:flex items-center">
        <div>
          <ChartForm />
        </div>
        <div className="w-full lg:w-1/2 lg:max-w-none">
          <FormTransaction />
        </div>
      </div>
    </>
  );
};


