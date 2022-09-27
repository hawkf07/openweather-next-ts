import axios from "axios";
import { z } from "zod";
import { env } from "../../../env/server.mjs";
import type {WeatherDataResponseType} from '../../../types/index'
import { createRouter } from "../context";

export const byLocationRouter = createRouter().query("getData", {
  input: z.object({
    lat: z.number().nullish(),
    long: z.number().nullish(),
  }),
  async resolve({ input }) {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${input.lat}&lon=${input.long}&appid=${env.OPENWEATHER_API_KEY}`
      );
      const data: WeatherDataResponseType = await response.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  },
});
