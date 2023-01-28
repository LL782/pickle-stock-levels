import styles from "@/styles/ItemBar.module.css";
import { ItemSummary } from "./ItemSummary";
import { ItemSelect } from "./ItemSelect";
import { StockData } from "@/examples/stockInDays";

export const ItemBar = ({ data }: { data: StockData }) => (
  <header className={styles.itemBar}>
    <ItemSummary item={data} />
    <ItemSelect
      allItems={data.allItems}
      id={data.itemId}
      name={data.itemName}
      slug={data.slug}
    />
  </header>
);
