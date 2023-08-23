import { IncomingMessage, ServerResponse } from 'http'
import React from 'react'
import Database from '../../../database/db'

const allAvos = async (req: IncomingMessage, res: ServerResponse) => {
  const db = new Database()
  const allEntries = await db.getAll()

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ allEntries }))

}

export default allAvos
