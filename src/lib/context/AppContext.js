import React from 'react';

const AppContext = React.createContext();

const useAppContext = () => React.useContext(AppContext);

const AppContextProvider = ({ children }) => {
  const initialState = {
    tasks: [{ id: 1, name: 'first' }],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD': {
        return [
          ...state,
          {
            id: action.id,
            name: action.name,
          },
        ];
      }
    }
  };

  const [globalState, dispatch] = React.useReducer(reducer, initialState);

  const addItem = ({ id, name }) => {
    dispatch({
      type: 'ADD',
      id,
      name,
    });
  };

  return (
    <AppContext.Provider value={{ globalState, addItem }}>
      {children}
    </AppContext.Provider>
  );
};

export { useAppContext, AppContextProvider };
