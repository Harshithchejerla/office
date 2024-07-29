const uploadFile = (fileName, id) => {
    return new Promise((resolve, reject) => {
      const fileContent = fs.readFileSync(fileName)
  
      const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `job-${id}.jpg`,
        Body: fileContent
      }
  
      s3.upload(params, (err, data) => {
        if (err) {
          reject(err)
        }
        resolve(data.Location)
      })
    })
  }
  handler.post(async (req, res) => {
    const files = req.files
    const body = req.body
  
    const job = await prisma.job.create({
      data: {
        ...body,
        created_at: new Date().toISOString()
      }
    })
  
    const location = await uploadFile(files.logo.path, job.id)
  
    await prisma.job.update({
      where: { id: job.id },
      data: {
        logo: location
      }
    })
  
    res.redirect(`/jobs/${job.id}/payment`)
  })
  