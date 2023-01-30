'This is the openApp Action
'Below Script will close the FlightGUI application if open and will open a new window for iteration
SystemUtil.CloseProcessByName("FlightsGUI.exe")
SystemUtil.Run "C:\Program Files (x86)\Micro Focus\UFT One\samples\Flights Application\FlightsGUI.exe"
