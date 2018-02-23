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
}
