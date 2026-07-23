import config from "./Config";
import { createGet } from "./WebClient";

export const checkHealth = async () => {

    try {
        const resp = await createGet('/health');
        if (resp.status === config.OK_STATUS) {
          
          console.log(resp.data);
        }
      } catch (error) {
        console.error('Health check failed:', error);
      }
}