export const formatQueue = (queue, loading) => (
  loading ? 'Loading…' : queue ?? 'Not available'
)
