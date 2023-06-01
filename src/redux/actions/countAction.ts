export interface CountProps {
  count: number;
}

export interface CountAction {
  type: COUNT_ACTIONS;
}

export enum COUNT_ACTIONS {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
}

export const increment = () => {
  return {
    type: COUNT_ACTIONS.INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: COUNT_ACTIONS.DECREMENT,
  };
};
