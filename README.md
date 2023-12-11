# Stream Tools
Nothing new, these tools already exist but I wanted to make my own, for my personal use. If you stumble across this and want to use it - feel free.

## Tools
- [x] Current Playing (Spotify MacOS only)
- [x] System Clock

...i'll add more if I ever need them.

## Get Started

Clone this repository
```bash
// via SSH
git clone github@github.com:mwikala/stream-tools

// or via HTTPs
git clone https://github.com/mwikala/stream-tools.git
```


Install dependencies:

```bash
bun install
```

Then run ✅:

```bash
bun start
```

Inside the [outputs](./outputs/) directory, files corresponding to each tool's filename will be created, suffixed with `.txt` instead of `.ts`. Use these files as the input for your [OBS](https://obsproject.com/) sources.


## Configuration

If you want to configure a tool, you can edit the [config.json](./config.json).
