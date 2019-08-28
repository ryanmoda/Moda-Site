function processForm() {
	var jobList = 
	{
        "ECRSM": {"Title": "East Coast Regional Sales Manager", "Description": "The East Coast Regional Sales Manager will be responsible for executing strategies that maximize profit and support our inside sales and marketing goals.<br>Perform face-to-face sales conferences as well as manage relationships between our representative agencies.<br> Increase awareness, appreciation, and understanding of the Moda Light brand.<br><br><strong>Responsibilities:</strong><br><br>Traveling is expected to be 50-70% of the job.<br>Meet or exceed booking and revenue forecasts.<br>Target, establish, and nurture relationships with external rep agents, specifiers, distributors, and contractors.<br> Develop and execute local and regional sales and marketing initiatives that advance our corporate sales and marketing goals.<br> Understand the internal business processes of our rep agency partners and co-develop a tailored strategy to increase market share within the territories they serve.<br>Coordinate with other internal teams, departments, and individuals to ensure a high degree of customer satisfaction.<br>Planning for and managing all sales promotion activities within the region, including tradeshows, seminars, training classes, and customer-driven activities.<br><br><strong>Skills and Attributes:</strong><br><br>Ability to learn and adapt quickly.<br>        Capable of working both independently and collaboratively.<br>        Outstanding communication skills.        Strong presentation and public speaking skills.<br>        Experience with customer relationship management software.<br>        Strong interpersonal and negotiation skills.<br>        Competence using Microsoft tools including PowerPoint, Word, and Excel <br><br>        <strong>Experience:</strong><br><br>        Thorough understanding of LED lighting technology. Minimum of 3 years outside sales experience required.<br> Lighting design and installation experience preferred.<br><br>"

},
        "NASM": {"Title": "National Accounts Sales Manager", "Description": "Placeholder!!!!"},
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
        
//        window.history.pushState(pushObj, "Jobs", "");
}
processForm();

