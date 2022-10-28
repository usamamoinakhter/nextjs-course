import React from 'react'
import { useRouter } from 'next/router'

function ClientProjects() {
  const router = useRouter()
  console.log(router.query)

  function loadProjectHandler() {
    //do programmatic navigation
    router.push({
      pathname: '/clients/[id]/[clientprojectid]',
      query: { id: router.query.id, clientprojectid: 'projecta' },
    })
  }
  return (
    <div>
      <h1>Projects of a Given Client</h1>
      <button onClick={loadProjectHandler} >Load Project A</button>
    </div>
  )
}

export default ClientProjects