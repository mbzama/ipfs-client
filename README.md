Getting started with IPFS using NodeJS:

1) Start local IPFS node
	docker-compose up -d

2) Access the Webui:
	http://0.0.0.0:5001/webui
	
3) (Optional) If you get this error: Is your IPFS daemon running? then follow the bellow steps to run without https/ssl
	docker exec -it ipfsclient_ipfs_1 sh
  
	ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin '["http://0.0.0.0:5001", "http://127.0.0.1:5001", "https://webui.ipfs.io"]'
  
	ipfs config --json API.HTTPHeaders.Access-Control-Allow-Methods '["PUT", "GET", "POST"]'
  
	exit
  
	docker-compose restart
	
4) Install the dependencies
	npm install
	
5) Upload file
	node upload.js
	
6) Read file
	node read.js
