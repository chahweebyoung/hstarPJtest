<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style type="text/css">
        @import url(./signUP.css);
    </style>
</head>
<body>
    <div class="uply">
        회원가입 화면입니다.<br> 이 부분은 jsp입니다. <br>
        <form action="signUP_OK.jsp" method=post>
            이름:<input type="text" name="tboxName"><br>
            학번:<input type="text" name="tboxNumber"><br>
            전화번호:<input type="text" name="tboxPhone"><br>
            주소:<input type="text" name="tboxAdd"><br>

            <input type="submit" value="가입">
        </form>
    </div>
    
    
</body>
</html>