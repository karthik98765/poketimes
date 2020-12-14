const initState = {
    posts: [
        {id: '1', title: 'Squirtle Laid an Egg', body: 'lorem ipsum, dolor sit amet consectetur, adipisicing elit, aliquid repellendus, veniam eveniet modi molestias sequi'},
        {id: '2', title: 'Charmander Laid an Egg', body: 'lorem ipsum, dolor sit amet consectetur, adipisicing elit, aliquid repellendus, veniam eveniet modi molestias sequi'}
    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer