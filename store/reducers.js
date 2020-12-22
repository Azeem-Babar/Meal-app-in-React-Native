import {MEALS} from '../data/dummy-data'

const initialState = {
    meals:MEALS,
    favouriteMeal:[],
    filteredMeal:MEALS
};
 const mealsReducers  = (state = initialState , action) => {
    return state ;
}
export default mealsReducers;