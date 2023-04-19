---
title: Installing Live Server
publish_date: 2023-04-18
disable_html_sanitization: true
---

[Live-server](https://www.npmjs.com/package/live-server) is a lightweight [node.js](https://nodejs.org) script that serves a website from your terminal (macOS) or PowerShell (Windows).

## 1 - install Node.js (macOS)

1. install [Homebrew](https://brew.sh/) by pasting this command into a terminal (& pressing enter):
   - `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
   - check if Homebrew is installed by typing `brew --version`
2. use Homebrew to install Node.js by typing this into the the terminal (& pressing enter):
   - `brew install node`
   - check if Node.js is installed by typing `node --version`

## 1 - install Node.js (Windows)

1. download and install Node.js from the website, [here](https://nodejs.org)
2. check if Node.js is installed by typing `node --version` in PowerShell

## 2 - install Live Server

Use NPM (node package manager) to install Live Server, by typing this into the terminal (macOS), or PowerShell (Windows):
   - `npm i -g live-server`

Navigate to the your location of your `index.html` file using `cd folder_name` and `cd ..`. You can print the current location by typing `pwd` (present working directory), and using `ls` (macOS) or `dir` (Windows) to list the files and folders in your current location.

Once you are at the location of your `index.html` file, you can serve your website locally by typing `live-server`.

Note that Windows users may need to open PowerShell in administrator mode:
1. Press Win + R on your keyboard. This will open the Run dialog box.
2. From here, type in "PowerShell" and press Ctrl + Shift + Enter key combination.
3. If a confirmation prompt pops up, click Yes to continue. This will launch PowerShell as an administrator.  (from [here](https://www.makeuseof.com/windows-11-powershell-administrator/))
