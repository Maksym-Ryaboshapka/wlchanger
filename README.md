# WLChanger

A wallpaper changer script for Wayland compositors with animated transitions and rofi integration.

## Quick Navigation
- [Installation](#installation)
- [Usage](#usage)  
- [Configuration](#configuration)

## Dependencies

WLChanger requires the following dependencies:

- **swww** - Wayland wallpaper daemon
- **rofi** - Application launcher/menu system

### Installing Dependencies

#### Debian/Ubuntu
```bash
$ sudo apt update
$ sudo apt install rofi
# Check https://github.com/Horus645/swww for installation instructions
```

#### Arch Linux
```bash
$ sudo pacman -S rofi swww
```

#### Fedora
```bash
$ sudo dnf install rofi
$ sudo dnf install swww
```

## Installation

### Method 1: Download Pre-built Binary

1. Download the latest `wlchanger-linux-x64` file from the [releases page](https://github.com/Maksym-Ryaboshapka/wlchanger/releases)
2. Start the wallpaper daemon:
   ```bash
   $ swww-daemon
   ```
3. Make the binary executable:
   ```bash
   $ chmod +x wlchanger-linux-x64
   ```
4. Run the application:
   ```bash
   $ ./wlchanger-linux-x64
   ```

### Method 2: Build from Source

Requirements: [Bun](https://bun.sh) runtime

```bash
$ git clone https://github.com/Maksym-Ryaboshapka/wlchanger.git
$ cd wlchanger
$ bun install
$ npm run compile
$ ./bin/wlchanger-linux-x64
```

### Method 3: Build with Docker

Requirements: [Bun](https://bun.sh) runtime and Docker

```bash
$ git clone https://github.com/Maksym-Ryaboshapka/wlchanger.git
$ cd wlchanger
$ bun install
$ sudo npm run docker:build
$ ./bin/wlchanger-linux-x64
```

## Usage

After installation, simply run:

```bash
$ wlchanger
```

> **Note:** If the command doesn't work, try restarting your terminal session.

## Configuration

WLChanger uses a configuration file located at `~/.config/wlchanger/wlchanger.conf`.

### Configuration Options

| Option | Default Value | Description |
|--------|---------------|-------------|
| `animation` | `fade` | Animation type for wallpaper transitions |
| `wallpapersDir` | `~/Pictures/Wallpapers` | Directory containing wallpaper images |
| `steps` | `30` | Number of animation steps |
| `fps` | `30` | Animation frames per second |

### Available Animations

- `simple` - No animation, instant change
- `fade` - Fade transition between wallpapers
- `left` - Slide in from left
- `right` - Slide in from right
- `top` - Slide in from top
- `bottom` - Slide in from bottom
- `wipe` - Wipe transition effect
- `grow` - Growing transition effect
- `center` - Transition from center outward
- `outer` - Transition from edges inward
- `random` - Random animation selection
- `wave` - Wave transition effect

### Example Configuration

```ini
animation=fade
wallpapersDir=~/Pictures/Wallpapers
steps=30
fps=30
```

## Requirements

- Wayland compositor
- swww daemon running in background
- Wallpaper images in the configured directory

## Troubleshooting

1. **Command not found**: Restart your terminal or add the binary to your PATH
2. **No wallpapers shown**: Ensure your wallpapers directory exists and contains image files
3. **Animation not working**: Check that swww-daemon is running: `pgrep swww-daemon`

## Contributing

Feel free to submit issues and pull requests to improve WLChanger.

## License

[MIT Licence](./LICENCE)