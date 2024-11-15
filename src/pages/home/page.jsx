import { CardTransaction } from "./card-transaction";
import { Chart } from "./chart";
import * as functions from '../../functions/functions';

export const HomePage = () => {
    const trading = functions.getFromLocalStorage("trading")
  return (
    <>
    <Chart />
    <div className="grid lg:grid-cols-2 m-7">
      {trading.map((trade, index) =>( 
        <>
        <CardTransaction name={trade.name} price={trade.rising} symbole="€" key={index}/>
        </>)
      )}
      <br></br>
      <br></br> 
    </div>
    </>
  );
};
