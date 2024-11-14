import { CardTransaction } from "./card-transaction";
import { Chart } from "./chart";

export const HomePage = () => {
  return (
    <div className="grid lg:grid-cols-2 m-7">
      <Chart />
      <CardTransaction name="Transaction" price={100} symbole="€" />
      <br />
      <CardTransaction name="Transaction" price={-200} symbole="€" />
      <br />
      <CardTransaction name="Transaction" price={500} symbole="€" />
      <br />
    </div>
  );
};
