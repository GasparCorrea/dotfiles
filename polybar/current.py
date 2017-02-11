#!/usr/bin/env python
# -*- coding: utf-8 -*-

import subprocess
output = subprocess.check_output("xdotool getwindowfocus getwindowname",shell=True)
if "/bin/bash" in output:
    print ""
elif "Firefox" in output:
    print ""
elif "Telegram" in output:
    print ""
elif "pdf" in output or "zathura" in output:
    print ""
else:
   print ""
