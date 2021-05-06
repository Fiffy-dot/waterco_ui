import 
{ CHECK_AUTH, 
  UPDATE_CURRENT_USER,
  UPDATE_ALL_BILLS,
  UPDATE_NUMBER_BILLS,
  UPDATE_ALL_MEMBER,
  UPPDATE_NUMBER_MEMBER,
  UPDATE_PAYMENT_LIST,
  UPDATE_PAYMENT_MEMBER,
  UPDATE_PAYMENT_PREMISE,
  UPDATE_PAYMENT_PREMISE_NUMBER ,
  UPDATE_ALL_PREMISE,
  UPDATE_PREMISE_MEMBER,
  UPDATE_ALL_ROUTE,
  UPDATE_PREMISE_ROUTE,
  UPDATE_ALL_USER,
} from "./types";

export const InitialState = {
  checkAuth: false,
  currentUser: [],
  allBills: [],
  numberAllBill: 0,
  allMembers: [],
  numberMembers: 0,
  allPayments: [],
  numberPayment: 0,
  allPaymentByPremises: [],
  numberAllPaymentByPremises: 0,
  allPremises: [],
  allPremisesMember: [],
  allRoutes: [],
  allPremiseInRoute: [],
  allUsers: [],
};

export function Reducer(state, action) {
  switch (action.type) {
    case CHECK_AUTH:
      return {
        ...state,
        checkAuth: action.payload,
      };
    case UPDATE_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      }
    case UPDATE_ALL_BILLS:
      return {
        ...state,
        allBills: action.payload,
      }
    case UPDATE_NUMBER_BILLS:
      return {
        ...state,
        numberAllBill: action.payload,
      }
    case UPDATE_ALL_MEMBER:
      return {
        ...state,
        allMembers: action.payload
      }
    case UPPDATE_NUMBER_MEMBER:
      return {
        ...state,
        numberMembers: action.payload,
      }
    case UPDATE_PAYMENT_LIST:
      return {
        ...state,
        allPayments: action.payload,
      }
    case UPDATE_PAYMENT_MEMBER:
      return {
        ...state,
        numberPayment: action.payload,
      }
    case UPDATE_PAYMENT_PREMISE:
      return {
        ...state,
        allPaymentByPremises: action.payload,
      }
    case UPDATE_PAYMENT_PREMISE_NUMBER :
      return {
        ...state,
        numberAllPaymentByPremises: action.payload,
      } 
    case UPDATE_ALL_PREMISE:
      return {
        ...state,
        allPremises : action.payload,
      } 
    case UPDATE_PREMISE_MEMBER:
      return {
        ...state, 
        allPremisesMember : action.payload
      }
    case UPDATE_ALL_ROUTE:
      return {
        ...state,
        allRoutes : action.payload
      }
    case UPDATE_PREMISE_ROUTE:
      return {
        ...state,
        allPremiseInRoute: action.payload
      }
    case UPDATE_ALL_USER:
      return {
        ...state,
        allUsers : action.payload
      }
    default:
      return state;
  }
}
