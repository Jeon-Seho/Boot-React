import { useEffect } from "react";
import { useSearchParams } from "react-router";
import {getAccessToken, getMemberWithAccessToken} from "../../api/kakaoApi";

const KakaoRedirectPage = () => {
    const [searchParams] = useSearchParams()
    const authCode = searchParams.get("code")

    useEffect(() => {
        if(authCode){
            getAccessToken(authCode).then(data =>{
                console.log(data)
                if(data){
                    getMemberWithAccessToken(data).then(memberInfo => {
                        console.log("-------------------")
                        console.log(memberInfo)
                    })
                }
            })
        }
    }, [authCode])

    return (
        <div>
            <div>Kakao Login Redirect</div>
            <div>{authCode}</div>
        </div>
    )
}

export default KakaoRedirectPage;
