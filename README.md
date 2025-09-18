# 🌟 WLChanger

**A beautiful wallpaper changer script for Wayland compositors**

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Platform](https://img.shields.io/badge/platform-Linux-green.svg)
![Language](https://img.shields.io/badge/language-JavaScript-yellow.svg)

---

## 📖 Description

WLChanger is a sleek and efficient wallpaper management script designed for Wayland-based desktop environments. Built with **JavaScript** and powered by **Bun** runtime, it provides a seamless way to change your desktop wallpapers with beautiful transition animations.

### ✨ Features

- 🎨 **Smooth Animations** - Beautiful fade transitions between wallpapers
- 🖱️ **Interactive Selection** - Uses Rofi for intuitive wallpaper picking
- ⚡ **Fast Performance** - Built on Bun for lightning-fast execution
- 🔧 **Configurable** - Customize animations, directories, and timing
- 🌊 **Wayland Native** - Designed specifically for modern Wayland compositors

---

## 📋 Dependencies

Before installing WLChanger, make sure you have the following dependencies:

| Package | Description |
|---------|-------------|
| 🔍 **rofi** | Application launcher and menu system |
| 🌊 **swww** | Wayland wallpaper daemon |

### Installing Dependencies

**Arch Linux:**
```bash
sudo pacman -S rofi
yay -S swww
```

**Ubuntu/Debian:**
```bash
sudo apt install rofi
# Install swww from releases or build from source
```

---

## 🚀 Installation

### Method 1: Download from Releases (Recommended)

1. **Download** the latest release from the [Releases](https://github.com/Maksym-Ryaboshapka/wlchanger/releases/) page
2. **Make executable:**
   ```bash
   chmod +x wlchanger-linux-x64
   ```
3. **Start the swww daemon:**
   ```bash
   swww-daemon
   ```
4. **Run WLChanger:**
   ```bash
   ./wlchanger-linux-x64
   ```

### 🎯 Global Installation

After first run, restart your terminal and you'll be able to use:
```bash
wlchanger
```

---

## ⚙️ Configuration

WLChanger uses a configuration file located at:
```
~/.config/wlchanger/wlchanger.conf
```

### 📝 Default Configuration

```ini
# Animation type for wallpaper transitions
animation=fade

# Directory containing your wallpapers
wallpapersDir=/home/<user>/Pictures/Wallpapers

# Animation steps (higher = smoother)
steps=30

# Frames per second for animation
fps=30
```

### 🔧 Configuration Options

| Option | Description | Default Value |
|--------|-------------|---------------|
| `animation` | Transition animation type | `fade` |
| `wallpapersDir` | Path to wallpapers directory | `~/Pictures/Wallpapers` |
| `steps` | Animation smoothness (1-60) | `30` |
| `fps` | Animation frame rate | `30` |

---

## 🎮 Usage

1. **Start the daemon:**
   ```bash
   swww-daemon
   ```

2. **Launch WLChanger:**
   ```bash
   wlchanger
   ```

3. **Select your wallpaper** from the Rofi menu that appears

4. **Enjoy** your new wallpaper with smooth transitions! ✨

---

## 🛠️ Troubleshooting

### Common Issues

**❓ Command not found after installation**
- Restart your terminal or run `source ~/.bashrc`

**❓ No wallpapers showing in menu**
- Check if your wallpapers directory path is correct in the config
- Ensure you have image files in the specified directory

**❓ Animation not working**
- Make sure `swww-daemon` is running
- Check if your compositor supports the swww protocol

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENCE) file for details.

---

## 🌟 Show Your Support

If you found this project helpful, please consider giving it a ⭐ on GitHub!

---

<div align="center">
  <sub>Built with ❤️ using JavaScript and Bun</sub>
</div>