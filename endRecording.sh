#!/bin/sh

#  endRecording.sh
#  
#
#  Created by Jefferson Alves Reis on 25/08/20.
#

#folder=`echo $1 | cut -d/ -f5`
folder=$1
echo folder $folder
cd $folder
#cat metadata.json | cut -d/ -f4 | cut -d\" -f1
url=`cat metadata.json | cut -d\" -f4`
echo url $url
record=`ls |grep mp4`
echo record $record

body="{\"url\":\"$url\",\"folder\":\"$folder\",\"record\":\"$record\"}"
echo $body
curl -v -X POST https://meet.vipsolutions.com.br:8000/v1/conferences -H 'Content-Type: application/json' -d $body

#echo parametros $#
#
#for var in $@
#do
#    echo $var
#    echo $var >> argumentos.txt
#done
