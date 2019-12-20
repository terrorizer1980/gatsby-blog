---
title: >-
  How to install Linux (Ubuntu or Kali) in Windows-10 without Dual Boot,
  Virtualbox, VMware.
path: /wsl
tags:
  - The Internet
metaImage: /assets/linux-windows.jpg
featuredImage: ./assets/linux-windows.jpg
excerpt: >-
  We’ll be installing Linux on our Windows machine, by using the WSL feature(no
  VM or dual boot). WSL is a Windows 10 feature that provides you with a Bash
  shell, which you can use to execute Linux commands
created: 2019-12-20T01:43:20.350Z
updated: 2019-12-20T01:43:20.445Z
---
In this tutorial, we’ll be installing Linux on our Windows machine, by using the WSL feature(no VM or dual booting required). WSL(Windows subsystem for Linux) is a Windows 10 feature that provides you with a Bash shell, which you can use to execute Linux commands and run Linux applications.

## Linux on ... Windows? Really?

While this setup of Linux on Windows is not optimal due to various environmental restrictions (such as the lack of raw sockets and lack of customised Kali or ubuntu kernel), there are still many situations where having Kali Linux alongside your Windows 10 machine can be beneficial. One example that comes to mind is consolidation of workspaces, especially if Windows is your main working environment. Other useful situations that crossed our minds were **programming and compiling code for students**, standardizing tools and scripts to run across multiple environments, quick porting of Linux penetration testing command line tools to Windows, etc. For example, below is a screenshot of running the Metasploit Framework from Kali Linux, over WSL

![Metasploit in WSL](/assets/kali-linux-wsl.png "msf terminal in WSL")

## Setting up Environment

Here’s a quick description of the setup and installation process. For an easier copy / paste operation, these are the basic steps taken:

1. Update your Windows 10 machine. 
2. Open an administrative PowerShell window and install the Windows Subsystem with this one-liner. A reboot will be required once finished.

   `Enable-WindowsOptionalFeature-Online-FeatureNameMicrosoft-Windows-Subsystem-Linux`
3. Once rebooted, open the Windows App store and search for the “Linux” application, or alternatively [click here](https://www.microsoft.com/en-us/search?q=linux) to go there directly. Install the app and enjoy your specified linux distribution (Kali, Ubuntu, Debain)!

## Steps common for every linux distribution

After installing retry opening your Linux Distribution. If everything went right Linux should be getting installed automatically. After everything is done installing you will be prompted to create a user account. 

![wsl-user-creation](/assets/wsl-ubuntu-on-windows-user-creation.png "wsl user creation")

With that done, you'll be prompted to create a Unix username and password. Congratulations, you're all set up and running a Linux subsystem on your Windows machine! 

#### Beginners Tips:

* Remember the entered credentials, you need to use it for every sudo command
* Don't forget to update it regularly just like any Linux system.

  * `sudo apt-get update`
  * `sudo apt-get dist-upgrade`
* If hard drive space is a concern, then don't forget to clean up the apt directory.

  * `sudo apt-get clean`
* Use this, If you don't want to use sudo every time you use your console.

  * `sudo su`

    This will prompt you with your administrator account password, after successful entry of credentials you will be in root shell and there is no need to add sudo in-front of  your terminal commands.

![wsl-linux-installed](/assets/wsl-ubuntu-on-windows-installed.png "wsl, ubuntu in windows")

With this your Linux Distribution is ready to go. But I want to mention some important steps for making your life easier in a lot of ways. For now i'm focusing mainly on these important aspects any further suggestions can be mentioned in the comments below, so I can update this post thoroughly.

* **Exchanging files**, mainly for **ubuntu users** ie. programming beginners and students.
* **Windows Firewall Exceptions**, mainly for **Kali users**, as many tools are detected as virus by windows defender.

> If you are wondering to know about Linux GUI: **Yes, GUI is possible** and note that WSL is not really meant to include a GUI (graphical user interface), but you can install it if you feel like it. Check out how to do it here

## Copying/moving files from Windows to Ubuntu

At some point, you will probably need to exchange some file between Windows and Linux. One way of doing that is going to the Linux installation folder with windows explorer. You can find the Linux install location at: **C:\Users\”Windows User”\AppData\Local\lxss**

>  Don't forget to replace "Windows User" with your actual username!

But using file explorer to access the Linux installation folders isn’t the best way of doing things. Instead, you should be using the following method to copy and move files.

**sudo cp /**(file path)**/**(destination directory)

![copying-files-from-windows](/assets/wsl-ubuntu-on-windows-copy-file.png "copying or moving files from windows to ubuntu")

Sudo is used to give root permissions to non-root users. That is also why I was prompted for the password. The cp command copies the file specified in the first path to the location specified by the second path. The windows **C:** drive is located in the **/mnt** directory. If you would want to move the file instead of copying it just use the ***mv*** command in place of ***cp***.

## Add Windows Defender Exclusion for Kali users

Unfortunately, Windows Defender doesn't always like to play nice with the tools in the Kali repository. Sometimes, it detects them as viruses and/or malware and blocks some portion of the program. To prevent these errors, it's a good idea to go ahead and add a Windows Defender exclusion for the Kali Linux folder.

First, find that folder by opening File Explorer and entering the following location in the address bar. **C:\Users\"Windows User"\AppData\Local\Packages\**

> Don't forget to replace Windows User" with your actual username!

Now, open the Kali Linux folder which should look something like "**KaliLinux.54290C8133FEE_\*\*\*\*\*\****" and **copy the folder location**.

![kali-file-location](/assets/kali-file-location.png "kali file location in windows")

With that in hand, search for "**Windows Security**" in the Cortana search bar the bottom left of the screen. Within the Security Center, click on "**Virus & threat protection**" represented by a shield on the menu to the left side of the screen.

![windows-exception](/assets/windows-exception.png "windows exception in firewall")

Next, click on the cog in the bottom, then ***manage setting*** under"**Virus & threat protection settings**," then scroll down to the bottom under ***Exclusions*** and click "**Add or remove exclusions**." Then press the plus icon beside "**Add an exclusion**," select "**Folder**," and then paste the Kali folder address in the top bar. Click "**Select folder**," and a popup will appear — click "**Yes**" to add the exclusion.

![add-exclusion](/assets/add-exclusion.png "adding exclusion in windows security")

If you ever want to remove this exclusion, simply click on the down arrow beside the folder location, and click "Remove."

With the Windows Defender exclusion in place, you're ready to get started with your ethical hacking. Not much comes preinstalled in this version, so install tools you wish to use from the Kali repository as you normally would with the **apt-get** command. Click here for detailed tutorial for installing all kali linux tools.

## Food for thought

The availability of the Kali Linux platform or Ubuntu Platform and toolset on Windows 10 brings with it many exciting possibilities which we haven't even begun to grasp. But frankly I would suggest this method of using Linux Distribution for **students/programming beginners/linux beginners** in  windows desktop as main environment. I'm always glad to help my fellow linux lovers, just comment it below or contact me through any of my social media accounts.
