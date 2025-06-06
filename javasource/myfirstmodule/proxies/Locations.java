// This file was generated by Mendix Studio Pro.
//
// WARNING: Code you write here will be lost the next time you deploy the project.

package myfirstmodule.proxies;

public class Locations implements com.mendix.systemwideinterfaces.core.IEntityProxy
{
	private final com.mendix.systemwideinterfaces.core.IMendixObject locationsMendixObject;

	private final com.mendix.systemwideinterfaces.core.IContext context;

	/**
	 * Internal name of this entity
	 */
	public static final java.lang.String entityName = "MyFirstModule.Locations";

	/**
	 * Enum describing members of this entity
	 */
	public enum MemberNames
	{
		State("State"),
		City("City"),
		Country("Country"),
		Longitude("Longitude"),
		Latitude("Latitude"),
		PostalCode("PostalCode");

		private final java.lang.String metaName;

		MemberNames(java.lang.String s)
		{
			metaName = s;
		}

		@java.lang.Override
		public java.lang.String toString()
		{
			return metaName;
		}
	}

	public Locations(com.mendix.systemwideinterfaces.core.IContext context)
	{
		this(context, com.mendix.core.Core.instantiate(context, entityName));
	}

	protected Locations(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject locationsMendixObject)
	{
		if (locationsMendixObject == null) {
			throw new java.lang.IllegalArgumentException("The given object cannot be null.");
		}
		if (!com.mendix.core.Core.isSubClassOf(entityName, locationsMendixObject.getType())) {
			throw new java.lang.IllegalArgumentException(String.format("The given object is not a %s", entityName));
		}	

		this.locationsMendixObject = locationsMendixObject;
		this.context = context;
	}

