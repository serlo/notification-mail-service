#!/bin/bash

source scripts/test_utils.sh

init

yarn notify

expect_three_send_mails
