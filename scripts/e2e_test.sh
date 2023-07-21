#!/bin/bash

run_test() {
  init

  yarn notify

  expect_three_send_mails
}

init() {
  set -e
  trap 'tear_down' EXIT
  API_MOCK_PID=

  init_mysql
  init_api_mock
  delete_all_mails
  init_env_variables
}

init_mysql() {
  yarn start
  ./scripts/mysql/wait-for-mysql.sh
  yarn mysql:rollback
}

init_api_mock() {
  yarn ts-node --experimental-specifier-resolution=node scripts/api-mock &
  API_MOCK_PID="$!"
}

init_env_variables() {
  source .env
  SERLO_API_GRAPHQL_URL=https://localhost:3003/graphql
}

delete_all_mails() {
  curl -X DELETE -H "Content-Type: application/json" \
    --data '{ "pruneCode": "all" }' --silent http://localhost:8085/mail
}

expect_three_send_mails() {
  curl http://localhost:8085/mailcount | grep '{"mailCount":3}'
}

tear_down() {
  if [ -n "${API_MOCK_PID}" ]; then
    kill "${API_MOCK_PID}"
  fi
}

run_test
