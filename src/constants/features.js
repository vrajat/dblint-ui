import SqlText from "../components/SqlText";
import Comingsoon from "../components/Comingsoon";

export const features = {
  formatter: {
    url: "sql-formatter",
    display: "SQL Format",
    api: "pretty",
    actionString: "Pretty Print!",
    icon: 'fa fa-align-center',
    attributes: {
      onClick: "this.handleFormatClick"
    },
    component: SqlText
  },
  digest: {
    url: "sql-digest",
    display: "SQL Digest",
    api: "digest",
    actionString: "Generate Digest",
    icon: 'fa fa-gears',
    component: SqlText
  },
  etl_perf: {
    url: "etl-perf",
    display: "ETL Performance",
    icon: 'fa fa-fighter-jet',
    component: Comingsoon
  }
};
