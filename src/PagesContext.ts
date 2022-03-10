
import React from "react";

export enum Pages {
  ContactList = 'ContactList',
  ContactAdd = 'ContactAdd',
}

interface IContextProps {
  currentPage: Pages;
  setCurrentPage: (page: Pages) => void;
}

export const PageContext = React.createContext({} as IContextProps);
