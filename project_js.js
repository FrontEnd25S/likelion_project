function searchAndOpen() {
    let userInput = document.getElementById('search_input');

    const directory = {"수강신청 꿀팁": "/likelion_project/courseTips/cT.html",
                       "과제 및 시험 팁": "/likelion_project/assignmentTips/aT.html",
                       "스터디 그룹": "/likelion_project/studyGroup/sG.html",
                       "단과별 게시판": "/likelion_project/communityBulletinBoard/cBB.html",

                       "학교 주변 맛집": "/likelion_project/goodFood/gF.html",
                       "기숙사/하우징 정보": "/likelion_project/housingInfo/hI.html",
                       "학교 지도": "/likelion_project/schoolMap/sM.html",

                       "Opt와 Cpt에 대한 설명": "/likelion_project/Opt&Cpt/O&C.html",
                       "네트워킹 이벤트": "/likelion_project/Networking/n.html", 
                       "인턴십 정보 모음": "/likelion_project/Internship/I.html"}

    
    if (userInput.value in directory){
        window.open(directory[userInput.value], "_self");
    } else {
        alert("존재하지 않는 페이지입니다!");
        document.getElementById('search_input').value=""
    };
    return;
};
