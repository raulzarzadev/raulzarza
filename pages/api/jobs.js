import connectDB from '../../middleware/mongodb'
import Job from '../../models/Job'

const getJobs = async (req, res) => {
  const jobs = await Job.find()
  return res.json(jobs)
}

export default connectDB(getJobs)
