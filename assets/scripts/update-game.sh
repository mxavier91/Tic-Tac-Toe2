# sh assets/scripts/update-game.sh
curl "http://tic-tac-toe.wdibos.com/games/{$ID}" \
  --include \
  --request PATCH \
  --header "Content-type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
