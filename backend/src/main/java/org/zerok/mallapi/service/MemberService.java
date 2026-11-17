package org.zerok.mallapi.service;

import org.springframework.transaction.annotation.Transactional;
import org.zerok.mallapi.dto.MemberDTO;

@Transactional
public interface MemberService {
    MemberDTO getKakaoMember(String accessToken);
}
