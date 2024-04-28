#!/bin/bash

: ${HOST:=127.0.0.1}
: ${PORT:=8001}

get_cpu_utilization() {
    local tempfile1=$(mktemp)
    local tempfile2=$(mktemp)

    grep 'cpu ' /proc/stat > "$tempfile1"
    sleep 1
    grep 'cpu ' /proc/stat > "$tempfile2"

    local cpu_utilization=$(LC_NUMERIC="en_US.UTF-8" awk '
        NR==FNR {u1=$2+$4; t1=$2+$4+$5; next}
        {u2=$2+$4; t2=$2+$4+$5}
        {printf "%.2f\n", ((u2-u1)*100) / (t2-t1)}
    ' "$tempfile1" "$tempfile2")

    rm "$tempfile1" "$tempfile2"

    curl -X POST \
        http://{$HOST}:{$PORT}/api/cpu/ \
        -H 'accept: application/json' \
        -H 'Content-Type: application/json' \
        -d "{\"data\": \"$cpu_utilization\"}"
}

while true; do
    get_cpu_utilization
    sleep 9
done

