import connectDB from '../../middleware/mongodb'
import Job from '../../models/Job'

/* import connectDB from '../../middleware/mongodb'
import bcrypt from '../../middleware/bcrypt'
import User from '../../models/user'
 */
const getJobs = async (req, res) => {
  const jobs = await Job.find()
  console.log('jobs', jobs)
  return res.json(jobs)
  /*  
  if (req.method === 'POST') {
    // Check if name, email or password is provided
    const { name, email, password } = req.body
    if (name && email && password) {
      try {
        // Hash password to store it in DB
        var passwordhash = await bcrypt.sign(password)
        var job = new Job({
          name
        })
        // Create new job
        var jobcreated = await job.save()
        return res.status(200).send(jobcreated)
      } catch (error) {
        return res.status(500).send(error.message)
      }
    } else {
      res.status(422).send('data_incomplete')
    }
  } else {
    res.status(422).send('req_method_not_supported')
  } */
}

export default connectDB(getJobs)
