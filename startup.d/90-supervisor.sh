#!/bin/sh
supervisorctl reread
supervisorctl restart chaos
supervisorctl restart chaosweb
