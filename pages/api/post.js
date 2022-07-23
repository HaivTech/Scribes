import { getError } from '../../lib/error'
import client from './client'

export const getPost = async (pageNo, limit) => {
  try {
    const { data } = await client(`/post/index?pageNo=${pageNo}&limit=${limit}`)
    return data
  } catch (error) {
    getError(error)
  }
}

export const deletePost = async (postId) => {
  try {
    const { data } = await client.delete(`/post/${postId}`)
    return data
  } catch (error) {
    const { response } = error
    if (response?.data) {
      return response.data
    }
    return { error: error.message || error }
  }
}

export const searchPost = async (query) => {
  try {
    const { data } = await client(`/post/search?title=${query}`)
    return data
  } catch (error) {
    const { response } = error
    if (response?.data) {
      return response.data
    }
    return { error: error.message || error }
  }
}

export const uploadImage = async (formData) => {
  try {
    console.log(formData)
    const { data } = await client.post('/post/upload-image', formData)
    return data
  } catch (error) {
    const { response } = error
    if (response?.data) {
      return response.data
    }
    return { error: error.message || error }
  }
}

export const createPost = async (formData) => {
  try {
    const { data } = await client.post('/post/create', formData)
    return data
  } catch (error) {
    const { response } = error
    if (response?.data) {
      return response.data
      console.log(response.data)
    }
    return { error: error.message || error }
  }
}

export const getSinglePost = async (slug) => {
  try {
    const { data } = await client(`/post/single/${slug}`)
    return data
  } catch (error) {
    const { response } = error
    if (response?.data) {
      return response.data
    }
    return { error: error.message || error }
  }
}

export const updatePost = async (postId, formData) => {
  try {
    console.log(postId)
    const { data } = await client.put(`/post/${postId}`, formData)
    return data
  } catch (error) {
    const { response } = error
    if (response?.data) {
      return response.data
      console.log(response.data)
    }
    return { error: error.message || error }
  }
}

export const getFeaturedPost = async () => {
  try {
    const { data } = await client(`/post/featured-posts`)
    return data
  } catch (error) {
    const { response } = error
    if (response?.data) {
      return response.data
    }
    return { error: error.message || error }
  }
}

export const getSimilarPosts = async (id) => {
  try {
    const { data } = await client(`/post/related-posts/${id}`)
    return data
    console.log(data)
  } catch (error) {
    const { response } = error
    if (response?.data) {
      return response.data
    }
    return { error: error.message || error }
  }
}
