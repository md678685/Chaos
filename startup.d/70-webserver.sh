#!/bin/sh

pkill chaos_server

ln -f /var/log/nginx/access.log /root/workspace/Chaos/log/nginx-access.log
ln -f /var/log/nginx/error.log /root/workspace/Chaos/log/nginx-error.log

nginx -t
service nginx force-reload
