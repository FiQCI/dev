import { useCallback, useEffect, useState } from 'react'

export const useQueues = (queueUrl) => {
  const [queues, setQueues] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchQueues = useCallback(async () => {
    setLoading(true);
    try {
      const resp = await fetch(queueUrl, { cache: 'no-store' });
      const result = await resp.json();
      setQueues(result?.data || {});
      setError(null);
    } catch (err) {
      console.error(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [queueUrl]);

  useEffect(() => {
    fetchQueues();
  }, [fetchQueues]);

  return { queues, error, loading, refetch: fetchQueues };
}
