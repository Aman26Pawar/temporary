package ExceptionHandling;


public class UserAlreadyExists extends RuntimeException
{
	private String keySpace;
	private String table;
	private Object fieldValue;
	
	public UserAlreadyExists(String keySpace, String table,Object fieldValue)
	{
		super(String.format("%s already exists in %s ", keySpace, table,fieldValue));
		this.keySpace = keySpace;
		this.table = table;
		this.fieldValue =fieldValue;
	}

	public Object getFieldValue() {
		return fieldValue;
	}

	public void setFieldValue(Object fieldValue) {
		this.fieldValue = fieldValue;
	}

	public String getKeySpace() {
		return keySpace;
	}

	public void setKeySpace(String keySpace) {
		this.keySpace = keySpace;
	}

	public String getTable() {
		return table;
	}

	public void setTable(String table) {
		this.table = table;
	}
	
	
}
