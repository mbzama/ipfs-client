//Required modules
const ipfsAPI = require('ipfs-api');
const fs = require('fs');

//const ipfs = ipfsAPI('0.0.0.0', '5001', {protocol: 'http'}) //localhost
const ipfs = ipfsAPI('3.17.12.112', '5001', {protocol: 'http'}) //sysmon

/*
  IPFS hash: 
    1.txt --> QmXgB9RYZZcpmb7EtNznFXwuJY2s3UMtuc7pNJBzAVUB7m
    2.txt --> QmSDusTRMy1M7CyZkkq7AHpp7n8KGJ2FokRq4VWq1kHR79
*/

let validCID = 'QmSDusTRMy1M7CyZkkq7AHpp7n8KGJ2FokRq4VWq1kHR79';

ipfs.files.get(validCID, function(err, files) {
  files.forEach((file) => {
    console.log(file.path)
    console.log(file.content.toString('utf8'))
  })
})