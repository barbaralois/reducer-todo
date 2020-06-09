export const initialState = [
  {
    item: 'Wash the dog',
    completed: false,
    id: 13487829,
  },
  {
    item: 'Sweep the kitchen',
    completed: false,
    id: 28578347,
  },
];

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          item: action.payload,
          completed: false,
          id: Date.now(),
        },
      ];
    case 'TOGGLE_COMPLETED':
      return state.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      });
    case 'CLEAR_COMPLETED':
      return state.filter((item) => !item.completed);
    default:
      return state;
  }
};
