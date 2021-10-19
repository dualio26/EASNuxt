



static/favicon.ico: static/favicon.svg
	cd static; inkscape -z -e "favicon-64.png" -w "64" -h "64" favicon.svg; \
    convert -background transparent "favicon-64.png"  favicon.ico; \
    rm favicon-64.png


