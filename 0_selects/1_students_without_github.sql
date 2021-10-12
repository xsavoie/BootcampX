SELECT id, name, email, cohort_id 
FROM students 
WHERE github IS NULL
ORDER BY cohort_id;


SELECT students.name as student, count(assignment_submissions.*) as total_submissions
FROM assignment_submissions
JOIN students ON students.id = student_id
WHERE students.end_date IS NULL
GROUP BY students.name
HAVING total_submissions < 100;