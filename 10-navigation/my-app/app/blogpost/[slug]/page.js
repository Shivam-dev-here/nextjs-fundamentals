"use client"
import React from 'react'
import { useParams } from 'next/navigation'

const page = () => {
    const params = useParams()
  return (
    <div>
      This is useParams {params.slug}
    </div>
  )
}

export default page
