import dayjs from "dayjs";
import { config, output } from "@/helpers";

const FORMAT = config("clock").format;

/** @param {number} frequency How often to refresh the time in seconds */
const clock = (frequency: number = 1) => {
  update();
  setInterval(update, frequency * 1000);
};

const update = (format?: string) => {
  const time = dayjs().format(format || FORMAT);
  output("clock", time);
};

export default clock;
