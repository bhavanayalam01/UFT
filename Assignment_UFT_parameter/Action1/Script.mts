'This is the login Action
'Below script will take screenshot before the form is filled
Call captureImage
'Below are the scripts to enter agentName and password using a Data-driven approach, the password in the data-table has been encrypted to safely secure it
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set DataTable("agentName", dtGlobalSheet) @@ hightlight id_;_199772_;_script infofile_;_ZIP::ssf1.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure DataTable("password", dtGlobalSheet)
'Below script will take screenshot after the form is filled
Call captureImage
'Once the agentName and password has been entered below script will click ok and continue to the flightFinder action
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click
