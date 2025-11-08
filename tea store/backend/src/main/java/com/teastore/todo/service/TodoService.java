package com.teastore.todo.service;

import com.teastore.todo.model.Todo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicLong;

@Service
public class TodoService {
    private final List<Todo> todos = new ArrayList<>();
    private final AtomicLong idCounter = new AtomicLong();

    public List<Todo> getAllTodos() {
        return new ArrayList<>(todos);
    }

    public Todo getTodoById(Long id) {
        return todos.stream()
                .filter(todo -> todo.getId().equals(id))
                .findFirst()
                .orElse(null);
    }

    public Todo createTodo(Todo todo) {
        todo.setId(idCounter.incrementAndGet());
        todos.add(todo);
        return todo;
    }

    public Todo updateTodo(Long id, Todo updatedTodo) {
        Optional<Todo> todoOptional = todos.stream()
                .filter(todo -> todo.getId().equals(id))
                .findFirst();

        if (todoOptional.isPresent()) {
            Todo existingTodo = todoOptional.get();
            existingTodo.setText(updatedTodo.getText());
            existingTodo.setCompleted(updatedTodo.isCompleted());
            existingTodo.setPriority(updatedTodo.getPriority());
            return existingTodo;
        }
        return null;
    }

    public boolean deleteTodo(Long id) {
        return todos.removeIf(todo -> todo.getId().equals(id));
    }
}

