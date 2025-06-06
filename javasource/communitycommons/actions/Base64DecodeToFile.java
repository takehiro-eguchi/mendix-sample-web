// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
// Special characters, e.g., é, ö, à, etc. are supported in comments.

package communitycommons.actions;

import com.mendix.systemwideinterfaces.core.IMendixObject;
import communitycommons.StringUtils;
import com.mendix.systemwideinterfaces.core.IContext;
import com.mendix.systemwideinterfaces.core.UserAction;

/**
 * Stores an base 64 encoded string plain in the provided target file document
 * 
 * Note that targetFile will be committed.
 */
public class Base64DecodeToFile extends UserAction<java.lang.Boolean>
{
	private final java.lang.String encoded;
	/** @deprecated use targetFile.getMendixObject() instead. */
	@java.lang.Deprecated(forRemoval = true)
	private final IMendixObject __targetFile;
	private final system.proxies.FileDocument targetFile;

	public Base64DecodeToFile(
		IContext context,
		java.lang.String _encoded,
		IMendixObject _targetFile
	)
	{
		super(context);
		this.encoded = _encoded;
		this.__targetFile = _targetFile;
		this.targetFile = _targetFile == null ? null : system.proxies.FileDocument.initialize(getContext(), _targetFile);
	}

	@java.lang.Override
	public java.lang.Boolean executeAction() throws Exception
	{
		// BEGIN USER CODE
		StringUtils.base64DecodeToFile(getContext(), encoded, targetFile);
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
		return "Base64DecodeToFile";
	}

	// BEGIN EXTRA CODE
	// END EXTRA CODE
}
