package com.teastore.todo.model;

public class Todo {
    private Long id;
    private String text;
    private boolean completed;
    private String priority;

    public Todo() {
    }

    public Todo(Long id, String text, boolean completed, String priority) {
        this.id = id;
        this.text = text;
        this.completed = completed;
        this.priority = priority;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }

    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }
}

