SELECT sum(assignment_submissions.duration) as total_duration
FROM students
JOIN cohorts ON cohorts.id = cohort_id
JOIN assignment_submissions ON student_id = students.id
WHERE cohorts.name = 'FEB12';