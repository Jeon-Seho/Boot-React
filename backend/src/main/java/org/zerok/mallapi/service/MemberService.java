package org.zerok.mallapi.service;

import org.springframework.transaction.annotation.Transactional;
import org.zerok.mallapi.domain.Member;
import org.zerok.mallapi.dto.MemberDTO;

import java.util.stream.Collectors;

@Transactional
public interface MemberService {
    MemberDTO getKakaoMember(String accessToken);

    default MemberDTO entityToDTO(Member member) {
        MemberDTO dto = new MemberDTO(
                member.getEmail(),
                member.getPw(),
                member.getNickname(),
                member.isSocial(),
                member.getMemberRoleList().stream()
                        .map(memberRole-> memberRole.name()).collect(Collectors.toList()));

        return dto;
    }
}
