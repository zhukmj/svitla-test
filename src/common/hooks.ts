import { useState, useEffect, useCallback } from 'react';
import { statuses } from './emuns';

export function useSearch(query: string, data: Candidate[]) {
  const [filteredData, updateFilteredData] = useState(data);

  useEffect(() => {
    /**
     * Create search pattern from query string:
     * 1. Escape all regex special characters
     * 2. Replace AND with forward lookup expression
     * 3. Replace OR with alternation expression
     * 4. Add missing characters to the start/end of expression to finish it
     *
     * Example (query -> pattern):
     * "one AND two OR two AND three" -> /((?=.*one)(?=.*two))|((?=.*two)(?=.*three))/
     */
    const pattern = query
      .trim()
      .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      .replace(/\sAND\s/g, ')(?=.*')
      .replace(/\sOR\s/g, '))|((?=.*')
      .replace(/^.+$/, '((?=.*$&))');

    const regex = new RegExp(pattern, 'gi');

    /**
     * For each row, concatenate all columns and test resulting string against our regex
     */
    const nextFilteredData = data.filter(c => regex.test(Object.values(c).join(' ')));

    /**
     * Update state with filtered data
     */
    updateFilteredData(nextFilteredData);
  }, [data, query]);

  return filteredData;
}

export function useStats(data: Candidate[]) {
  /**
   * Statistic data
   */
  const getStats = useCallback(
    () =>
      statuses.reduce(
        (obj, status) => ({
          ...obj,
          [status]: data.filter(r => r.status === status).length,
        }),
        {} as { [key: string]: number },
      ),
    [data],
  );

  const [stats, setStats] = useState(getStats());

  useEffect(() => setStats(getStats()), [data, getStats]);

  return stats;
}
