SELECT count(assistance_requests.*) as total_assistances, name
FROM assistance_requests
JOIN teachers ON teachers.id = teacher_id
GROUP BY teachers.name
HAVING name = 'Waylon Boehm';