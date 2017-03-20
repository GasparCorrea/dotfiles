#!/bin/bash
DIR="/home/gasparoctavio/Imágenes/Walls"
PIC=$(ls $DIR/*.png | shuf -n1)
feh --bg-scale $PIC
