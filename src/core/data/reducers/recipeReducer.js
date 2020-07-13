import  * as recipeActions from "../actions/recipeActions";

export default function(
    state = {
        currentDraft: null
    },
    action
) {

    switch (action.type) {

        case recipeActions.SET_CURRENT_RECIPE_DRAFT: {
            return {
                ...state,
                currentDraft: action.payload
            };
        }

        default:
            return state;
    }
}
