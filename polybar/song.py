#!/usr/bin/env python
# -*- coding: utf-8 -*-

import subprocess
try:
    output = subprocess.check_output("cmus-remote -Q",shell=True)
    for line in output.split("\n"):
         if "tag artist" in line:
            artist = line.replace("tag artist ","")
         elif "tag title" in line:
            song = line.replace("tag title ","")
    print "",artist ,"-", song
except:
    print "cmus off"
