#!/bin/bash
mkdir $1
cd ./$1
touch "$1.cpp"
echo "$1: $1.cpp" > makefile
echo "	g++ $1.cpp -o $1" >> makefile
echo '#include <iostream>' >> $1.cpp
echo '' >> $1.cpp
echo 'using namespace std;' >> $1.cpp
echo '' >> $1.cpp
echo 'int main()' >> $1.cpp
echo '{' >> $1.cpp
echo '	return 0;' >> $1.cpp
echo '}' >> $1.cpp
vim $1.cpp
