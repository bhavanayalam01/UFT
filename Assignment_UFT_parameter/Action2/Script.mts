'This is the flightFinder action
'Below script is a bitmap checkpoint that has been added to ensure that flight ads are loading as per expectations
WpfWindow("Micro Focus MyFlight Sample").WpfObject("London to Paris,  all").Check CheckPoint("London to Paris,  all inclusive_2") @@ hightlight id_;_1994074808_;_script infofile_;_ZIP::ssf31.xml_;_
'Below script will take screenshot before the form is filled
Call captureImage
'Below script takes fromCity data from the global data-table to follow data-driven framework
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("fromCity").Select DataTable("fromCity", dtGlobalSheet) @@ hightlight id_;_2082014912_;_script infofile_;_ZIP::ssf14.xml_;_
'Following checkpoint is a standard checkpoint that has been added in order to make sure that fromCity value has been selected as per expectation
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("fromCity").Check CheckPoint("fromCity") @@ hightlight id_;_2037025672_;_script infofile_;_ZIP::ssf37.xml_;_
'Below script takes toCity data from the global data-table to follow data-driven framework
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("toCity").Select DataTable("toCity", dtGlobalSheet) @@ hightlight id_;_2088992568_;_script infofile_;_ZIP::ssf16.xml_;_
'Following checkpoint is a standard checkpoint that has been added in order to make sure that toCity value has been selected as per expectation
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("toCity").Check CheckPoint("toCity") @@ hightlight id_;_2028431760_;_script infofile_;_ZIP::ssf33.xml_;_
'Below script takes date, Class of travel and the number of tickets from the global data-table to follow data-driven framework
WpfWindow("Micro Focus MyFlight Sample").WpfCalendar("datePicker").SetDate DataTable("datePicker", dtGlobalSheet) @@ hightlight id_;_2089180880_;_script infofile_;_ZIP::ssf24.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("Class").Select DataTable("Class", dtGlobalSheet) @@ hightlight id_;_2008676984_;_script infofile_;_ZIP::ssf26.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("numOfTickets").Select DataTable("numOfTickets", dtGlobalSheet) @@ hightlight id_;_2008676840_;_script infofile_;_ZIP::ssf28.xml_;_
'Below script will take screenshot after the form is filled
Call captureImage
'Once all the data is enetered below script will help in navigating to the selectFlight Action
WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_2008678232_;_script infofile_;_ZIP::ssf29.xml_;_
