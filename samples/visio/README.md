===============================
Examples for Developers / visio
===============================

http://comsdkjs.webcom.orange-labs.fr/src/js/latest/examples/visio/index.html


## Launch dev server

```bash
gulp dev
```

## Build and watch out visio sample

To build and launch a web server on port 3000

```bash
gulp
```

To onlu build visio sample in ./dist folder

```bash
gulp build
```

## What Is The visio ?

This example provides a possibility to share video using WEBCOMBASE and WEBCOM SDK.

It contains files below:

	- visio.js : describes differents functions to use in the example like registration,
				 remote a video and handling the sharing video (accept, refuse and hangup) an invitation for visio conference,
				 it also manages ongoing streaming as mute audio or video (local or remote),
				 for more information, refer to the file and look comments to understand each function,
	- config.js : used to configure your URL namespace,
	- style.css : allows an appropriete style to the web page,
	- index.html : it is the main web page of the example.


## How To Use The visio ?

To use this example. There is three possibilities:

	1/  Do nothing and use the default namespace :  https://webcom.orange.com/base/sandbox
	
	2/	connect it to your own namespace* by declaring a Global variable "WEBCOMBASE_URL" containing the URL corresponding to your namespace.
		To do so, go to the file config.js.
	    NB: The file containing this variable should be imported BEFORE the Webcom communication SDK file (webcom-communication-sdk.js or webcom-communication-sdk-min.js)
	    
    3/ Or, connect it to your own namespace* by calling the method  datarefs.setWebcomBaseUrl("https://webcom.orange.com/base/YOURNAMESPACE"); (of course, replace the Url by yours).
       To do so, go to file visio.js
       NB: The file containing this call should be imported AFTER the Webcom communication SDK file (webcom-communication-sdk.js or webcom-communication-sdk-min.js)
    	
 *A namespace is a dedicated area of the webcom server databases which store the data of your service.
 You can create your own namepace by going on "https://webcom.orange.com/resources/admin/", then register/login and finally 'Add a new namespace' . The dedicated URL related to your namespace will be as https://webcom.orange.com/base/YOURNAMESPACE

  ,
 /!\   
'¨¨¨'  - It's strongly Recommended to use your own namespace because the default namespace can be cleared at any moment or impacted by the data of the other users.
	   - Also you cannot see/administer data in this default namespace. 
     
	
	
Put your userId and an userId for the other, register and call to share your video.