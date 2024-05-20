CREATE DATABASE Teacher_feedback;
use Teacher_feedback;

CREATE TABLE feedback (
    id INT AUTO_INCREMENT PRIMARY KEY,
    teacher_name VARCHAR(255),
    student_name VARCHAR(255),
    subject_name VARCHAR(255),
    explanation TEXT
);

