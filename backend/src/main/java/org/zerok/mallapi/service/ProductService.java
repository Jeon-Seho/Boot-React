package org.zerok.mallapi.service;

import org.springframework.transaction.annotation.Transactional;
import org.zerok.mallapi.dto.PageRequestDTO;
import org.zerok.mallapi.dto.PageResponseDTO;
import org.zerok.mallapi.dto.ProductDTO;

@Transactional
public interface ProductService {
    public PageResponseDTO<ProductDTO> getList(PageRequestDTO pageRequestDTO);
}
