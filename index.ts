import clock from "@/tools/clock";
import current_playing from "@/tools/current-playing";

const tools = [clock, current_playing];

tools.forEach((tool) => tool());
