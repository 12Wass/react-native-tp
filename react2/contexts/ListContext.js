import React, {
  createContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from 'react';

const data = [
  {id: 1, name: 'plate', unitPrice: 1, quantity: 3},
  {id: 2, name: 'spoon', unitPrice: 1, quantity: 3},
];

export const ListContext = createContext();

export default function ListProvider({children}) {
  const [list, setList] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    //fetch()
    //.then(data =>
    setList(data);
    setReady(true);
    //);
  }, []);

  const totalPrice = useMemo(
    () => list.reduce((acc, item) => acc + item.quantity * item.unitPrice, 0),
    [list],
  );

  const addElement = useCallback(
    async item => {
      //localStorage.set("list", JSON.stringify([...list, item]))
      setList([...list, item]);
      //)
    },
    [list],
  );

  const deleteElement = useCallback(
    async item => {
      //localStorage.set("list", JSON.stringify([...list, item]))
      setList(list.filter(_it => _it.id !== item.id));
      //)
    },
    [list],
  );

  const editElement = useCallback(
    async item => {
      //localStorage.set("list", JSON.stringify([...list, item]))
      setList(list.map(_it => (_it.id !== item.id ? _it : item)));
      //)
    },
    [list],
  );

  const getItem = useCallback(
    id => {
      return list.find(_it => _it.id === id);
    },
    [list],
  );

  return (
    <ListContext.Provider
      value={{
        list,
        totalPrice,
        addElement,
        deleteElement,
        editElement,
        getItem,
        isReady: ready,
      }}>
      {children}
    </ListContext.Provider>
  );
}
