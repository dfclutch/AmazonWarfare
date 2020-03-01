const DiscoveryV1 = require('ibm-watson/discovery/v1');
const {IamAuthenticator} = require('ibm-watson/auth');


class Discovery{
	
	static environment_id = "0235fa72-912f-4f3d-a606-bb40a3643e40";
	static pdf_collection_id = "5ee93bfe-ad6b-4928-9616-3df44af86c86";
	static json_collection_id = "b86bcd40-73ea-4d03-8818-e836e78a30d7";
	static apikey = '9U_r_MDwsKMpLghmLBgihOMuFJ0-c-NB3SfFZq3PF63H';
	static serviceURL = 'https://api.us-south.discovery.watson.cloud.ibm.com/instances/aafddb55-662a-48d2-9e31-f69eb609386f';
	static version = '2019-04-30';
	static get discoveryService() {
		return new DiscoveryV1({
	        version: this.version,
	        authenticator: new IamAuthenticator({
	            apikey: this.apikey,
	        }),
	        url: this.serviceURL,
	    });
	}
}

module.exports = Discovery; // make importable
