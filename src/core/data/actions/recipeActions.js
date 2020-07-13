export const SET_CURRENT_RECIPE_DRAFT = "SET_CURRENT_RECIPE_DRAFT";
export function setCurrentRecipeDraft(recipeId) {
    return {
        type: SET_CURRENT_RECIPE_DRAFT,
        payload: recipeId
    };
}
