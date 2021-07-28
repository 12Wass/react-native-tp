import React, {
  createContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from 'react';

import {getCodes, editCode, addCode, deleteCode} from './actions/codes';

export const CodeContext = createContext();

export default function CodeProvider({children}) {
  const [list, setList] = useState([]);
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(false);

  useEffect(() => {
    fetchList(undefined, true).then(() => setReady(true));
  }, []);

  const fetchList = useCallback(
    async (filters = {page: 1, perPage: 10}, invalidate = false) => {
      setLoading(true);
      if (!filters.perPage) filters.perPage = 10;
      return getCodes(filters).then(data => {
        setLoading(false);
        setList(invalidate ? data : [...list, data]);
        setPage(filters.page);
      });
    },
  );

  const addElement = useCallback(
    async item => {
      const result = await addCode(item);
      setList([...list, result]);
    },
    [list],
  );

  const deleteElement = useCallback(
    async item => {
      await deleteCode(item);
      setList(list.filter(_it => _it._id !== item._id));
    },
    [list],
  );

  const editElement = useCallback(
    async item => {
      const result = await editCode(item);
      setList(list.map(_it => (_it._id !== result._id ? _it : result)));
      //)
    },
    [list],
  );

  const getItem = useCallback(
    id => {
      return list.find(_it => _it._id === id);
    },
    [list],
  );

  return (
    <CodeContext.Provider
      value={{
        list,
        fetchList,
        addElement,
        deleteElement,
        editElement,
        getItem,
        loading,
        isReady: ready,
        page,
      }}>
      {children}
    </CodeContext.Provider>
  );
}
