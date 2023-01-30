'This is a the selectFlight action
'Below script will select a random flight as per the row mentioned in the data table
WpfWindow("Micro Focus MyFlight Sample").WpfTable("flightsDataGrid").SelectCell DataTable("flightsDataGrid", dtGlobalSheet), "0"
'Once the flight has been selected below script will help in navigating to the flight confirmation Action
WpfWindow("Micro Focus MyFlight Sample").WpfButton("SELECT FLIGHT").Click
