import { features } from './features';

export const dialects = {
 redshift: {
    name: "REDSHIFT",
    display: "AWS Redshift",
    features: ["formatter", "digest", "etl_perf"]
  },
  mysql: {
    name: "MYSQL",
    display: "MySQL",
    features: ["formatter", "digest"]
  },
  postgres:{
    name: "POSTGRESQL",
    display: "PostgreSQL",
    features: ["formatter", "digest"]
  }
};

export function default_url(k) {
  return "/" + dialects[k].name.toLowerCase() + "-" +
    features[dialects[k].features[0]];
}

export function all_urls(k) {
  return dialects[k].map((f) => {
    return "/" + dialects[k].name.toLowerCase() + "-" +
      features[f];
  })
}
