import mongoose from 'mongoose'
const Schema = mongoose.Schema

const job = new Schema({
  name: {
    type: String,
    required: true
  }
})

mongoose.models = {}

const Job = mongoose.model('Job', job)

export default Job
