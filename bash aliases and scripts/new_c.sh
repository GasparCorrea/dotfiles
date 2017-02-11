#!/bin/bash
mkdir $1
cd ./$1
touch "$1.c"
echo "$1: $1.c" > makefile
echo "	gcc $1.c -o $1" >> makefile
echo '#include <stdio.h>' >> $1.c
echo '' >> $1.c
echo 'int main()' >> $1.c
echo '{' >> $1.c
echo '	return 0;' >> $1.c
echo '}' >> $1.c
vim $1.c
