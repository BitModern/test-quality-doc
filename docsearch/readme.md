docker run -it --env-file=.env -e "CONFIG=$(cat ./algolia.json | jq -r tostring)" algolia/docsearch-scraper
