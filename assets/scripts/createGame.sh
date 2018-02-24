<<<<<<< HEAD
curl "https://aqueous-atoll-85096.herokuapp.com/games" \
--include \
--request POST \
--header "Content-Type: application/json" \
--data '{
  "games": {
    "id": "'"${ID}"'",
    "cells": ["", "", "", "", "", "", "", "", "", ""],
    "player_x": {
      "id": "'"${ID}"'",
      "email": "'"${EMAIL}"'"
    },
    "player_o": null
  }
}'
=======
# sh assets/scripts/createGame.sh
curl "http://tic-tac-toe.wdibos.com/games" \
  --include \
  --request POST \
  --header "Content-type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \







# curl "https://aqueous-atoll-85096.herokuapp.com/games" \
#--include \
#--request POST \
#--header "Content-Type: application/json" \
#--header

#--data '{
#    "id": "'"${ID}"'",
#    "cells": ["", "", "", "", "", "", "", "", "", ""],
#    "player_x": {
#      "id": "'"${ID}"'",
#      "email": "'"${EMAIL}"'"
#    },
#    "player_o": null
#  }
#}
>>>>>>> game-ui
