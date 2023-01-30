'This is the flightConfirmation Action
'Below script will take screenshot before the form is filled
Call captureImage
'Below script takes passengerName from the global data-table to follow data-driven framework
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("passengerName").Set DataTable("passengerName", dtGlobalSheet)
'Following checkpoint has been added to make sure that the passengerName has been entered correctly
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("passengerName").Check CheckPoint("passengerName") @@ hightlight id_;_-246932816_;_script infofile_;_ZIP::ssf3.xml_;_
'Following script has been added to wait for the agent so that he can confirm all the details mentioned on the screen before booking the flight
WpfWindow("Micro Focus MyFlight Sample").WpfProgressBar("progBar").WaitProperty "value", 10
'Below script will take screenshot after the form is filled
Call captureImage
'Below script will perform order confirmation process
WpfWindow("Micro Focus MyFlight Sample").WpfButton("ORDER").Click
'Once confirmed below text checkpoint will make sure that the order has been completed successfully
WpfWindow("Micro Focus MyFlight Sample").WpfObject("Order 99 completed").Check CheckPoint("CheckOrderCompletedText") @@ hightlight id_;_2040302440_;_script infofile_;_ZIP::ssf1.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("NEW SEARCH").Click
