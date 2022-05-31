<%@ page import="java.sql.*" contentType="text/html; charset=UTF-8" language="java" %>

<%
    request.setCharacterEncoding("UTF-8");

    String jName = request.getParameter("tboxName");
    String jNumber = request.getParameter("tboxNumber");
    String jPhone = request.getParameter("tboxPhone");
    String jAdd = request.getParameter("tboxAdd");

    Connection conn = null;
    PreparedStatement pstmt = null;
    int result;



    try{
        Class.forName("com.mysql.cj.jdbc.Driver");

        String ulink="jdbc:mysql://chb0110.synology.me:3306/users";
        conn=DriverManager.getConnection(ulink, "root", "chb0110");
        
        String sql = "insert into people values(?,?,?,?)";
        pstmt=conn.prepareStatement(sql);



        pstmt.setString(1, jName);
        pstmt.setString(2, jPhone);
        pstmt.setString(3, jNumber);
        pstmt.setString(4, jAdd);



        result = pstmt.executeUpdate();


        if(result==1){
            response.sendRedirect("./signUP_S.jsp");
        }else{
            response.sendRedirect("./signUP_F.jsp");
        }


    }catch(Exception e){
		e.printStackTrace();
	}

    finally{
		try{
			if(conn != null) {
                conn.close();
            }
			if(pstmt != null) {
                pstmt.close();
            }
		} catch(Exception e){
			e.printStackTrace();
		}
	}    
%>