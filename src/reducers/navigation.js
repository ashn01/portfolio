const initialState = {
    nav:'project'
}

const navigation = (state = initialState, action) => {
    switch (action.type)
    {
        case 'ACTIVE_NAVIGATION' :
            return {
                    ...state,
                    nav: action.nav
                }
            
        default :
            return state
    }
}

export default navigation