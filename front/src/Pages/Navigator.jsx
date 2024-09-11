import { useEffect, useState, EventHandler, ReactNode, useContext } from 'react'
import axios from "axios"
import { useNavigate, useLocation } from 'react-router-dom';

import { UserContext } from '../UserContext';

function Navigator() {

    const nav = useNavigate();
    const location = useLocation();

    const { uEmail } = useContext(UserContext);

    const indexPage = () => {
        nav("/");
    }

    const generalPage = () => {
        nav("/general/list");
    }
    const matchingPage = () => {
        nav("/matching/list");
    }
    const announcePage = () => {
        nav("/announce/list");
    }
    const supportPage = () => {
        nav("/support/write");
    }

    const signInPage = () => {
        nav("/user/signin");
    }
    const signUpPage = () => {
        nav("/user/signup");
    }



    const [toggle, setToggle] = useState({
        chat: false,
        notification: false,
        image: false,
    });

    useEffect(() => {
        setToggle({
            chat: false,
            notification: false,
            image: false,
        });
    }, [location]);

    const handleButtonClick = (e) => {
        const name = e.currentTarget.name;
        setToggle({ ...toggle, [name]: !toggle[name] });
    }

    const handleMyPage = () => {
        nav("/user/mypage");
    }
    const handleActivity = () => {
        console.log("Activity");
    }
    const handleSignOut = async () => {
        await axios.get('/api/user/signout');
        window.location.href = "/";
    }



    return (
        <nav className="absolute left-0 top-0 w-[1440px] h-[74px] flex">
            <div className="absolute left-0 top-0 w-[1440px] h-[74px] bg-[#fff] border-[solid] border"></div>

            <button onClick={indexPage} className="absolute -translate-y-1/2 left-[75px] top-1/2 w-[110px] text-[32px] leading-[40px] font-['Roboto'] font-bold text-[#000] text-center">MeCCa</button>

            {(!location.pathname.startsWith('/user') && !location.pathname.startsWith('/kakao')) && (
                <div className="absolute left-[305px] top-[25px] flex flex-row items-center justify-start gap-[30px]">
                    <button onClick={generalPage} className="text-[16px] leading-[25px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">자유</button>
                    <button onClick={matchingPage} className="text-[16px] leading-[25px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">매칭</button>
                    <button onClick={announcePage} className="text-[16px] leading-[25px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">공지사항</button>
                    <button onClick={supportPage} className="text-[16px] leading-[25px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">1:1 문의</button>
                </div>
            )}

            {(!location.pathname.startsWith('/user') && !location.pathname.startsWith('/kakao')) && (
                <div className="absolute -translate-x-1/2 -translate-y-1/2 left-[calc(50%+306px)] top-1/2 w-[218px] flex flex-row items-center justify-start gap-[5px] py-[5px] px-[10px] bg-[#fff] border-[1px] border-solid border-[#00000080] rounded-[30px]">
                    <img width="24" height="24" src="/assets/Index/Icon.png"></img>
                    <div className="flex-1 text-[14px] leading-[14px] font-['Roboto'] font-semibold text-[#00000040]">검색</div>
                </div>
            )}

            {(uEmail == null) && (
                <div className="absolute left-[1145px] top-[13px] flex flex-row items-center justify-start gap-[20px]">
                    <button onClick={signInPage} className="flex flex-row items-center justify-center py-[12px] px-[24px] border-[1px] border-solid border-[#00000080] rounded-[30px]">
                        <div className="text-[16px] leading-[25px] font-['Roboto'] text-[#000] text-center whitespace-nowrap">로그인</div>
                    </button>
                    <button onClick={signUpPage} className="flex flex-row items-center justify-center py-[12px] px-[24px] bg-[#0090f9] rounded-[30px]">
                        <div className="text-[16px] leading-[25px] font-['Roboto'] font-semibold text-[#fff] text-center whitespace-nowrap">회원가입</div>
                    </button>
                </div>
            )}

            {(uEmail != null && location.pathname != '/user/changepassword' && location.pathname != '/user/delete') && (
                <div className="absolute -translate-y-1/2 left-[1244px] top-1/2 flex flex-row items-center justify-start gap-[7px]">
                    <button onClick={handleButtonClick} name='chat'>
                        <img width="35" height="35" src="/assets/Index/Chat.png"></img>
                    </button>
                    <button onClick={handleButtonClick} name='notification'>
                        <img width="35" height="35" src="/assets/Index/Notification.png"></img>
                    </button>
                    <button onClick={handleButtonClick} name='image'>
                        <img width="35" height="35" src="/assets/Index/Image.png"></img>
                    </button>
                </div>
            )}

            {toggle.image && (
                <div className="absolute -translate-y-1/2 left-[1244px] top-1/2 flex flex-row items-center justify-start gap-[7px]">
                    <div className="flex flex-col items-start justify-center gap-[10px] py-[5px] px-[10px] bg-[#fff] border-[1px] border-solid border-[#00000080] rounded-[10px]">
                        <button onClick={handleMyPage} className="text-[16px] leading-[25px] font-['Roboto'] text-[#000] whitespace-nowrap">프로필</button>
                        <button onClick={handleActivity} className="text-[16px] leading-[25px] font-['Roboto'] text-[#000] whitespace-nowrap">활동내역</button>
                        <button onClick={handleSignOut} className="text-[16px] leading-[25px] font-['Roboto'] text-[#000] whitespace-nowrap">로그아웃</button>
                    </div>
                </div>
            )}

        </nav>
    );
}

export default Navigator;