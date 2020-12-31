/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { post } from 'superagent'

const FETCH_REPO_QUERY = `
query { 
  viewer {
    repositories(first:100) {
      nodes {
        id
        url
        nameWithOwner
        description
      }
    }
  }
}`

const TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const fetchRepositories = () =>
  post('https://api.github.com/graphql')
    .set({
      Authorization: `Bearer ${TOKEN}`,
    })
    .send({
      query: FETCH_REPO_QUERY,
    })

export const useRepoQuery = (deps = []) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  })

  useEffect(() => {
    fetchRepositories()
      .then((x) => {
        setState({
          error: null,
          loading: false,
          data: x.body.data,
        })
      })
      .catch((error) => setState({ loading: false, error, data: null }))
  }, deps)

  return state
}
