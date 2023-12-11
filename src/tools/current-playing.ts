// @ts-expect-error
import spotify, { TrackInfo } from "spotify-node-applescript";
import { config, output } from "@/helpers";

const FORMAT = config("current-playing").format;

/** @param {number} frequency the frequency to check for a song change in seconds. */
const current_playing = (frequency: number = 5) => {
  update();
  setInterval(update, frequency * 1000);
};

const update = () => {
  try {
    spotify.getTrack((_, track) => {
      if (!track) {
        output("current-playing", "");
        return;
      }

      output("current-playing", parseFormat(track));
    });
  } catch (error) {
    console.error("Failed to retrieve Spotify application data:", error);
  }
};

const parseFormat = (track: TrackInfo) => {
  const map = {
    "%artist%": track.artist,
    "%album%": track.album,
    "%name%": track.name,
    "%artwork_url%": track.artwork_url,
  };

  return FORMAT.replace(
    /%\w+%/g,
    (placeholder: keyof typeof map) => map[placeholder] || placeholder
  );
};

export default current_playing;
