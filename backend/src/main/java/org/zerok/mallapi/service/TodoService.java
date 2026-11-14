package org.zerok.mallapi.service;

import org.zerok.mallapi.dto.PageRequestDTO;
import org.zerok.mallapi.dto.PageResponseDTO;
import org.zerok.mallapi.dto.TodoDTO;

public interface TodoService {
    Long register(TodoDTO todoDTO);
    TodoDTO get(Long tno);
    void modify(TodoDTO todoDTO);
    void remove(Long tno);
    PageResponseDTO<TodoDTO> list(PageRequestDTO pageRequestDTO);
}
