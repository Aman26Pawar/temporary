package DAO;

import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.support.JdbcDaoSupport;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import com.example.demo.Teacher;
import mappers.TeacherMapper;

@Repository
@Transactional
public class TeacherDAO extends JdbcDaoSupport
{
	@Autowired
	public TeacherDAO(DataSource dataSource) 
	{
		this.setDataSource(dataSource);
	}
	
	public Teacher findTeacherAccount(String userName)
	{
		String sql = TeacherMapper.BASE_SQL + "where t.userName=?";
		
		 Object[] params = new Object[] { userName };
		 TeacherMapper mapper = new TeacherMapper();
		 try{
			 Teacher teacherInfo = this.getJdbcTemplate().queryForObject(sql, params, mapper);
				return teacherInfo;	 
		 }catch(EmptyResultDataAccessException e){
			 return null;
		 }
	}
}
