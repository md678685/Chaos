#!/bin/sh

pkill chaos_server

chmod -R a+rX server/

nginx -t
service nginx force-reload
