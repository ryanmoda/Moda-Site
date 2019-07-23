function processForm() {
	var jobList = 
	{
        "ECRSM": {"Title": "East Coast Regional Sales Manager", "Description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation"},
        "NASM": {"Title": "National Accounts Sales Manager", "Description": "Placeholder"},
        "VPS": {"Title": "Vice President of Sales", "Description": "Placeholder"},
        "DFT": {"Title": "DMX Field Technician", "Description": "Placeholder"},
        "SE": {"Title": "Software Engineer", "Description": "Placeholder"},
        "SEE": {"Title": "Senior Electrical Engineer", "Description": "Placeholder"},
        "PM": {"Title": "Purchasing Manager", "Description": "Placeholder"},
        "WM": {"Title": "Warehouse Manager", "Description": "Placeholder"},
        "PRM": {"Title": "Production Manager", "Description": "Placeholder"},
        "AE": {"Title": "Application Engineer", "Description": "Placeholder"},
        "RGC": {"Title": "Regional Sale - Canada", "Description": "Placeholder"},
        "SVP": {"Title": "Senior Vice President", "Description": "Placeholder"}
	}
        var parameters = location.search.substring(1).split("&");
        var temp = parameters[0].split("=");
        l = unescape(temp[1]);
        
	var title = jobList[l]["Title"];
	var description = jobList[l]["Description"];
	document.getElementById("title").innerHTML = title;
        document.getElementById("description").innerHTML = description;
        
        console.log("oh boy");
       window.history.pushState(pushObj, "Jobs", "");
}

