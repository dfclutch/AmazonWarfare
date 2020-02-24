
class StringFormat{
	static formatAuthors(authorList){
	    for(var i = 0; i < authorList.length; i++){
	        authorList[i] = this.formatDisplayName(authorList[i]);
	    }
	    var authorsJoined = authorList.join(", ");
	    var lastCommaPos = authorsJoined.lastIndexOf(',');
	    if(lastCommaPos >= 0){
	        authorsJoined = authorsJoined.substring(0,lastCommaPos) + " &" + authorsJoined.substring(lastCommaPos + 1);
	    } 
    return authorsJoined;
	}

	static formatDisplayName(str) 
	{
	    str = str.replace("_", " ");
	    str = str.split(" ");
	    for (var i = 0, x = str.length; i < x; i++) {
	        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
	    }
	    return str.join(" ");
	}
}

module.exports = StringFormat;