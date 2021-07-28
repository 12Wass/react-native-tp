import React, {useState, useEffect} from 'react';
import List from './Cart/List';
import ItemShow from './ItemShow';
import Button from './lib/Button';
import Modal from './lib/Modal';
import CreateTransactionButton from './CreateTransactionButton';

function Body() {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    console.log('modal updated', modal);
    return () => {
      console.log('will Update', modal);
    };
  }, [modal]);

  useEffect(() => {
    console.log('modal updated', modal);
    return () => {
      console.log('will Update', modal);
    };
  }, [modal]);

  useEffect(() => {
    console.log('did mount');
    return () => {
      console.log('will unmount');
    };
  }, []);

  return (
    <>
      <ItemShow />
      <List />
      <CreateTransactionButton />
    </>
  );
}

export default Body;
