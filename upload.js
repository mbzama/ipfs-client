//Required modules
const ipfsAPI = require('ipfs-api');
const express = require('express');
const fs = require('fs');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var https = require('https');
var cors = require('cors');

//const ipfs = ipfsAPI('0.0.0.0', '5001', {protocol: 'http'}) //localhost
const ipfs = ipfsAPI('3.17.12.112', '5001', {protocol: 'http'}) //sysmon

let testFile = fs.readFileSync('/home/zama/learning/ipfs/ipfs-client/files/2.txt');
/*
  IPFS hash: 
    1.txt --> QmXgB9RYZZcpmb7EtNznFXwuJY2s3UMtuc7pNJBzAVUB7m
    2.txt --> QmSDusTRMy1M7CyZkkq7AHpp7n8KGJ2FokRq4VWq1kHR79
*/

//Creating buffer for ipfs function to add file to the system
let testBuffer = new Buffer(testFile);

ipfs.files.add(testBuffer, function(err, file) {
  if (err) {
    console.log(err);
  }
  console.log('\n\n Successfully uploaded file to ipfs node: ' + JSON.stringify(file));
})