<%@ page import="java.sql.*" contentType="text/html; charset=UTF-8" %>

<%
    request.setCharacterEncoding("UTF-8");

    String userName = request.getParameter("userNAMEs");
    String userNumber = request.getParameter("userHAKs");

    String Link="jdbc:mysql://chb0110.synology.me:3306/users";
    Connection conn = null;
    PreparedStatement pstmt = null;
    ResultSet rs = null;

    String sql = "select uName from people where uNumber = ? and uName = ?;";

    try{
        Class.forName("com.mysql.cj.jdbc.Driver");
        conn=DriverManager.getConnection(Link, "root", "chb0110");

        pstmt=conn.prepareStatement(sql.toString());
        pstmt.setString(1, userNumber);
        pstmt.setString(2, userName);

        rs = pstmt.executeQuery();

        if(rs.next()){
            String login_name=rs.getString("uName");   

            session.setAttribute("user_name", login_name);
            response.sendRedirect("./login_welcome.jsp");
        }else{

            response.sendRedirect("./login_fail.jsp");
        }
    } catch(Exception e){
		e.printStackTrace();
		response.sendRedirect("./signIN.jsp"); 
	} finally{
		try{
			if(conn != null) conn.close();
			if(pstmt != null) pstmt.close();
			
		} catch(Exception e){
			e.printStackTrace();
		}
	}
 %>
 