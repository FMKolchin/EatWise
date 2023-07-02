
import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import saga from './saga';


const configStoreFunction=()=>{
    const SagaMiddleware=createSagaMiddleware({});

    const middleware=[SagaMiddleware];

    const store = configureStore({
        reducer,
        middleware
    })
    SagaMiddleware.run(saga);
     
    return store;
}

export default configStoreFunction;