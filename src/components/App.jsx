import {useEffect} from "react";
import {useDispatch} from "react-redux";

import { current } from "../redux/auth/auth-operations";
import MyRoutes from '../Routes'
import './reset.css'

export const App = () => {
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(current());
  }, [dispatch])
  return (
    <>
    <MyRoutes />
    </>
  );
};
