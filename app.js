const express = require('express')
const bodyParser = require('body-parser')
const Web3 = require('web3');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

// console.log(web3.providers);

const web3 = new Web3("HTTP://127.0.0.1:7545");

// const web3 = new Web3("https://ropsten.infura.io/v3/37ce477e00c14a8390548738542dd9aa");
web3.eth.getAccounts(function(err,accounts){
    console.log(accounts)
})

var account = "0xECbaAacfBC1167aC33DD5556cF7228022fE469be"

// hidestream
var pkey = "55d1b68308eab5a788ce7388274dbf868d8d23fdcc9899fc3d21b084562ee396"

var abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_imeinumber",
				"type": "string"
			}
		],
		"name": "getManufacturingDetails",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_imeinumber",
				"type": "string"
			}
		],
		"name": "getMobile",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_imeinumber",
				"type": "string"
			}
		],
		"name": "getRetailerDetails",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_imeinumber",
				"type": "string"
			}
		],
		"name": "getSuppliersDetails",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_company",
				"type": "string"
			}
		],
		"name": "getmanufacturingId",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			}
		],
		"name": "getretailId",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_org",
				"type": "string"
			}
		],
		"name": "getsupplyId",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_imeinumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_currentinHandof",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_manufacturingId",
				"type": "string"
			}
		],
		"name": "setManufacturingDetails",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_imeinumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_currentinHandof",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_retailId",
				"type": "string"
			}
		],
		"name": "setRetailerDetails",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_imeinumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_currentinHandof",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_supplyId",
				"type": "string"
			}
		],
		"name": "setSuppliersDetails",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_company",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_location",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_contact",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_Id",
				"type": "uint256"
			}
		],
		"name": "setmanufacturingId",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_imeinumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_supplyId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_manufacturingId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_retailId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_currentinHandof",
				"type": "string"
			}
		],
		"name": "setmobile",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_location",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_contact",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_Id",
				"type": "uint256"
			}
		],
		"name": "setretailId",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_org",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_location",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_contact",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_Id",
				"type": "uint256"
			}
		],
		"name": "setsupplyId",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
var contractAddress = "0x089a5dBf403Ff7D102612607eBd64F165d5B8f9a";

var myContract = new web3.eth.Contract(abi,contractAddress);

console.log(myContract.methods);


app.get('/', function (req, res) {
    console.log(__dirname);
//   res.send('Hello World')
res.sendFile(__dirname+'/mobile.html');
});
app.get('/main.html',function (req,res){
	res.sendFile(__dirname + '/main.html' );
});

app.get('/', function (req, res) {
    console.log(__dirname);
//   res.send('Hello World')
res.sendFile(__dirname+'/main.html');
});
app.get('/manufacturer.html',function (req,res){
	res.sendFile(__dirname + '/manufacturer.html' );
});
app.get('/supplier.html',function (req,res){
	res.sendFile(__dirname + '/supplier.html' );
});
app.get('/retailer.html',function (req,res){
	res.sendFile(__dirname + '/retailer.html' );
});
app.get('/setmanufact.html',function (req,res){
	res.sendFile(__dirname + '/setmanufact.html' );
});
app.get('/setsupply.html',function (req,res){
	res.sendFile(__dirname + '/setsupply.html' );
});
app.get('/setretail.html',function (req,res){
	res.sendFile(__dirname + '/setretail.html' );
});




app.get('/getmobile',function (req,res){
	console.log("mobile:",req.query);
	myContract.methods.getMobile(req.query.imeinumber).call({from:account})
.then(function(result){
	console.log(result);
	res.send("imeinumber:"+result[0]+"</br>"+"supplyId:"+result[1]+"</br>"+"manufacturingId:"+result[2]+"</br>"+"retailId:"+result[3]+"</br>"+"currentinHandof:"+result[4]);
});

});

