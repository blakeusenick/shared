//Using a JS template with my own variables to format an ineractve calendar with MindFusion & HTML 
//Credited to Mindfusion
var x = MindFusion.Scheduling;

//create a new calendar instance
var calendar = new x.Calendar(document.getElementById("calendar"));

calendar.theme = "peach";

calendar.selectionEnd.addEventListener(handleSelection);
calendar.headerClick.addEventListener(handleHeaderClick);

//visualize the calendar
calendar.render();

function handleHeaderClick(sender, args)
{
	if(sender.currentView === x.CalendarView.Timetable)
	{
		sender.date = sender.timetableSettings.dates.items()[0];
		sender.currentView = x.CalendarView.SingleMonth;
	}
}

function handleSelection(sender, args)
{
	if(sender.currentView === x.CalendarView.SingleMonth)
	{
		//cancel the default behavior
		args.cancel = true;
		
		var start = args.startTime;
		var end = args.endTime;
		
		//clear all dates from the timetable
		sender.timetableSettings.dates.clear();
		
		while(start < end)
		{
			sender.timetableSettings.dates.add(start);
			start = x.DateTime.addDays(start, 1);
			
		}
		
		sender.currentView = x.CalendarView.Timetable;
	}
}