	/**
	 * Initialize a proxy using context (recommended). This context will be used for security checking when the get- and set-methods without context parameters are called.
	 * The get- and set-methods with context parameter should be used when for instance sudo access is necessary (IContext.createSudoClone() can be used to obtain sudo access).
	 * @param context The context to be used
	 * @param mendixObject The Mendix object for the new instance
	 * @return a new instance of this proxy class
	 */
	public static myfirstmodule.proxies.Locations initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject mendixObject)
	{
		return new myfirstmodule.proxies.Locations(context, mendixObject);
	}

	public static myfirstmodule.proxies.Locations load(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		com.mendix.systemwideinterfaces.core.IMendixObject mendixObject = com.mendix.core.Core.retrieveId(context, mendixIdentifier);
		return myfirstmodule.proxies.Locations.initialize(context, mendixObject);
	}

	public static java.util.List<myfirstmodule.proxies.Locations> load(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String xpathConstraint) throws com.mendix.core.CoreException
	{
		return com.mendix.core.Core.createXPathQuery(String.format("//%1$s%2$s", entityName, xpathConstraint))
			.execute(context)
			.stream()
			.map(obj -> myfirstmodule.proxies.Locations.initialize(context, obj))
			.collect(java.util.stream.Collectors.toList());
	}

	/**
	 * @return value of State
	 */
	public final java.lang.String getState()
	{
		return getState(getContext());
	}

	/**
	 * @param context
	 * @return value of State
	 */
	public final java.lang.String getState(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.State.toString());
	}

	/**
	 * Set value of State
	 * @param state
	 */
	public final void setState(java.lang.String state)
	{
		setState(getContext(), state);
	}

	/**
	 * Set value of State
	 * @param context
	 * @param state
	 */
	public final void setState(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String state)
	{
		getMendixObject().setValue(context, MemberNames.State.toString(), state);
	}

	/**
	 * @return value of City
	 */
	public final java.lang.String getCity()
	{
		return getCity(getContext());
	}

	/**
	 * @param context
	 * @return value of City
	 */
	public final java.lang.String getCity(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.City.toString());
	}

	/**
	 * Set value of City
	 * @param city
	 */
	public final void setCity(java.lang.String city)
	{
		setCity(getContext(), city);
	}

	/**
	 * Set value of City
	 * @param context
	 * @param city
	 */
	public final void setCity(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String city)
	{
		getMendixObject().setValue(context, MemberNames.City.toString(), city);
	}

	/**
	 * @return value of Country
	 */
	public final java.lang.String getCountry()
	{
		return getCountry(getContext());
	}

	/**
	 * @param context
	 * @return value of Country
	 */
	public final java.lang.String getCountry(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.Country.toString());
	}

	/**
	 * Set value of Country
	 * @param country
	 */
	public final void setCountry(java.lang.String country)
	{
		setCountry(getContext(), country);
	}

	/**
	 * Set value of Country
	 * @param context
	 * @param country
	 */
	public final void setCountry(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String country)
	{
		getMendixObject().setValue(context, MemberNames.Country.toString(), country);
	}

	/**
	 * @return value of Longitude
	 */
	public final java.math.BigDecimal getLongitude()
	{
		return getLongitude(getContext());
	}

	/**
	 * @param context
	 * @return value of Longitude
	 */
	public final java.math.BigDecimal getLongitude(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.math.BigDecimal) getMendixObject().getValue(context, MemberNames.Longitude.toString());
	}

	/**
	 * Set value of Longitude
	 * @param longitude
	 */
	public final void setLongitude(java.math.BigDecimal longitude)
	{
		setLongitude(getContext(), longitude);
	}

	/**
	 * Set value of Longitude
	 * @param context
	 * @param longitude
	 */
	public final void setLongitude(com.mendix.systemwideinterfaces.core.IContext context, java.math.BigDecimal longitude)
	{
		getMendixObject().setValue(context, MemberNames.Longitude.toString(), longitude);
	}

	/**
	 * @return value of Latitude
	 */
	public final java.math.BigDecimal getLatitude()
	{
		return getLatitude(getContext());
	}

	/**
	 * @param context
	 * @return value of Latitude
	 */
	public final java.math.BigDecimal getLatitude(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.math.BigDecimal) getMendixObject().getValue(context, MemberNames.Latitude.toString());
	}

	/**
	 * Set value of Latitude
	 * @param latitude
	 */
	public final void setLatitude(java.math.BigDecimal latitude)
	{
		setLatitude(getContext(), latitude);
	}

	/**
	 * Set value of Latitude
	 * @param context
	 * @param latitude
	 */
	public final void setLatitude(com.mendix.systemwideinterfaces.core.IContext context, java.math.BigDecimal latitude)
	{
		getMendixObject().setValue(context, MemberNames.Latitude.toString(), latitude);
	}

	/**
	 * @return value of PostalCode
	 */
	public final java.lang.Integer getPostalCode()
	{
		return getPostalCode(getContext());
	}

	/**
	 * @param context
	 * @return value of PostalCode
	 */
	public final java.lang.Integer getPostalCode(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.Integer) getMendixObject().getValue(context, MemberNames.PostalCode.toString());
	}

	/**
	 * Set value of PostalCode
	 * @param postalcode
	 */
	public final void setPostalCode(java.lang.Integer postalcode)
	{
		setPostalCode(getContext(), postalcode);
	}

	/**
	 * Set value of PostalCode
	 * @param context
	 * @param postalcode
	 */
	public final void setPostalCode(com.mendix.systemwideinterfaces.core.IContext context, java.lang.Integer postalcode)
	{
		getMendixObject().setValue(context, MemberNames.PostalCode.toString(), postalcode);
	}

	@java.lang.Override
	public final com.mendix.systemwideinterfaces.core.IMendixObject getMendixObject()
	{
		return locationsMendixObject;
	}

	@java.lang.Override
	public final com.mendix.systemwideinterfaces.core.IContext getContext()
	{
		return context;
	}

	@java.lang.Override
	public boolean equals(Object obj)
	{
		if (obj == this) {
			return true;
		}
		if (obj != null && getClass().equals(obj.getClass()))
		{
			final myfirstmodule.proxies.Locations that = (myfirstmodule.proxies.Locations) obj;
			return getMendixObject().equals(that.getMendixObject());
		}
		return false;
	}

	@java.lang.Override
	public int hashCode()
	{
		return getMendixObject().hashCode();
	}

  /**
   * Gives full name ("Module.Entity" name) of the type of the entity.
   *
   * @return the name
   */
	public static java.lang.String getType()
	{
		return entityName;
	}
}
