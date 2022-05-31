// 자바스크립트입니다.

//전역변수입니다.

var radio_box;
var check_box;
var select_serach;
var select_text;
var check_state = 0;

function Key_Press(k) // event매개변수를 k인자에 넣어줍니다. //키보드 키 이벤트관련 구문입니다.
{
    check_box = document.getElementsByName('NewTab'); //채크박스의 자료를 가져옵니다

    radio_box = document.getElementsByName('Search_Engine'); //라디오버튼의 자료를 가져옵니다.

    select_serach = null; //라디오버튼의 채크된 벨류값을 가져오기위해 선언해주고 초기화합니다.

    for (var i = 0; i < radio_box.length; i++) //라디오버튼의 길이만큼 반복합니다.
    {

        if (radio_box[i].checked) //라디오버튼의 [i인덱스] = i번째값이 채크되있는지 검사합니다.
        {

            select_serach = radio_box[i].value; //채크되있으면 채크된 벨류값을 넣어줍니다.

        }

    }

    if (check_box[0].checked) {

        check_state = 1;

    } else {

        check_state = 0;

    }

    if (k.keyCode == 13) { //키를 누른값이 13=Enter 키일 경우입니다.

        select_text = document.getElementById('Search_Bar_Entity').value;

        switch (select_serach) { //채크된 벨류값을 비교합니다.

            case "Google":
                if (select_text == null || select_text == "") {
                    var link = "https://www.google.com/";
                    if (check_state == 0) {
                        location.href = link; //현재창에서 링크에 접속합니다.
                    } else {
                        window.open(link, '_blank'); //새탭/창 에서 링크에 접속합니다.
                    }

                } else {
                    var link = "https://www.google.com/search?q=" + select_text;
                    if (check_state == 0) {
                        location.href = link;
                    } else {
                        window.open(link, '_blank');
                    }
                }
                break;

            case "Naver":
                if (select_text == null || select_text == "") {
                    var link = "https://www.naver.com/";
                    if (check_state == 0) {
                        location.href = link;
                    } else {
                        window.open(link, '_blank');
                    }
                } else {
                    var link = 'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=' + select_text;
                    if (check_state == 0) {
                        location.href = link;
                    } else {
                        window.open(link, '_blank');
                    }
                }
                break;

            case "Youtube":
                if (select_text == null || select_text == "") {
                    var link = "https://www.youtube.com/";
                    if (check_state == 0) {
                        location.href = link;
                    } else {
                        window.open(link, '_blank');
                    }
                } else {
                    var link = 'https://www.youtube.com/results?search_query=' + select_text;
                    if (check_state == 0) {
                        location.href = link;
                    } else {
                        window.open(link, '_blank');
                    }
                }
                break;

            case "han-young":
                if (select_text == null || select_text == "") {
                    var link = "https://papago.naver.com/";
                    if (check_state == 0) {
                        location.href = link;
                    } else {
                        window.open(link, '_blank');
                    }
                } else {
                    var link = 'https://papago.naver.com/?sk=ko&tk=en&st=' + select_text;
                    if (check_state == 0) {
                        location.href = link;
                    } else {
                        window.open(link, '_blank');
                    }
                }
                break;

            case "young-han":
                if (select_text == null || select_text == "") {
                    var link = "https://papago.naver.com/";
                    if (check_state == 0) {
                        location.href = link;
                    } else {
                        window.open(link, '_blank');
                    }
                } else {
                    var link = 'https://papago.naver.com/?sk=en&tk=ko&hn=0&st=' + select_text;
                    if (check_state == 0) {
                        location.href = link;
                    } else {
                        window.open(link, '_blank');
                    }
                }
                break;

            default:

                alert("채크값이 없습니다!");

        }

    }

}

function On_Click() //검색버튼관련 구문입니다. 위와 동일한 코드입니다.
{
    check_box = document.getElementsByName('NewTab');

    radio_box = document.getElementsByName('Search_Engine');

    select_serach = null;

    for (var i = 0; i < radio_box.length; i++) {

        if (radio_box[i].checked) {

            select_serach = radio_box[i].value;

        }

    }

    if (check_box[0].checked) {

        check_state = 1;

    } else {

        check_state = 0;

    }

    select_text = document.getElementById('Search_Bar_Entity').value;

    switch (select_serach) {

        case "Google":
            if (select_text == null || select_text == "") {
                var link = "https://www.google.com/";
                if (check_state == 0) {
                    location.href = link;
                } else {
                    window.open(link, '_blank');
                }
            } else {
                var link = "https://www.google.com/search?q=" + select_text;
                if (check_state == 0) {
                    location.href = link;
                } else {
                    window.open(link, '_blank');
                }
            }
            break;

        case "Naver":
            if (select_text == null || select_text == "") {
                var link = "https://www.naver.com/";
                if (check_state == 0) {
                    location.href = link;
                } else {
                    window.open(link, '_blank');
                }
            } else {
                var link = 'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=' + select_text;
                if (check_state == 0) {
                    location.href = link;
                } else {
                    window.open(link, '_blank');
                }
            }
            break;

        case "Youtube":
            if (select_text == null || select_text == "") {
                var link = "https://www.youtube.com/";
                if (check_state == 0) {
                    location.href = link;
                } else {
                    window.open(link, '_blank');
                }
            } else {
                var link = 'https://www.youtube.com/results?search_query=' + select_text;
                if (check_state == 0) {
                    location.href = link;
                } else {
                    window.open(link, '_blank');
                }
            }
            break;

        case "han-young":
            if (select_text == null || select_text == "") {
                var link = "https://papago.naver.com/";
                if (check_state == 0) {
                    location.href = link;
                } else {
                    window.open(link, '_blank');
                }
            } else {
                var link = 'https://papago.naver.com/?sk=ko&tk=en&st=' + select_text;
                if (check_state == 0) {
                    location.href = link;
                } else {
                    window.open(link, '_blank');
                }
            }
            break;

        case "young-han":
            if (select_text == null || select_text == "") {
                var link = "https://papago.naver.com/";
                if (check_state == 0) {
                    location.href = link;
                } else {
                    window.open(link, '_blank');
                }
            } else {
                var link = 'https://papago.naver.com/?sk=en&tk=ko&hn=0&st=' + select_text;
                if (check_state == 0) {
                    location.href = link;
                } else {
                    window.open(link, '_blank');
                }
            }
            break;

        default:

            alert("채크값이 없습니다!");

    }

}

