<?php 
	// Get cURL resource
	$curl = curl_init();
	// Set some options - we are passing in a useragent too here
	curl_setopt_array($curl, array(
	    CURLOPT_RETURNTRANSFER => 1,
	    CURLOPT_URL => 'https://getpocket.com/v3/get?consumer_key=64324-50c92e1b5146fdf04e9671f7&access_token=6672e060-6f27-1c01-057a-939be6&state=archive&favorite=1&sort=newest&detailType=complete',
	    CURLOPT_USERAGENT => 'Codular Sample cURL Request'
	));
	// Send the request & save response to $resp
	$resp = curl_exec($curl);


	print_r($resp);

		// Close request to clear up some resources
	curl_close($curl);
?>