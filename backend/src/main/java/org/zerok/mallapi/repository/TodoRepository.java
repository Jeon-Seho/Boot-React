package org.zerok.mallapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.zerok.mallapi.domain.Todo;

public interface TodoRepository extends JpaRepository<Todo, Long> {
}