app.post('/enrollmobile',function(req,res){

    console.log(req.body);
    console.log('inside post') ;
	var encodedData = myContract.methods.setmobile(req.body.imeinumber,req.body.supplyId,req.body.manufacturingId,req.body.retailId,req.body.currentinHandof).encodeABI();
	console.log(encodedData);

	var transactionObject = {
		gas : "470000",
		data : encodedData,
		from : account,
		to : contractAddress
	};


	web3.eth.accounts.signTransaction(transactionObject,pkey,function(error,trans){
		console.log(trans);
		web3.eth.sendSignedTransaction(trans.rawTransaction)
		.on("receipt",function(result){
			console.log(result);
			res.send(result);
		})
	})
})



 
app.get('/', function (req, res) {
    console.log(__dirname);
//   res.send('Hello World')
res.sendFile(__dirname+'/manufacturer.html');
});

app.get('/getmanufacturer',function (req,res){
	console.log("manufacturer:",req.query);
	myContract.methods.getManufacturingDetails(req.query.imeinumber).call({from:account})
.then(function(result){
	console.log(result);
	res.send("imeinumber:"+result[0]+"</br>"+"currentinHandof:"+result[1]+"</br>"+"manufacturingId:"+result[2]);
});

});




app.post('/enrollmanufacturer',function(req,res){

    console.log(req.body);
    console.log('inside post') ;
	var encodedData = myContract.methods.setManufacturingDetails(req.body.imeinumber,req.body.currentinHandof,req.body.manufacturingId).encodeABI();
	console.log(encodedData);

	var transactionObject = {
		gas : "470000",
		data : encodedData,
		from : account,
		to : contractAddress
	};


	web3.eth.accounts.signTransaction(transactionObject,pkey,function(error,trans){
		console.log(trans);
		web3.eth.sendSignedTransaction(trans.rawTransaction)
		.on("receipt",function(result){
			console.log(result);
			res.send(result);
		})
	})
})





app.get('/', function (req, res) {
    console.log(__dirname);
//   res.send('Hello World')
res.sendFile(__dirname+'/supplier.html');
});

app.get('/getsupplier',function (req,res){
	console.log("supplier:",req.query);
	myContract.methods.getSuppliersDetails(req.query.imeinumber).call({from:account})
.then(function(result){
	console.log(result);
	res.send("imeinumber:"+result[0]+"</br>"+"currentinHandof:"+result[1]+"</br>"+"supplyId:"+result[2]);
});

});

app.post('/enrollsupplier',function(req,res){

    console.log(req.body);
    console.log('inside post') ;
	var encodedData = myContract.methods.setSuppliersDetails(req.body.imeinumber,req.body.currentinHandof,req.body.supplyId).encodeABI();
	console.log(encodedData);

	var transactionObject = {
		gas : "470000",
		data : encodedData,
		from : account,
		to : contractAddress
	};


	web3.eth.accounts.signTransaction(transactionObject,pkey,function(error,trans){
		console.log(trans);
		web3.eth.sendSignedTransaction(trans.rawTransaction)
		.on("receipt",function(result){
			console.log(result);
			res.send(result);
		})
	})
})





app.get('/', function (req, res) {
    console.log(__dirname);
//   res.send('Hello World')
res.sendFile(__dirname+'/retailer.html');
});

app.get('/getretailer',function (req,res){
	console.log("retailer:",req.query);
	myContract.methods.getRetailerDetails(req.query.imeinumber).call({from:account})
.then(function(result){
	console.log(result);
	res.send("imeinumber:"+result[0]+"</br>"+"currentinHandof:"+result[1]+"</br>"+"retailId:"+result[2] );
});

});

app.post('/enrollretailer',function(req,res){

    console.log(req.body);
    console.log('inside post') ;
	var encodedData = myContract.methods.setRetailerDetails(req.body.imeinumber,req.body.currentinHandof,req.body.retailId).encodeABI();
	console.log(encodedData);

	var transactionObject = {
		gas : "470000",
		data : encodedData,
		from : account,
		to : contractAddress
	};


	web3.eth.accounts.signTransaction(transactionObject,pkey,function(error,trans){
		console.log(trans);
		web3.eth.sendSignedTransaction(trans.rawTransaction)
		.on("receipt",function(result){
			console.log(result);
			res.send(result);
		})
	})
})


