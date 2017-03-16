#!/bin/sh
# Faça o checkout de uma nova cópia da Jquery
git clone git://github.com/jquery/jquery.git $1
# Copie o arquivo de caso de teste modelo em
cp $2.html $1/index.html
# Construa uma cópia do conjunto de teste da Jquery
cd $1 && make