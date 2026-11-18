package org.zerok.mallapi.service;

import jakarta.transaction.Transactional;
import org.zerok.mallapi.dto.CartItemDTO;
import org.zerok.mallapi.dto.CartItemListDTO;

import java.util.List;

@Transactional
public interface CartService {
    public List<CartItemListDTO> addOrModify(CartItemDTO cartItemDTO);
    public List<CartItemListDTO> getCartItems(String email);
    public List<CartItemListDTO> remove(Long cino);
}
