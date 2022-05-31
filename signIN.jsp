<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style type="text/css">
        @import url(./signIN.css);
    </style>
</head>
<body>
    <div class="uply">
        로그인 화면입니다.<br> 이 부분은 jsp입니다. <br>
        <form action="signIN_OK.jsp" method=POST>
            이름:<input type="text" name="userNAMEs"><br>
            학번:<input type="text" name="userHAKs"><br>
            
            <input type="submit" value="로그인">
        </form>
    </div>
    
    
</body>
</html>