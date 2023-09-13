async function getTrailersData(id: string) {
  const res = await fetch(`https://${process.env.NEXT_PUBLIC_API_HOST}/api/trailers/${id}`, {
    headers: {
      'X-RapidAPI-Key': `${process.env.NEXT_PUBLIC_API_KEY}`,
      'X-RapidAPI-Host': `${process.env.NEXT_PUBLIC_API_HOST}`
    },
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export { getTrailersData }