function On_Clip_Click() //클립보드 버튼관련 구문입니다. 위와 동일한 코드입니다.
{
    check_box = document.getElementsByName('NewTab');

    radio_box = document.getElementsByName('Search_Engine');

    select_serach = null;

    for (var i = 0; i < radio_box.length; i++) {

        if (radio_box[i].checked) {

            select_serach = radio_box[i].value;

        }

    }

    if (check_box[0].checked) {

        check_state = 1;

    } else {

        check_state = 0;

    }

    select_text = document.getElementById('Search_Bar_Entity').value;

    switch (select_serach) {
        //클립보드를 사용합니다.
        case "Google":
            navigator.clipboard.readText().then((Clip_text) => { //클립보드의 텍스트를 읽고 Clip_text 에 넣어줍니다.
                var link = "https://www.google.com/search?q=" + Clip_text;
                if (check_state == 0) {
                    location.href = link;
                } else {
                    window.open(link, '_blank');
                }
            });
            break;

        case "Naver":
            navigator.clipboard.readText().then((Clip_text) => {
                var link = 'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=' + Clip_text;
                if (check_state == 0) {
                    location.href = link;
                } else {
                    window.open(link, '_blank');
                }
            });
            break;

        case "Youtube":
            navigator.clipboard.readText().then((Clip_text) => {
                var link = 'https://www.youtube.com/results?search_query=' + Clip_text;
                if (check_state == 0) {
                    location.href = link;
                } else {
                    window.open(link, '_blank');
                }
            });
            break;

        case "han-young":
            navigator.clipboard.readText().then((Clip_text) => {
                var link = 'https://papago.naver.com/?sk=ko&tk=en&st=' + Clip_text;
                if (check_state == 0) {
                    location.href = link;
                } else {
                    window.open(link, '_blank');
                }
            });
            break;

        case "young-han":
            navigator.clipboard.readText().then((Clip_text) => {
                var link = 'https://papago.naver.com/?sk=en&tk=ko&hn=0&st=' + Clip_text;
                if (check_state == 0) {
                    location.href = link;
                } else {
                    window.open(link, '_blank');
                }
            });
            break;


        default:

            alert("채크값이 없습니다!");

    }

}
// 홈페이지정보
function My_info() {
    alert("2018113032 차휘병 중간과제 제출 입니다.");
}
//표 형 바로가기 버튼들 입니다.
function Q_BTN(Btn_number) {
    check_box = document.getElementsByName('NewTab');

    if (check_box[0].checked) {

        check_state = 1;

    } else {

        check_state = 0;

    }
    // 전달받은 인자별 코드입니다.
    switch (Btn_number) {
        case 1:
            var link = "https://google.com/";
            if (check_state == 0) {
                location.href = link;
            } else {
                window.open(link, '_blank');
            }
            break;
        case 2:
            var link = "https://naver.com/";
            if (check_state == 0) {
                location.href = link;
            } else {
                window.open(link, '_blank');
            }
            break;
        case 3:
            var link = "https://daum.net/";
            if (check_state == 0) {
                location.href = link;
            } else {
                window.open(link, '_blank');
            }
            break;
        case 4:
            var link = "https://youtube.com/";
            if (check_state == 0) {
                location.href = link;
            } else {
                window.open(link, '_blank');
            }
            break;
        case 5:
            var link = "https://jwu.ac.kr/";
            if (check_state == 0) {
                location.href = link;
            } else {
                window.open(link, '_blank');
            }
            break;
        case 6:
            var link = "http://gofile.me/6WDuI/RdfK19aML";
            if (check_state == 0) {
                location.href = link;
            } else {
                window.open(link, '_blank');
            }
            break;
        case 7:
            var link = "https://haksa.jwu.ac.kr/com/index2.jsp";
            if (check_state == 0) {
                location.href = link;
            } else {
                window.open(link, '_blank');
            }
            break;
        case 8:
            var link = "http://portal.jwu.ac.kr/";
            if (check_state == 0) {
                location.href = link;
            } else {
                window.open(link, '_blank');
            }
            break;
        case 9:
            var link = "https://classroom.google.com/u/0/h";
            if (check_state == 0) {
                location.href = link;
            } else {
                window.open(link, '_blank');
            }
            break;
        case 10:
            var link = "https://ecampus.biopride.or.kr/jwu";
            if (check_state == 0) {
                location.href = link;
            } else {
                window.open(link, '_blank');
            }
            break;
        case 11:
            var link = "http://queen.jwu.ac.kr/";
            if (check_state == 0) {
                location.href = link;
            } else {
                window.open(link, '_blank');
            }
            break;
        case 12:
            var link = "https://cafe.naver.com/jwucomp";
            if (check_state == 0) {
                location.href = link;
            } else {
                window.open(link, '_blank');
            }
            break;
    }
}