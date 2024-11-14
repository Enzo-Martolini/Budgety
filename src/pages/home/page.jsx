import { CardTransaction } from "./card-transaction";
import { Chart } from "./chart";

export const HomePage = () => {
  return (
    <div className="grid lg:grid-cols-2 m-7">
      <Chart />
      <CardTransaction name="Transaction" price={1650.84} symbole="€" />
      <br></br>
      <CardTransaction name="Transaction" price={-650} symbole="€" />
      <br></br>
      <CardTransaction name="Transaction" price={-124.56} symbole="€" />
      <br></br>
      <CardTransaction name="Transaction" price={-59.99} symbole="€" />
      <br></br>
      <CardTransaction name="Transaction" price={100} symbole="€" />
      <br></br>
      <CardTransaction name="Transaction" price={-9.90} symbole="€" />
      <br></br>
      <CardTransaction name="Transaction" price={-1.99} symbole="€" />
      <br></br>
      <CardTransaction name="Transaction" price={-32.50} symbole="€" />
      <br></br> 
    </div>
  );
};