app.get('/', function (req, res) {
    console.log(__dirname);
//   res.send('Hello World')
res.sendFile(__dirname+'/setmanufact.html');
});

app.get('/getmanufacturingId',function (req,res){
	console.log("manufacturingId:",req.query);
	myContract.methods.getmanufacturingId(req.query.company).call({from:account})
.then(function(result){
	console.log(result);
	res.send("company:"+result[0]+"</br>"+"location:"+result[1]+"</br>"+"contact:"+result[2]+"</br>"+"Id:"+result[3]);
});

});

app.post('/enrollmanufacturingId',function(req,res){

    console.log(req.body);
    console.log('inside post') ;
	var encodedData = myContract.methods.setmanufacturingId(req.body.company,req.body.location,req.body.contact,req.body.Id).encodeABI();
	console.log(encodedData);

	var transactionObject = {
		gas : "470000",
		data : encodedData,
		from : account,
		to : contractAddress
	};


	web3.eth.accounts.signTransaction(transactionObject,pkey,function(error,trans){
		console.log(trans);
		web3.eth.sendSignedTransaction(trans.rawTransaction)
		.on("receipt",function(result){
			console.log(result);
			res.send(result);
		})
	})
})


app.get('/', function (req, res) {
    console.log(__dirname);
//   res.send('Hello World')
res.sendFile(__dirname+'/setsupply.html');
});

app.get('/getsupplyId',function (req,res){
	console.log("supplyId:",req.query);
	myContract.methods.getsupplyId(req.query.org).call({from:account})
.then(function(result){
	console.log(result);
	res.send("org:"+result[0]+"</br>"+"location:"+result[1]+"</br>"+"contact:"+result[2]+"</br>"+"Id:"+result[3]);
});

});

app.post('/enrollsupplyId',function(req,res){

    console.log(req.body);
    console.log('inside post') ;
	var encodedData = myContract.methods.setsupplyId(req.body.org,req.body.location,req.body.contact,req.body.Id).encodeABI();
	console.log(encodedData);

	var transactionObject = {
		gas : "470000",
		data : encodedData,
		from : account,
		to : contractAddress
	};


	web3.eth.accounts.signTransaction(transactionObject,pkey,function(error,trans){
		console.log(trans);
		web3.eth.sendSignedTransaction(trans.rawTransaction)
		.on("receipt",function(result){
			console.log(result);
			res.send(result);
		})
	})
})


app.get('/', function (req, res) {
    console.log(__dirname);
//   res.send('Hello World')
res.sendFile(__dirname+'/setretail.html');
});

app.get('/getretailId',function (req,res){
	console.log("retailId:",req.query);
	myContract.methods.getretailId(req.query.name).call({from:account})
.then(function(result){
	console.log(result);
	res.send("location:"+result[1]+"</br>"+"name:"+result[0]+"</br>"+"contact:"+result[2]+"</br>"+"Id:"+result[3] );
});

});

app.post('/enrollretailId',function(req,res){

    console.log(req.body);
    console.log('inside post') ;
	var encodedData = myContract.methods.setretailId(req.body.location,req.body.name,req.body.contact,req.body.Id).encodeABI();
	console.log(encodedData);

	var transactionObject = {
		gas : "470000",
		data : encodedData,
		from : account,
		to : contractAddress
	};


	web3.eth.accounts.signTransaction(transactionObject,pkey,function(error,trans){
		console.log(trans);
		web3.eth.sendSignedTransaction(trans.rawTransaction)
		.on("receipt",function(result){
			console.log(result);
			res.send(result);
		})
	})
})








app.listen(3000,() => {
	console.log("I am listinig at post 3000 !");
})




// myCon
