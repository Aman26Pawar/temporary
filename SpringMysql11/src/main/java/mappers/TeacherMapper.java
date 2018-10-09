package mappers;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.example.demo.Teacher;

public class TeacherMapper implements RowMapper<Teacher>
{

	public static final String BASE_SQL //
    = "Select t.TeacherID,t.firstName,t.lastName,t.userName,t.password from teacehrinfo t ";
	
	@Override
	public Teacher mapRow(ResultSet rs, int rowNum) throws SQLException {
		int TeacherID = rs.getInt("TeacherID");
		String firstName = rs.getString("firstName");
		String lastName = rs.getString("lastName");
		String userName = rs.getString("userName");
		String password = rs.getString("password");
		return new Teacher(TeacherID,firstName,lastName,userName,password);
	}

}
