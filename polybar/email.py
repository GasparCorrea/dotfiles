#!/usr/bin/env python
# -*- coding: utf-8 -*-
import imaplib
try:
    obj = imaplib.IMAP4_SSL('imap.gmail.com','993')
    obj.login('your_email','your_password')
    obj.select()
    obj.search(None,'UnSeen')
    print "",len(obj.search(None, 'UnSeen')[1][0].split())
except:
    print " ?"
