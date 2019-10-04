let store = new Vuex.Store({
    state: {
        model: {},
        title: '',
        m4v: '',
        swfPath: '',
        urlLookupFrame: '',
        urlLookupFE: '',
        currentFrame: 0,
        currentState: 'paused',
        duration: 0,
        totalFrames: 0,
        annotation: {}
    },
    getters: {
        currentFrame(state) {
            return state.currentFrame
        },
        currentState(state) {
            return state.currentState
        },
        duration(state) {
            return state.duration
        },
    },
    mutations: {
        currentFrame(state, value) {
            state.currentFrame = value;
        },
        currentState(state, value) {
            state.currentState = value;
        },
        duration(state, value) {
            state.duration = value;
        },
        totalFrames(state, value) {
            state.totalFrames = value;
        },
        model(state, model) {
            state.model = model;
        },
        annotation(state, annotation) {
            state.annotation = annotation;
        }
    },
    actions: {
        setDuration(context, duration) {
            context.commit('duration', duration);
            context.commit('totalFrames', duration * 30); // 30fps
        }
    },
})

