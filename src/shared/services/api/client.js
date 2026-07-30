import { API_BASE_URL } from '@/shared/constants/env'

export class ApiError extends Error {
  constructor(message, { status, data } = {}) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.data = data
  }
}

export async function apiClient(path, options = {}) {
  const {
    method = 'GET',
    body,
    headers = {},
    signal,
  } = options

  const response = await fetch(`${API_BASE_URL}${path}`, {
    method,
    signal,
    headers: {
      Accept: 'application/json',
      ...(body ? { 'Content-Type': 'application/json' } : {}),
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  })

  const contentType = response.headers.get('content-type') || ''
  const data = contentType.includes('application/json')
    ? await response.json()
    : await response.text()

  if (!response.ok) {
    throw new ApiError(
      typeof data === 'object' && data?.message
        ? data.message
        : `Request failed with status ${response.status}`,
      { status: response.status, data },
    )
  }

  return data
}
