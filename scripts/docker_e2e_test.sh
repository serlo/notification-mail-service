#!/bin/bash

source scripts/test_utils.sh

init

yarn docker:build
yarn docker:run
yarn docker:stop

expect_three_sent_mails
