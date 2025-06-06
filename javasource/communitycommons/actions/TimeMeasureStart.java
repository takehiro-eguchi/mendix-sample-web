// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
// Special characters, e.g., é, ö, à, etc. are supported in comments.

package communitycommons.actions;

import communitycommons.Logging;
import com.mendix.systemwideinterfaces.core.IContext;
import com.mendix.systemwideinterfaces.core.UserAction;

/**
 * Start timing something, and print the result to the log. 
 * - TimerName. Should correspond to the TimerName used in TimeMeasureEnd.
 * 
 * Note that multiple timers can run at once. Existing timers can be restarted using this function as well.
 */
public class TimeMeasureStart extends UserAction<java.lang.Boolean>
{
	private final java.lang.String TimerName;

	public TimeMeasureStart(
		IContext context,
		java.lang.String _timerName
	)
	{
		super(context);
		this.TimerName = _timerName;
	}

	@java.lang.Override
	public java.lang.Boolean executeAction() throws Exception
	{
		// BEGIN USER CODE
		Logging.measureStart(TimerName);
		return true;
		// END USER CODE
	}

	/**
	 * Returns a string representation of this action
	 * @return a string representation of this action
	 */
	@java.lang.Override
	public java.lang.String toString()
	{
		return "TimeMeasureStart";
	}

	// BEGIN EXTRA CODE
	// END EXTRA CODE
}
