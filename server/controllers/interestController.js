const db = require('../db/connection')
const nodemailer = require('nodemailer')

async function submitInterest(req, res) {
  const { name, phone, email, style, notes } = req.body

  if (!name || !phone || !style) {
    return res.status(400).json({ error: 'Name, phone, and style are required.' })
  }

  const sql = 'INSERT INTO interests (name, phone, email, style, notes) VALUES (?, ?, ?, ?, ?)'
  db.query(sql, [name, phone, email || '', style, notes || ''], async (err) => {
    if (err) {
      console.error('DB insert error:', err)
      return res.status(500).json({ error: 'Failed to save interest.' })
    }

    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD
        }
      })

      await transporter.sendMail({
        from:    process.env.GMAIL_USER,
        to:      process.env.GMAIL_USER,
        subject: `New interest: ${style}`,
        text:    `Name: ${name}\nPhone: ${phone}\nEmail: ${email || 'Not provided'}\nStyle: ${style}\nNotes: ${notes || 'None'}`
      })
    } catch (mailErr) {
      console.error('Email error:', mailErr)
    }

    return res.status(201).json({ message: 'Interest submitted successfully.' })
  })
}

module.exports = { submitInterest }