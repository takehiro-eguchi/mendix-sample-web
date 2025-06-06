// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
// Special characters, e.g., é, ö, à, etc. are supported in comments.

package communitycommons.actions;

import com.mendix.systemwideinterfaces.core.IContext;
import com.mendix.systemwideinterfaces.core.IMendixObject;
import communitycommons.Misc;
import com.mendix.systemwideinterfaces.core.UserAction;

/**
 * Restricted to 10 files at once for Mendix Cloud v4 compatibility. If you need to merge more than 10 files at once merge recursively instead or change the MergeMultiplePdfs_MaxAtOnce constant.
 */
public class MergeMultiplePdfs extends UserAction<java.lang.Boolean>
{
	/** @deprecated use com.mendix.utils.ListUtils.map(FilesToMerge, com.mendix.systemwideinterfaces.core.IEntityProxy::getMendixObject) instead. */
	@java.lang.Deprecated(forRemoval = true)
	private final java.util.List<IMendixObject> __FilesToMerge;
	private final java.util.List<system.proxies.FileDocument> FilesToMerge;
	/** @deprecated use MergedDocument.getMendixObject() instead. */
	@java.lang.Deprecated(forRemoval = true)
	private final IMendixObject __MergedDocument;
	private final system.proxies.FileDocument MergedDocument;

	public MergeMultiplePdfs(
		IContext context,
		java.util.List<IMendixObject> _filesToMerge,
		IMendixObject _mergedDocument
	)
	{
		super(context);
		this.__FilesToMerge = _filesToMerge;
		this.FilesToMerge = java.util.Optional.ofNullable(_filesToMerge)
			.orElse(java.util.Collections.emptyList())
			.stream()
			.map(filesToMergeElement -> system.proxies.FileDocument.initialize(getContext(), filesToMergeElement))
			.collect(java.util.stream.Collectors.toList());
		this.__MergedDocument = _mergedDocument;
		this.MergedDocument = _mergedDocument == null ? null : system.proxies.FileDocument.initialize(getContext(), _mergedDocument);
	}

	@java.lang.Override
	public java.lang.Boolean executeAction() throws Exception
	{
		// BEGIN USER CODE
		return Misc.mergePDF(this.getContext(), this.FilesToMerge, this.MergedDocument.getMendixObject());
		// END USER CODE
	}

	/**
	 * Returns a string representation of this action
	 * @return a string representation of this action
	 */
	@java.lang.Override
	public java.lang.String toString()
	{
		return "MergeMultiplePdfs";
	}

	// BEGIN EXTRA CODE
	// END EXTRA CODE
}
