// Questo sarà il nostro primo Reducer! (il nostro ufficio postale di smistamento richieste)
// un reducer dev'essere una funzione PURA, che prenderà lo STATO CORRENTE nel momento della "dispatch" e l'action inviata
// grazie a queste due informazioni computerà SEMPRE un NUOVO STATO (senza ambiguità)

// OGNI VOLTA che verrà "risvegliato" (ad ogni dispatch) avrà bisogno di leggere dalla nostra action il suo TYPE (per questo il type è obbligatorio)
// in più opzionalmente ci potrebbe essere anche un payload da dover leggere

// da dove cominciare quindi?
// si comincia col creare uno stato iniziale (default) per il primo avvio dell'applicazione:

const initialState = {
  main: {
    companies: []
  }
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        main: {
          ...state.main,
          companies: [...state.main.companies, action.payload]
        }
      };

    default:
      return state;
  }
};

export default mainReducer;
