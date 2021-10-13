const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});


pool.query(`
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort, count(assistance_requests.teacher_id) as total_assistances
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
GROUP BY teachers.name, cohorts.name
HAVING cohorts.name LIKE '%${process.argv[2]}%'
ORDER BY teacher;
`)
.then(res => {
  console.log(res.rows)
  res.rows.forEach(user => {
    console.log(`${user.cohort}: ${user.teacher}`);
  })
}).catch(err => console.error('query error', err.stack));
