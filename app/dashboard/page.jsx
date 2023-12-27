// import { cards } from "../lib/data";
import Card from "../ui/dashboard/card/card";
import RightBar from "../ui/dashboard/rightbar/rightbar"
import Chart from "../ui/dashboard/chart/chart";
import styles from "../ui/dashboard/dashboard.module.css";

import Transactions from "../ui/dashboard/transactions/transactions";

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          {/* {cards.map((item) => (
            <Card item={item} key={item.id} />
          ))} */}
          <Card/>
          <Card/>
          <Card/>
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <RightBar />
      </div>
    </div>
  );
};

export default Dashboard;