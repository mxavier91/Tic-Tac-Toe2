# sh assets/scripts/update-game.sh
curl "http://tic-tac-toe.wdibos.com/games/{$ID}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-type: application/json" \
  --data '{
    "game": {
      "cell": {
        "index": "'"${INDEX}"'"
        "value": "'"${VALUE}"'"
      },
      "over": "'"${OVER}"'"
    }
  }'
